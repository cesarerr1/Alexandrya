import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import Logo from 'components/logo';
import AuthCard from './AuthCard';
import AuthBackground from './AuthBackground';

// vibrant
import { colors, headlineLg, labelXs } from 'themes/vibrant';

// icons
import { BookOutlined, SafetyCertificateOutlined, ThunderboltOutlined } from '@ant-design/icons';

// ==============================|| AUTH WRAPPER — VIBRANT ODYSSEY ||============================== //

const features = [
  { icon: BookOutlined, text: '11 materias de preparación para exámenes de admisión' },
  { icon: ThunderboltOutlined, text: 'Evaluaciones ilimitadas con retroalimentación al instante' },
  { icon: SafetyCertificateOutlined, text: 'Tu progreso protegido con sesión segura' }
];

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <AuthBackground />
      <Grid container sx={{ minHeight: '100vh' }}>
        {/* Left panel — branding + features (desktop only) */}
        <Grid
          size={{ xs: 0, md: 5, lg: 6 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            px: { md: 6, lg: 10 },
            py: 6
          }}
        >
          <Box sx={{ mb: 6 }}>
            <Logo to="/" />
          </Box>

          <Typography sx={{
            ...headlineLg,
            fontSize: { md: '36px', lg: '42px' },
            fontWeight: 800,
            color: colors.onSurface,
            mb: 2,
            lineHeight: 1.15
          }}>
            Prepárate para tu examen de admisión
          </Typography>
          <Typography sx={{
            fontFamily: 'Be Vietnam Pro, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: colors.onSurfaceVariant,
            mb: 5,
            maxWidth: 480
          }}>
            Accede a simuladores, material de apoyo y seguimiento personalizado de tu progreso.
          </Typography>

          <Stack sx={{ gap: 3 }}>
            {features.map((f) => (
              <Stack key={f.text} direction="row" sx={{ gap: 2, alignItems: 'center' }}>
                <Box sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '14px',
                  bgcolor: `${colors.primary}12`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <f.icon style={{ fontSize: 20, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '15px', color: colors.onSurface }}>
                  {f.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>

        {/* Right panel — auth card */}
        <Grid
          size={{ xs: 12, md: 7, lg: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: { xs: 4, md: 0 },
            px: { xs: 2, md: 4 }
          }}
        >
          {/* Mobile logo */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
            <Logo to="/" />
          </Box>

          <AuthCard>{children}</AuthCard>

          {/* Footer */}
          <Typography sx={{ ...labelXs, color: colors.outline, mt: 3, textAlign: 'center', fontSize: '11px' }}>
            © 2026 Alexandrya. Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
