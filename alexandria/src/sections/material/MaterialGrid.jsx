import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// assets
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import PictureOutlined from '@ant-design/icons/PictureOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';

// ==============================|| MATERIAL - GRID ||============================== //

const TYPE_ICON = {
  video: <PlayCircleOutlined />,
  pdf: <FileTextOutlined />,
  imagen: <PictureOutlined />,
  enlace: <LinkOutlined />
};

const TYPE_LABEL = {
  video: 'Video',
  pdf: 'PDF',
  imagen: 'Imagen',
  enlace: 'Enlace'
};

const TYPE_COLOR = {
  video: 'error',
  pdf: 'warning',
  imagen: 'info',
  enlace: 'success'
};

const DEMO_MATERIALS = [
  { id: 'm-1', titulo: 'Estequiometría — Balanceo de ecuaciones', tipo: 'video', materia: 'Química', duracion: '12:30' },
  { id: 'm-2', titulo: 'Tabla periódica interactiva', tipo: 'pdf', materia: 'Química', duracion: null },
  { id: 'm-3', titulo: 'Leyes de Newton — Resumen visual', tipo: 'imagen', materia: 'Física', duracion: null },
  { id: 'm-4', titulo: 'Derivadas — Introducción paso a paso', tipo: 'video', materia: 'Matemáticas', duracion: '18:45' },
  { id: 'm-5', titulo: 'Guía de figuras retóricas', tipo: 'pdf', materia: 'Español', duracion: null },
  { id: 'm-6', titulo: 'Revolución Mexicana — Línea del tiempo', tipo: 'imagen', materia: 'Historia de México', duracion: null },
  { id: 'm-7', titulo: 'Fotosíntesis — Proceso completo', tipo: 'video', materia: 'Biología', duracion: '15:20' },
  { id: 'm-8', titulo: 'Calculadora de ecuaciones cuadráticas', tipo: 'enlace', materia: 'Matemáticas', duracion: null },
  { id: 'm-9', titulo: 'Comprensión lectora — Estrategias', tipo: 'pdf', materia: 'Habilidad Verbal', duracion: null }
];

export default function MaterialGrid({ materials, onSelect }) {
  const data = materials || DEMO_MATERIALS;

  return (
    <Grid container spacing={2.5}>
      {data.map((mat) => (
        <Grid key={mat.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardActionArea onClick={() => onSelect && onSelect(mat)} sx={{ height: '100%' }}>
              <CardContent>
                <Stack sx={{ gap: 1.5 }}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${TYPE_COLOR[mat.tipo]}.lighter`,
                        color: `${TYPE_COLOR[mat.tipo]}.main`,
                        fontSize: '1.25rem'
                      }}
                    >
                      {TYPE_ICON[mat.tipo]}
                    </Box>
                    <Chip label={TYPE_LABEL[mat.tipo]} size="small" color={TYPE_COLOR[mat.tipo]} variant="light" />
                  </Stack>

                  <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
                    {mat.titulo}
                  </Typography>

                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {mat.materia}
                    </Typography>
                    {mat.duracion && (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {mat.duracion}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

MaterialGrid.propTypes = {
  materials: PropTypes.array,
  onSelect: PropTypes.func
};
