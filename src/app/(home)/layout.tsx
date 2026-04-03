export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ backgroundColor: '#0a0a0f', color: '#f8fafc', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
