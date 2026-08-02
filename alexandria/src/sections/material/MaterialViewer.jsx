import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import PictureOutlined from '@ant-design/icons/PictureOutlined';

// ==============================|| MATERIAL - VIEWER (PROTEGIDO) ||============================== //

const TYPE_ICON = {
  video: <PlayCircleOutlined style={{ fontSize: 48 }} />,
  pdf: <FileTextOutlined style={{ fontSize: 48 }} />,
  imagen: <PictureOutlined style={{ fontSize: 48 }} />
};

export default function MaterialViewer({ material, onBack }) {
  if (!material) return null;

  // TODO: solicitar URL firmada via GET /api/v1/media/{id}/url
  const watermarkText = 'alumno@alexandrya.mx';

  return (
    <Stack sx={{ gap: 2 }}>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
        <IconButton onClick={onBack} aria-label="Volver al listado">
          <ArrowLeftOutlined />
        </IconButton>
        <Typography variant="h5">{material.titulo}</Typography>
      </Stack>

      <MainCard>
        {/* Contenedor del visor con watermark overlay */}
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'grey.100',
            borderRadius: 2,
            overflow: 'hidden',
            minHeight: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            // Deshabilitar clic derecho visualmente
            '& img, & video': {
              pointerEvents: 'none'
            }
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Placeholder del reproductor/visor */}
          {material.tipo === 'video' && (
            <Stack sx={{ alignItems: 'center', gap: 2, py: 6 }}>
              <Box sx={{ color: 'primary.main' }}>{TYPE_ICON.video}</Box>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Reproductor de video
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                El video se reproducirá aquí vía streaming con URL firmada
              </Typography>
              {material.duracion && (
                <Chip label={`Duración: ${material.duracion}`} size="small" variant="outlined" />
              )}
            </Stack>
          )}

          {material.tipo === 'pdf' && (
            <Stack sx={{ alignItems: 'center', gap: 2, py: 6 }}>
              <Box sx={{ color: 'warning.main' }}>{TYPE_ICON.pdf}</Box>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Visor de PDF
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                El documento se renderizará embebido sin opción de descarga
              </Typography>
            </Stack>
          )}

          {material.tipo === 'imagen' && (
            <Stack sx={{ alignItems: 'center', gap: 2, py: 6 }}>
              <Box sx={{ color: 'info.main' }}>{TYPE_ICON.imagen}</Box>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Visor de imagen
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                La imagen se mostrará con watermark superpuesto
              </Typography>
            </Stack>
          )}

          {/* Watermark overlay (RN-060-05) */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            <Typography
              sx={{
                color: 'rgba(0,0,0,0.06)',
                fontSize: '1.5rem',
                fontWeight: 700,
                transform: 'rotate(-30deg)',
                letterSpacing: 4,
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              {watermarkText}
            </Typography>
          </Box>
        </Box>

        {/* Info del material */}
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Stack sx={{ gap: 0.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {material.titulo}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {material.materia}
            </Typography>
          </Stack>
          <Button variant="outlined" onClick={onBack} sx={{ textTransform: 'none' }}>
            Volver al listado
          </Button>
        </Stack>
      </MainCard>
    </Stack>
  );
}

MaterialViewer.propTypes = {
  material: PropTypes.object,
  onBack: PropTypes.func
};
