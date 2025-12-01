import { memo } from 'react';

const FloatingShapes = memo(() => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(118, 75, 162, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(65px)',
      }}
    />
  </div>
));

FloatingShapes.displayName = 'FloatingShapes';

export default FloatingShapes;
