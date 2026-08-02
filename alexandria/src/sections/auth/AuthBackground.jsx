import Box from '@mui/material/Box';
import { colors } from 'themes/vibrant';

// ==============================|| AUTH — VIBRANT ODYSSEY BACKGROUND ||============================== //

export default function AuthBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        bgcolor: colors.surface,
        overflow: 'hidden'
      }}
    >
      {/* Large ambient blur — primary */}
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary}18 0%, transparent 70%)`,
          top: -120,
          right: -80,
          filter: 'blur(60px)'
        }}
      />
      {/* Medium ambient blur — secondary */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.secondaryContainer}20 0%, transparent 70%)`,
          bottom: -100,
          left: -60,
          filter: 'blur(50px)'
        }}
      />
      {/* Small accent — tertiary */}
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.tertiary}10 0%, transparent 70%)`,
          top: '60%',
          right: '20%',
          filter: 'blur(40px)'
        }}
      />
    </Box>
  );
}
