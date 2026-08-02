// material-ui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import SubjectGrid from 'sections/catalogo/SubjectGrid';

// ==============================|| CATÁLOGO ||============================== //

export default function Catalogo() {
  return (
    <Stack sx={{ gap: 4 }}>
      {/* Header section */}
      <Box>
        <Typography
          sx={{
            fontSize: '10px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'text.disabled',
            mb: 0.5
          }}
        >
          Biblioteca &rsaquo;{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Catálogo Global
          </Box>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Mis Materias
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5, fontSize: '1.05rem' }}>
          Continúa tu camino al dominio total de las ciencias y artes.
        </Typography>
      </Box>

      <SubjectGrid />
    </Stack>
  );
}
