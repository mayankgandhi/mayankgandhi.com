---
title: Swift Concurrent Execution: Complete Guide
date: 2025-10-06
description: A comprehensive guide to concurrent execution in Swift, covering Task Groups, Dispatch Groups, async/let, Combine, NSOperationQueue, Actors, and performance comparisons.
---

# Swift Concurrent Execution: Complete Guide

## 1. Task Groups (Swift Concurrency)

### Basic TaskGroup Example
```swift
import Foundation

func fetchDataWithTaskGroup() async throws -> [String] {
    try await withThrowingTaskGroup(of: String.self) { group in
        // Add multiple tasks
        group.addTask {
            try await fetchUserData(id: 1)
        }
        group.addTask {
            try await fetchUserData(id: 2)
        }
        group.addTask {
            try await fetchUserData(id: 3)
        }
        
        // Collect results
        var results: [String] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}

// Dynamic task creation
func processBatchWithTaskGroup(items: [Int]) async throws -> [ProcessedData] {
    try await withThrowingTaskGroup(of: ProcessedData?.self) { group in
        // Limit concurrent operations
        let maxConcurrency = 4
        var results: [ProcessedData] = []
        
        for (index, item) in items.enumerated() {
            if index >= maxConcurrency {
                // Wait for one to complete before adding more
                if let result = try await group.next() {
                    results.append(result)
                }
            }
            
            group.addTask {
                try await processItem(item)
            }
        }
        
        // Collect remaining results
        for try await result in group {
            if let result = result {
                results.append(result)
            }
        }
        
        return results
    }
}
```

### Advanced TaskGroup with Priority and Cancellation
```swift
func advancedTaskGroupExample() async throws {
    try await withThrowingTaskGroup(of: (Int, String).self) { group in
        // Add tasks with different priorities
        group.addTask(priority: .high) {
            try await Task.sleep(nanoseconds: 1_000_000_000)
            return (1, "High priority task")
        }
        
        group.addTask(priority: .low) {
            try await Task.sleep(nanoseconds: 500_000_000)
            return (2, "Low priority task")
        }
        
        group.addTask(priority: .userInitiated) {
            // Check for cancellation
            try Task.checkCancellation()
            return (3, "User initiated task")
        }
        
        // Cancel all tasks after timeout
        group.addTask {
            try await Task.sleep(nanoseconds: 3_000_000_000)
            group.cancelAll()
            return (0, "Timeout")
        }
        
        // Process results as they complete
        for try await (id, result) in group {
            print("Task \(id): \(result)")
            if id == 0 { break } // Timeout occurred
        }
    }
}
```

## 2. Dispatch Groups (Grand Central Dispatch)

### Basic DispatchGroup Example
```swift
import Foundation

func fetchDataWithDispatchGroup(completion: @escaping ([String]) -> Void) {
    let dispatchGroup = DispatchGroup()
    var results: [String] = []
    let resultsQueue = DispatchQueue(label: "results.queue", attributes: .concurrent)
    
    // Enter group for each operation
    dispatchGroup.enter()
    URLSession.shared.dataTask(with: URL(string: "api1")!) { data, _, _ in
        resultsQueue.async(flags: .barrier) {
            results.append("Result 1")
        }
        dispatchGroup.leave()
    }.resume()
    
    dispatchGroup.enter()
    URLSession.shared.dataTask(with: URL(string: "api2")!) { data, _, _ in
        resultsQueue.async(flags: .barrier) {
            results.append("Result 2")
        }
        dispatchGroup.leave()
    }.resume()
    
    dispatchGroup.enter()
    performAsyncOperation { result in
        resultsQueue.async(flags: .barrier) {
            results.append(result)
        }
        dispatchGroup.leave()
    }
    
    // Wait for all operations to complete
    dispatchGroup.notify(queue: .main) {
        completion(results)
    }
}

// With timeout and error handling
func dispatchGroupWithTimeout() {
    let group = DispatchGroup()
    let queue = DispatchQueue.global(qos: .userInitiated)
    var hasTimedOut = false
    
    // Multiple concurrent operations
    for i in 1...5 {
        group.enter()
        queue.async {
            // Simulate work
            Thread.sleep(forTimeInterval: Double.random(in: 0.5...2.0))
            
            if !hasTimedOut {
                print("Task \(i) completed")
            }
            group.leave()
        }
    }
    
    // Wait with timeout
    let result = group.wait(timeout: .now() + 3)
    
    switch result {
    case .success:
        print("All tasks completed within timeout")
    case .timedOut:
        hasTimedOut = true
        print("Timed out waiting for tasks")
    }
}
```

