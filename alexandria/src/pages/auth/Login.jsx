import { Link } from 'react-router-dom';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/AuthLogin';

// vibrant
import { headlineMd, colors } from 'themes/vibrant';

// ================================|| LOGIN — VIBRANT ODYSSEY ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Stack sx={{ gap: 3 }}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography sx={{ ...headlineMd, fontSize: '28px', color: colors.onSurface }}>
            Iniciar sesión
          </Typography>
          <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '15px', color: colors.onSurfaceVariant }}>
            Ingresa tus credenciales para continuar.
          </Typography>
        </Stack>

        <AuthLogin />

        <Typography sx={{ textAlign: 'center', fontSize: '14px', color: colors.onSurfaceVariant }}>
          ¿No tienes cuenta?{' '}
          <Typography
            component={Link}
            to="/register"
            sx={{
              color: colors.primary,
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            Regístrate aquí
          </Typography>
        </Typography>
      </Stack>
    </AuthWrapper>
  );
}
