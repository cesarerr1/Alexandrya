import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// icons
import {
  NotificationOutlined,
  InfoCircleOutlined,
  ToolOutlined,
  GiftOutlined,
  WarningOutlined,
  RightOutlined,
  ClockCircleOutlined,
  CalendarOutlined
} from '@ant-design/icons';

// vibrant
import { glassCardSm, headlineSm, labelMd, labelXs, colors } from 'themes/vibrant';

// ==============================|| ANUNCIOS - CENTER ||============================== //

const TYPE_CONFIG = {
  informativo: {
    label: 'Información',
    Icon: InfoCircleOutlined,
    color: colors.primary,
    bg: `${colors.primary}12`,
    chipBg: `${colors.primary}12`,
    chipColor: colors.primary
  },
  mantenimiento: {
    label: 'Mantenimiento',
    Icon: ToolOutlined,
    color: '#b45309',
    bg: '#f59e0b12',
    chipBg: '#f59e0b15',
    chipColor: '#b45309'
  },
  promocion: {
    label: 'Promoción',
    Icon: GiftOutlined,
    color: colors.secondary,
    bg: `${colors.secondary}12`,
    chipBg: `${colors.secondary}12`,
    chipColor: colors.secondary
  },
  critico: {
    label: 'Crítico',
    Icon: WarningOutlined,
    color: '#ba1a1a',
    bg: '#ba1a1a12',
    chipBg: '#ba1a1a12',
    chipColor: '#ba1a1a'
  },
  temporada: {
    label: 'Temporada',
    Icon: CalendarOutlined,
    color: colors.tertiary,
    bg: `${colors.tertiary}12`,
    chipBg: `${colors.tertiary}12`,
    chipColor: colors.tertiary
  }
};

const DEMO_ANNOUNCEMENTS = [
  {
    id: 'ann-1',
    titulo: 'Bienvenido a Alexandrya',
    cuerpo: 'Nos da gusto tenerte aquí. Explora el catálogo de materias y comienza a prepararte para tu examen de admisión.',
    tipo: 'informativo',
    canal: 'centro',
    fecha: '15/05/2026',
    activo: true,
    cta_texto: null,
    cta_url: null
  },
  {
    id: 'ann-2',
    titulo: 'Nuevos simulacros disponibles',
    cuerpo: 'Hemos agregado simulacros actualizados de Matemáticas y Español con reactivos alineados al examen COMIPEMS 2026.',
    tipo: 'informativo',
    canal: 'centro',
    fecha: '01/07/2026',
    activo: true,
    cta_texto: 'Ir a evaluaciones',
    cta_url: '/app/evaluaciones'
  },
  {
    id: 'ann-3',
    titulo: 'Mantenimiento programado',
    cuerpo: 'El sábado 2 de agosto de 02:00 a 06:00 hrs la plataforma estará en mantenimiento. Guarda tu progreso antes de esa hora.',
    tipo: 'mantenimiento',
    canal: 'centro',
    fecha: '28/07/2026',
    activo: true,
    cta_texto: null,
    cta_url: null
  },
  {
    id: 'ann-4',
    titulo: 'Temporada COMIPEMS 2026',
    cuerpo: 'Activa tu plan antes del 15 de agosto y recibe acceso completo a los simulacros oficiales de práctica.',
    tipo: 'temporada',
    canal: 'centro',
    fecha: '20/07/2026',
    activo: true,
    cta_texto: 'Ver planes',
    cta_url: '/app/suscripcion'
  },
  {
    id: 'ann-5',
    titulo: 'Refiere y gana un mes gratis',
    cuerpo: 'Invita a tus amigos con tu código de referido. Por cada amigo que se suscriba recibes un mes de acceso gratuito.',
    tipo: 'promocion',
    canal: 'centro',
    fecha: '10/07/2026',
    activo: true,
    cta_texto: 'Ir a referidos',
    cta_url: '/app/referidos'
  }
];

export default function AnnouncementCenter({ announcements }) {
  const data = announcements || DEMO_ANNOUNCEMENTS;

  return (
    <Box sx={{ ...glassCardSm, p: 3 }}>
      {/* Header */}
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: '12px',
            bgcolor: `${colors.primary}12`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <NotificationOutlined style={{ fontSize: 18, color: colors.primary }} />
          </Box>
          <Typography sx={{ ...headlineSm }}>Centro de anuncios</Typography>
        </Stack>
        <Chip
          label={`${data.filter((a) => a.activo).length} activos`}
          size="small"
          sx={{
            ...labelXs,
            fontSize: '10px',
            bgcolor: `${colors.primary}12`,
            color: colors.primary,
            fontWeight: 700,
            height: 24,
            '& .MuiChip-label': { px: 1.5 }
          }}
        />
      </Stack>

      {/* Empty state */}
      {data.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 6, gap: 1.5 }}>
          <Box sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            bgcolor: colors.surfaceContainerLow,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <NotificationOutlined style={{ fontSize: 24, color: colors.outline }} />
          </Box>
          <Typography sx={{ fontSize: '15px', color: colors.onSurfaceVariant }}>
            No tienes anuncios nuevos.
          </Typography>
        </Stack>
      ) : (
        <Stack sx={{ gap: 1.5 }}>
          {data.map((ann) => {
            const cfg = TYPE_CONFIG[ann.tipo] || TYPE_CONFIG.informativo;
            return (
              <Box
                key={ann.id}
                sx={{
                  p: 2,
                  borderRadius: '16px',
                  border: `1px solid ${colors.outlineVariant}25`,
                  bgcolor: cfg.bg,
                  transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: `${cfg.color}10`, borderColor: `${cfg.color}20` }
                }}
              >
                <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
                  {/* Icon */}
                  <Box sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    bgcolor: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <cfg.Icon style={{ fontSize: 18, color: cfg.color }} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                      <Typography sx={{ fontSize: '15px', fontWeight: 700, color: colors.onSurface }}>
                        {ann.titulo}
                      </Typography>
                      <Chip
                        label={cfg.label}
                        size="small"
                        sx={{
                          ...labelXs,
                          fontSize: '9px',
                          bgcolor: cfg.chipBg,
                          color: cfg.chipColor,
                          fontWeight: 700,
                          height: 20,
                          '& .MuiChip-label': { px: 1 }
                        }}
                      />
                    </Stack>
                    <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant, lineHeight: 1.5, mb: 1 }}>
                      {ann.cuerpo}
                    </Typography>
                    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                        <ClockCircleOutlined style={{ fontSize: 11, color: colors.outline }} />
                        <Typography sx={{ fontSize: '11px', color: colors.outline, fontWeight: 600 }}>{ann.fecha}</Typography>
                      </Stack>
                      {ann.cta_texto && ann.cta_url && (
                        <Button
                          href={ann.cta_url}
                          endIcon={<RightOutlined style={{ fontSize: 10 }} />}
                          size="small"
                          sx={{
                            ...labelMd,
                            fontSize: '12px',
                            color: cfg.color,
                            textTransform: 'none',
                            fontWeight: 700,
                            p: 0,
                            minWidth: 'auto',
                            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                          }}
                        >
                          {ann.cta_texto}
                        </Button>
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      )}
    </Box>
  );
}

AnnouncementCenter.propTypes = {
  announcements: PropTypes.array
};