### Advanced DispatchGroup with Semaphore for Rate Limiting
```swift
func rateLimitedDispatchGroup(urls: [URL]) {
    let group = DispatchGroup()
    let semaphore = DispatchSemaphore(value: 3) // Max 3 concurrent requests
    let queue = DispatchQueue(label: "download.queue", attributes: .concurrent)
    
    for url in urls {
        group.enter()
        queue.async {
            semaphore.wait() // Acquire semaphore
            
            URLSession.shared.dataTask(with: url) { data, response, error in
                defer {
                    semaphore.signal() // Release semaphore
                    group.leave()
                }
                
                // Process data
                if let data = data {
                    print("Downloaded \(data.count) bytes from \(url)")
                }
            }.resume()
        }
    }
    
    group.wait()
    print("All downloads completed")
}
```

## 3. Async Let Syntax (Structured Concurrency)

### Basic Async Let Example
```swift
func fetchMultipleDataWithAsyncLet() async throws -> UserProfile {
    // All three tasks start immediately and run concurrently
    async let userInfo = fetchUserInfo()
    async let userPosts = fetchUserPosts()
    async let userFollowers = fetchUserFollowers()
    
    // Await all results (in any order they complete)
    let profile = UserProfile(
        info: try await userInfo,
        posts: try await userPosts,
        followers: try await userFollowers
    )
    
    return profile
}

// With error handling and partial results
func fetchDataWithPartialFailure() async -> DataBundle {
    async let criticalData = fetchCriticalData()
    async let optionalData = fetchOptionalData()
    async let enhancementData = fetchEnhancementData()
    
    // Handle partial failures
    let critical = try? await criticalData ?? CriticalData.default
    let optional = try? await optionalData // Can be nil
    let enhancement = try? await enhancementData // Can be nil
    
    return DataBundle(
        critical: critical,
        optional: optional,
        enhancement: enhancement
    )
}
```

### Complex Async Let with Nested Concurrency
```swift
func complexAsyncLetExample() async throws -> CompleteDataset {
    // First wave of concurrent operations
    async let metadata = fetchMetadata()
    async let configuration = fetchConfiguration()
    
    // Wait for configuration before starting dependent operations
    let config = try await configuration
    
    // Second wave based on configuration
    async let primaryData = fetchPrimaryData(config: config)
    async let secondaryData = fetchSecondaryData(config: config)
    async let tertiaryData = fetchTertiaryData(config: config)
    
    // Combine all results
    return CompleteDataset(
        metadata: try await metadata,
        primary: try await primaryData,
        secondary: try await secondaryData,
        tertiary: try await tertiaryData
    )
}

// Async let with cancellation handling
func cancellableAsyncLet() async throws -> [DataItem] {
    async let item1 = Task {
        try Task.checkCancellation()
        return try await fetchItem(id: 1)
    }.value
    
    async let item2 = Task {
        try Task.checkCancellation()
        return try await fetchItem(id: 2)
    }.value
    
    async let item3 = Task {
        try Task.checkCancellation()
        return try await fetchItem(id: 3)
    }.value
    
    // If any task throws, others are automatically cancelled
    return try await [item1, item2, item3]
}
```

## 4. Combine Framework

### Basic Combine Publishers
```swift
import Combine

class DataFetcher {
    private var cancellables = Set<AnyCancellable>()
    
    func fetchMultipleWithCombine() {
        // Create multiple publishers
        let publisher1 = URLSession.shared.dataTaskPublisher(for: URL(string: "api1")!)
            .map(\.data)
            .decode(type: Model1.self, decoder: JSONDecoder())
            .eraseToAnyPublisher()
        
        let publisher2 = URLSession.shared.dataTaskPublisher(for: URL(string: "api2")!)
            .map(\.data)
            .decode(type: Model2.self, decoder: JSONDecoder())
            .eraseToAnyPublisher()
        
        let publisher3 = URLSession.shared.dataTaskPublisher(for: URL(string: "api3")!)
            .map(\.data)
            .decode(type: Model3.self, decoder: JSONDecoder())
            .eraseToAnyPublisher()
        
        // Combine all publishers
        Publishers.Zip3(publisher1, publisher2, publisher3)
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { completion in
                    switch completion {
                    case .finished:
                        print("All requests completed successfully")
                    case .failure(let error):
                        print("Error: \(error)")
                    }
                },
                receiveValue: { model1, model2, model3 in
                    print("Received all three models")
                    // Process combined results
                }
            )
            .store(in: &cancellables)
    }
    
    // Using Merge for first-to-complete scenarios
    func fetchFastestSource() {
        let source1 = fetchFromSource1()
        let source2 = fetchFromSource2()
        let source3 = fetchFromSource3()
        
        Publishers.Merge3(source1, source2, source3)
            .first()
            .sink(
                receiveCompletion: { _ in },
                receiveValue: { result in
                    print("First result received: \(result)")
                }
            )
            .store(in: &cancellables)
    }
}
```

