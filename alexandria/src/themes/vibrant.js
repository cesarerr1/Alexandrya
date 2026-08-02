// ==============================|| VIBRANT ODYSSEY — ESTILOS COMPARTIDOS ||============================== //

// Glass card base
export const glassCard = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(12px)',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
  borderRadius: '32px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(99, 14, 212, 0.08)'
  }
};

// Smaller glass card (24px radius)
export const glassCardSm = {
  ...glassCard,
  borderRadius: '24px'
};

// Vibrant gradient (primary purple → cyan)
export const vibrantGradient = {
  background: 'linear-gradient(135deg, #630ed4 0%, #57dffe 100%)'
};

// Vibrant glow shadow
export const vibrantGlow = {
  boxShadow: '0 0 20px rgba(99, 14, 212, 0.2)'
};

// Montserrat headline
export const headlineLg = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: { xs: '28px', md: '32px' },
  fontWeight: 700,
  lineHeight: 1.2
};

export const headlineMd = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1.3
};

export const headlineSm = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.4
};

export const displayLg = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: { xs: '32px', md: '48px' },
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: '-0.02em'
};

// Label style (small uppercase)
export const labelMd = {
  fontFamily: 'Be Vietnam Pro, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: '0.05em'
};

// Label XS (super small)
export const labelXs = {
  fontFamily: 'Be Vietnam Pro, sans-serif',
  fontSize: '10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em'
};

// Colors
export const colors = {
  primary: '#630ed4',
  primaryContainer: '#7c3aed',
  secondary: '#00687a',
  secondaryContainer: '#57dffe',
  tertiary: '#9b005c',
  tertiaryContainer: '#bf2076',
  surface: '#f7f9fb',
  surfaceContainerLow: '#f2f4f6',
  surfaceContainerHigh: '#e6e8ea',
  onSurface: '#191c1e',
  onSurfaceVariant: '#4a4455',
  outline: '#7b7487',
  outlineVariant: '#ccc3d8'
};

// Hover lift for interactive cards
export const hoverLift = {
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
  }
};
