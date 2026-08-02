// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// project imports
import ContainerWrapper from 'components/ContainerWrapper';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

export default function AuthFooter() {
  return (
    <ContainerWrapper>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ gap: 2, justifyContent: { xs: 'center', sm: 'space-between' }, textAlign: { xs: 'center', sm: 'inherit' }, py: 2 }}
      >
        <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
          &copy; {new Date().getFullYear()} Alexandrya. Todos los derechos reservados.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: { xs: 1, sm: 3 }, textAlign: { xs: 'center', sm: 'inherit' } }}>
          <Typography
            variant="subtitle2"
            component={Link}
            href="/terminos"
            underline="hover"
            sx={{ color: 'secondary.main' }}
          >
            Términos y condiciones
          </Typography>
          <Typography
            variant="subtitle2"
            component={Link}
            href="/privacidad"
            underline="hover"
            sx={{ color: 'secondary.main' }}
          >
            Aviso de privacidad
          </Typography>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