### Advanced Combine Patterns
```swift
// Parallel processing with flatMap
func processItemsInParallel(items: [Item]) -> AnyPublisher<ProcessedItem, Error> {
    items.publisher
        .flatMap(maxPublishers: .max(4)) { item in
            // Process up to 4 items concurrently
            Future<ProcessedItem, Error> { promise in
                DispatchQueue.global().async {
                    do {
                        let processed = try self.processItem(item)
                        promise(.success(processed))
                    } catch {
                        promise(.failure(error))
                    }
                }
            }
        }
        .collect()
        .eraseToAnyPublisher()
}

// Combine with retry and timeout
func robustFetchWithCombine() -> AnyPublisher<Data, Error> {
    URLSession.shared.dataTaskPublisher(for: URL(string: "api")!)
        .map(\.data)
        .timeout(.seconds(5), scheduler: DispatchQueue.global())
        .retry(3)
        .catch { error -> AnyPublisher<Data, Error> in
            // Fallback to cache on failure
            return self.fetchFromCache()
        }
        .eraseToAnyPublisher()
}

// Combining different types of publishers
func complexCombineFlow() {
    let timerPublisher = Timer.publish(every: 1, on: .main, in: .common)
        .autoconnect()
    
    let notificationPublisher = NotificationCenter.default
        .publisher(for: .someNotification)
    
    let networkPublisher = URLSession.shared
        .dataTaskPublisher(for: URL(string: "api")!)
    
    Publishers.CombineLatest3(timerPublisher, notificationPublisher, networkPublisher)
        .sink(
            receiveCompletion: { _ in },
            receiveValue: { timer, notification, response in
                // Handle combined values
            }
        )
        .store(in: &cancellables)
}
```

## 5. NSOperationQueue

### Basic NSOperationQueue Example
```swift
import Foundation

class DataProcessor {
    let operationQueue = OperationQueue()
    
    func processWithOperationQueue() {
        // Configure queue
        operationQueue.maxConcurrentOperationCount = 3
        operationQueue.qualityOfService = .userInitiated
        
        var operations: [Operation] = []
        
        // Create operations
        for i in 1...5 {
            let operation = BlockOperation {
                print("Processing item \(i)")
                Thread.sleep(forTimeInterval: Double.random(in: 0.5...2.0))
                print("Completed item \(i)")
            }
            operations.append(operation)
        }
        
        // Add dependencies
        if operations.count > 1 {
            operations[1].addDependency(operations[0])
        }
        
        // Add completion operation
        let completionOperation = BlockOperation {
            print("All operations completed")
        }
        
        for op in operations {
            completionOperation.addDependency(op)
        }
        operations.append(completionOperation)
        
        // Add all operations to queue
        operationQueue.addOperations(operations, waitUntilFinished: false)
        
        // Wait for completion
        operationQueue.waitUntilAllOperationsAreFinished()
    }
}
```

