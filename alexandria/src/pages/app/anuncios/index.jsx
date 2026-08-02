// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// icons
import {
  NotificationOutlined,
  RightOutlined,
  HomeOutlined,
  SettingOutlined,
  CheckCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons';

// project imports
import AnnouncementBanner from 'sections/anuncios/AnnouncementBanner';
import AnnouncementModal from 'sections/anuncios/AnnouncementModal';
import AnnouncementCenter from 'sections/anuncios/AnnouncementCenter';

// vibrant
import { glassCardSm, headlineLg, headlineSm, labelMd, labelXs, colors } from 'themes/vibrant';

// ==============================|| DEMO DATA ||============================== //

const DEMO_BANNERS = [
  {
    id: 'ann-banner-1',
    titulo: 'Mantenimiento programado',
    cuerpo: 'Sábado 2 de agosto, 02:00-06:00 hrs. Guarda tu progreso.',
    tipo: 'mantenimiento',
    canal: 'banner',
    requiere_acuse: false,
    cta_texto: null,
    cta_url: null
  }
];

const DEMO_MODALS = [
  {
    id: 'ann-modal-1',
    titulo: 'Actualización de Términos y Condiciones',
    cuerpo: 'Hemos actualizado nuestros Términos y Condiciones. Te pedimos leerlos y aceptarlos para continuar usando la plataforma.',
    tipo: 'critico',
    canal: 'modal',
    requiere_acuse: true,
    cta_texto: 'Ver términos',
    cta_url: '/terminos'
  }
];

// Visibilidad de anuncios en otras secciones (configurable por admin)
const SECTION_VISIBILITY = [
  { section: 'Dashboard', path: '/app/dashboard', banners: true, inline: true },
  { section: 'Catálogo', path: '/app/catalogo', banners: true, inline: false },
  { section: 'Evaluaciones', path: '/app/evaluaciones', banners: true, inline: false },
  { section: 'Suscripción', path: '/app/suscripcion', banners: true, inline: true },
  { section: 'Mi progreso', path: '/app/progreso', banners: false, inline: false },
  { section: 'Material', path: '/app/material', banners: true, inline: false }
];

// ==============================|| ANUNCIOS — VIBRANT ODYSSEY ||============================== //

export default function Anuncios() {
  // TODO: POST /api/v1/anuncios/{id}/acuse
  const handleAcknowledge = (announcementId) => {
    console.log('Acuse registrado:', announcementId);
  };

  return (
    <Stack sx={{ gap: 4 }}>
      {/* ── Header ── */}
      <Box>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mb: 0.5 }}>
          <HomeOutlined style={{ fontSize: 13, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.outline, fontSize: '13px' }}>Inicio</Typography>
          <RightOutlined style={{ fontSize: 10, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.primary, fontSize: '13px' }}>Anuncios</Typography>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-end' }, gap: 2 }}>
          <Box>
            <Typography sx={{ ...headlineLg }}>Anuncios</Typography>
            <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: colors.onSurfaceVariant, mt: 0.5 }}>
              Comunicados, avisos de temporada y alertas importantes de la plataforma.
            </Typography>
          </Box>
          <Chip
            icon={<SettingOutlined style={{ fontSize: 12 }} />}
            label="Módulo administrador"
            size="small"
            sx={{
              ...labelXs,
              fontSize: '10px',
              bgcolor: colors.surfaceContainerLow,
              color: colors.outline,
              fontWeight: 700,
              height: 28,
              border: `1px solid ${colors.outlineVariant}40`,
              '& .MuiChip-icon': { color: colors.outline }
            }}
          />
        </Stack>
      </Box>

      {/* ── Banners activos ── */}
      <AnnouncementBanner announcements={DEMO_BANNERS} />

      {/* ── Main layout ── */}
      <Grid container spacing={3}>
        {/* Centro de anuncios */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <AnnouncementCenter />
        </Grid>

        {/* Sidebar: visibility map + info */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack sx={{ gap: 3 }}>
            {/* Visibility by section */}
            <Box sx={{ ...glassCardSm, p: 3 }}>
              <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 2.5 }}>
                <NotificationOutlined style={{ fontSize: 16, color: colors.primary }} />
                <Typography sx={{ ...headlineSm, fontSize: '16px' }}>Visibilidad por sección</Typography>
              </Stack>
              <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant, mb: 2 }}>
                Los anuncios se muestran de forma sutil en otras secciones. El administrador controla dónde aparecen.
              </Typography>
              <Stack sx={{ gap: 1 }}>
                {SECTION_VISIBILITY.map((s) => (
                  <Stack
                    key={s.section}
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 1,
                      px: 1.5,
                      borderRadius: '10px',
                      bgcolor: s.banners ? `${colors.primary}05` : 'transparent',
                      border: `1px solid ${s.banners ? `${colors.primary}10` : colors.outlineVariant + '20'}`
                    }}
                  >
                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: colors.onSurface }}>{s.section}</Typography>
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 0.25 }}>
                        {s.banners
                          ? <CheckCircleFilled style={{ fontSize: 12, color: colors.secondary }} />
                          : <CloseCircleFilled style={{ fontSize: 12, color: colors.outline }} />
                        }
                        <Typography sx={{ fontSize: '10px', color: s.banners ? colors.secondary : colors.outline, fontWeight: 600 }}>
                          Banner
                        </Typography>
                      </Stack>
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 0.25 }}>
                        {s.inline
                          ? <CheckCircleFilled style={{ fontSize: 12, color: colors.primary }} />
                          : <CloseCircleFilled style={{ fontSize: 12, color: colors.outline }} />
                        }
                        <Typography sx={{ fontSize: '10px', color: s.inline ? colors.primary : colors.outline, fontWeight: 600 }}>
                          Inline
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* Admin info card */}
            <Box sx={{
              p: 3,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryContainer} 100%)`,
              borderRadius: '24px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: '15px' }}>Panel administrador</Typography>
                <Typography sx={{ fontSize: '12px', opacity: 0.9, lineHeight: 1.5 }}>
                  Desde el módulo de administración puedes activar, desactivar y programar anuncios por temporada. Los cambios se reflejan en tiempo real.
                </Typography>
              </Box>
              <Box sx={{
                position: 'absolute',
                right: -24,
                bottom: -24,
                width: 96,
                height: 96,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }} />
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* ── Modal crítico ── */}
      <AnnouncementModal announcements={DEMO_MODALS} onAcknowledge={handleAcknowledge} />
    </Stack>
  );
}