### Custom NSOperation Subclass
```swift
class NetworkOperation: Operation {
    private let url: URL
    private var task: URLSessionDataTask?
    var result: Data?
    var error: Error?
    
    private var _isExecuting = false
    private var _isFinished = false
    
    override var isExecuting: Bool {
        get { _isExecuting }
        set {
            willChangeValue(forKey: "isExecuting")
            _isExecuting = newValue
            didChangeValue(forKey: "isExecuting")
        }
    }
    
    override var isFinished: Bool {
        get { _isFinished }
        set {
            willChangeValue(forKey: "isFinished")
            _isFinished = newValue
            didChangeValue(forKey: "isFinished")
        }
    }
    
    override var isAsynchronous: Bool { true }
    
    init(url: URL) {
        self.url = url
    }
    
    override func start() {
        if isCancelled {
            isFinished = true
            return
        }
        
        isExecuting = true
        
        task = URLSession.shared.dataTask(with: url) { [weak self] data, response, error in
            guard let self = self else { return }
            
            self.result = data
            self.error = error
            
            self.isExecuting = false
            self.isFinished = true
        }
        
        task?.resume()
    }
    
    override func cancel() {
        task?.cancel()
        super.cancel()
    }
}

// Using custom operations
func useCustomOperations(urls: [URL]) {
    let queue = OperationQueue()
    queue.maxConcurrentOperationCount = 3
    
    let operations = urls.map { NetworkOperation(url: $0) }
    
    // Add completion handlers
    for (index, operation) in operations.enumerated() {
        operation.completionBlock = {
            if let data = operation.result {
                print("Operation \(index) completed with \(data.count) bytes")
            } else if let error = operation.error {
                print("Operation \(index) failed: \(error)")
            }
        }
    }
    
    queue.addOperations(operations, waitUntilFinished: true)
}
```

## 6. Other Approaches

### Using Actors for Concurrent State Management
```swift
actor DataCache {
    private var cache: [String: Data] = [:]
    private var pendingTasks: [String: Task<Data, Error>] = [:]
    
    func fetch(key: String) async throws -> Data {
        // Check cache first
        if let cached = cache[key] {
            return cached
        }
        
        // Check if already fetching
        if let pending = pendingTasks[key] {
            return try await pending.value
        }
        
        // Start new fetch
        let task = Task<Data, Error> {
            let data = try await fetchFromNetwork(key: key)
            cache[key] = data
            pendingTasks[key] = nil
            return data
        }
        
        pendingTasks[key] = task
        return try await task.value
    }
    
    private func fetchFromNetwork(key: String) async throws -> Data {
        // Network fetch implementation
        try await Task.sleep(nanoseconds: 1_000_000_000)
        return Data()
    }
}

// Using the actor
func fetchMultipleWithActor() async throws {
    let cache = DataCache()
    
    // These will run concurrently but coordinate through the actor
    async let data1 = cache.fetch(key: "key1")
    async let data2 = cache.fetch(key: "key2")
    async let data3 = cache.fetch(key: "key3")
    
    let results = try await [data1, data2, data3]
    print("Fetched \(results.count) items")
}
```

### Using Continuations for Callback-Based APIs
```swift
func modernizeCallbackAPI() async throws -> [String] {
    try await withThrowingTaskGroup(of: String.self) { group in
        for i in 1...3 {
            group.addTask {
                try await withCheckedThrowingContinuation { continuation in
                    // Wrap callback-based API
                    legacyAsyncFunction(id: i) { result, error in
                        if let error = error {
                            continuation.resume(throwing: error)
                        } else if let result = result {
                            continuation.resume(returning: result)
                        }
                    }
                }
            }
        }
        
        var results: [String] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}

// Using continuations with timeout
func fetchWithTimeout(url: URL, timeout: TimeInterval) async throws -> Data {
    try await withThrowingTaskGroup(of: Data.self) { group in
        group.addTask {
            try await withCheckedThrowingContinuation { continuation in
                let task = URLSession.shared.dataTask(with: url) { data, _, error in
                    if let error = error {
                        continuation.resume(throwing: error)
                    } else if let data = data {
                        continuation.resume(returning: data)
                    }
                }
                task.resume()
            }
        }
        
        group.addTask {
            try await Task.sleep(nanoseconds: UInt64(timeout * 1_000_000_000))
            throw TimeoutError()
        }
        
        // Return first to complete (either data or timeout)
        guard let result = try await group.next() else {
            throw TimeoutError()
        }
        
        group.cancelAll()
        return result
    }
}
```

## Performance and Memory Comparison Table

| Approach | Memory Usage | CPU Overhead | Ease of Use | Cancellation | Error Handling | Thread Safety | Best Use Case |
|----------|--------------|--------------|-------------|--------------|----------------|---------------|---------------|
| **TaskGroup** | Low-Medium | Low | High | Excellent (automatic) | Built-in with try/catch | Automatic | Modern Swift apps, dynamic task creation |
| **DispatchGroup** | Low | Low | Medium | Manual | Callback-based | Manual synchronization | Legacy codebases, simple coordination |
| **Async Let** | Low | Minimal | Very High | Automatic | Built-in with try/catch | Automatic | Fixed number of concurrent tasks |
| **Combine** | Medium-High | Medium | Medium | Via cancellables | Built-in with operators | Thread-safe | Reactive programming, event streams |
| **NSOperationQueue** | High | Medium-High | Low | Good | Manual | Built-in | Complex dependencies, legacy ObjC code |
| **Actors** | Medium | Low | High | Task-based | Built-in | Guaranteed | Shared mutable state management |

## Detailed Performance Analysis

### Memory Characteristics

**TaskGroup & Async Let (Swift Concurrency)**
- Memory footprint: ~16-32 bytes per Task
- Automatic memory management through ARC
- Stack-allocated when possible (compiler optimization)
- No retain cycles with proper async/await usage
- Memory released immediately after task completion

**DispatchGroup**
- Memory footprint: ~64-128 bytes per group
- Additional overhead for each queue (512 bytes - 2KB)
- Manual memory management considerations
- Potential for retain cycles with closures
- Memory held until notify/wait completes

**Combine**
- Memory footprint: 100-500 bytes per publisher/subscriber
- Additional overhead for operators and transformations
- Subscription management overhead
- Potential for memory leaks with retained cancellables
- Backpressure handling adds memory buffer

**NSOperationQueue**
- Memory footprint: 200-500 bytes per operation
- Queue overhead: 2-4KB
- Additional memory for operation properties
- KVO overhead for state management
- Memory retained until operation removed from queue

### CPU Performance Characteristics

**TaskGroup**
- Context switching: Minimal (cooperative)
- Scheduling overhead: Very low
- Work stealing for load balancing
- CPU cache friendly
- Typical overhead: 0.1-0.5% per task

**DispatchGroup**
- Context switching: Moderate (preemptive)
- Scheduling overhead: Low
- Global queue optimization
- Less cache friendly
- Typical overhead: 0.5-2% per dispatch

**Async Let**
- Near-zero overhead for task creation
- Compiler optimizations for known task count
- Inline execution when possible
- Best CPU cache utilization
- Typical overhead: <0.1% per task

**Combine**
- Operator chain overhead
- Subscription management cost
- Type erasure overhead
- Memory allocation for intermediate values
- Typical overhead: 2-5% depending on chain complexity

**NSOperationQueue**
- KVO overhead for state changes
- Dependency resolution cost
- Queue management overhead
- Thread pool management
- Typical overhead: 3-7% per operation

## Best Practices and Recommendations

### When to Use Each Approach

**Use TaskGroup when:**
- Building new Swift apps with iOS 15+ / macOS 12+
- Dynamic number of concurrent tasks
- Need automatic cancellation propagation
- Working with async/await APIs
- Want type-safe error handling

**Use DispatchGroup when:**
- Supporting older iOS versions (<15)
- Simple fire-and-forget operations
- Integrating with C/Objective-C code
- Don't need result values
- Working with existing GCD code

**Use Async Let when:**
- Fixed, known number of concurrent operations
- Want clearest, most readable code
- All operations start at the same time
- Need structured concurrency guarantees
- Operations have different return types

**Use Combine when:**
- Building reactive interfaces
- Processing streams of values
- Need complex operator chains
- Want declarative data flow
- Integrating with SwiftUI

**Use NSOperationQueue when:**
- Complex dependency graphs
- Need operation priorities
- Want to pause/resume queue
- Require KVO on operation state
- Working with legacy Objective-C code

**Use Actors when:**
- Managing shared mutable state
- Need data race protection
- Want isolation guarantees
- Building concurrent data structures
- Replacing locks/semaphores

### Memory Management Tips

1. **Swift Concurrency**: Tasks are automatically cancelled when parent scope exits
2. **GCD**: Always balance enter/leave calls, use weak self in closures
3. **Combine**: Store cancellables properly, cancel when done
4. **NSOperation**: Cancel operations explicitly, avoid retain cycles in blocks
5. **General**: Profile with Instruments, monitor for leaks and abandoned memory

### Performance Optimization Strategies

1. **Batch Size**: Limit concurrent operations (3-6 for network, 2-4x CPU cores for computation)
2. **Priority**: Use QoS and priority appropriately
3. **Cancellation**: Implement early exit checks
4. **Resource Pooling**: Reuse expensive resources
5. **Measurement**: Profile before optimizing
6. **Cache Results**: Avoid redundant work
7. **Throttling**: Implement rate limiting for API calls