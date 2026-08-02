import { useNavigate } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import { glassCard, glassCardSm, vibrantGradient, vibrantGlow, headlineLg, headlineMd, headlineSm, labelXs, colors } from 'themes/vibrant';

// assets
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import ExperimentOutlined from '@ant-design/icons/ExperimentOutlined';
import CalculatorOutlined from '@ant-design/icons/CalculatorOutlined';
import ReadOutlined from '@ant-design/icons/ReadOutlined';
import BulbOutlined from '@ant-design/icons/BulbOutlined';

// ==============================|| DASHBOARD - VIBRANT ODYSSEY ||============================== //

// Subject cards data
const SUBJECTS = [
  { name: 'Química Orgánica', lessons: '12 de 20', pct: 60, icon: <ExperimentOutlined style={{ fontSize: 28 }} />, level: 'Intermedio', color: colors.primary },
  { name: 'Cálculo Diferencial', lessons: '8 de 25', pct: 32, icon: <CalculatorOutlined style={{ fontSize: 28 }} />, level: 'Avanzado', color: colors.secondary },
  { name: 'Historia Universal', lessons: '18 de 20', pct: 90, icon: <ReadOutlined style={{ fontSize: 28 }} />, level: 'Principiante', color: colors.tertiary },
  { name: 'Pensamiento Crítico', lessons: '5 de 15', pct: 33, icon: <BulbOutlined style={{ fontSize: 28 }} />, level: 'Electiva', color: '#5a00c6' }
];

// Weekly bar chart data (percentage heights)
const WEEKLY = [40, 70, 90, 55, 30, 45, 20];
const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

// Upcoming events
const EVENTS = [
  { day: '18', label: 'Quiz de Química', when: 'Mañana, 10:00 AM', color: '#ffdad6', textColor: '#ba1a1a' },
  { day: '22', label: 'Webinar IA', when: 'Viernes, 4:00 PM', color: `${colors.primaryContainer}20`, textColor: colors.primary }
];

export default function DashboardDefault() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ gap: 4, position: 'relative' }}>
      {/* Ambient blurs */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(99,14,212,0.04)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(0,104,122,0.04)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Hero Section: 8/4 grid */}
      <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Card */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box sx={{ ...glassCard, p: { xs: 4, md: 6 }, position: 'relative', overflow: 'hidden', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stack sx={{ gap: 2, position: 'relative', zIndex: 2, maxWidth: '65%' }}>
              <Box sx={{ display: 'inline-flex', alignSelf: 'flex-start', px: 2, py: 0.75, borderRadius: '9999px', bgcolor: `${colors.primaryContainer}20`, color: colors.primaryContainer }}>
                <Typography sx={{ ...labelXs, fontSize: '12px' }}>Hola, Alex! 👋</Typography>
              </Box>
              <Typography sx={{ ...headlineLg }}>
                Continúa tu viaje hacia la maestría digital.
              </Typography>
              <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
                Llevas una racha de <Box component="span" sx={{ fontWeight: 700, color: colors.primary }}>12 días</Box> seguidos. ¡No te detengas ahora!
              </Typography>
              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<PlayCircleOutlined />}
                  onClick={() => navigate('/app/catalogo')}
                  sx={{
                    ...vibrantGradient,
                    ...vibrantGlow,
                    color: '#fff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    borderRadius: '16px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '16px',
                    '&:hover': { transform: 'scale(1.05)', ...vibrantGradient }
                  }}
                >
                  Siguiente Lección
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>

        {/* Subscription Widget */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ ...glassCard, p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: `${colors.secondaryContainer}10`, borderColor: `${colors.secondaryContainer}30` }}>
            <Stack sx={{ gap: 2 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ p: 1.5, borderRadius: '16px', bgcolor: colors.secondaryContainer, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CalendarOutlined style={{ fontSize: 22 }} />
                </Box>
                <Typography sx={{ ...labelXs, color: colors.secondary, fontWeight: 900 }}>PLAN ANUAL</Typography>
              </Stack>
              <Typography sx={{ ...headlineMd, pt: 2 }}>Suscripción Activa</Typography>
              <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: colors.onSurfaceVariant }}>
                Tu acceso premium expira en <Box component="span" sx={{ fontWeight: 700, color: colors.secondary }}>245 días</Box>.
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              onClick={() => navigate('/app/suscripcion')}
              sx={{
                mt: 3,
                borderColor: colors.secondary,
                color: colors.secondary,
                fontWeight: 700,
                borderRadius: '16px',
                py: 1.5,
                textTransform: 'none',
                '&:hover': { bgcolor: colors.secondary, color: '#fff', borderColor: colors.secondary }
              }}
            >
              Gestionar Plan
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bento Grid: Subjects (2/3) + Sidebar (1/3) */}
      <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Subject Cards */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack sx={{ gap: 3 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ ...headlineMd }}>Mis Materias</Typography>
              <Button onClick={() => navigate('/app/catalogo')} sx={{ color: colors.primary, fontWeight: 700, textTransform: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Ver todas →
              </Button>
            </Stack>
            <Grid container spacing={2}>
              {SUBJECTS.map((s) => (
                <Grid key={s.name} size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ ...glassCardSm, p: 3, cursor: 'pointer', '&:hover .subject-icon': { transform: 'rotate(12deg)' } }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <Box className="subject-icon" sx={{ width: 48, height: 48, borderRadius: '16px', bgcolor: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}>
                        {s.icon}
                      </Box>
                      <Box sx={{ bgcolor: colors.surfaceContainerHigh, px: 1.5, py: 0.5, borderRadius: '9999px' }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Be Vietnam Pro, sans-serif' }}>{s.level}</Typography>
                      </Box>
                    </Stack>
                    <Typography sx={{ ...headlineSm, mb: 0.5 }}>{s.name}</Typography>
                    <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant, fontFamily: 'Be Vietnam Pro, sans-serif', mb: 3 }}>
                      {s.lessons} lecciones completadas
                    </Typography>
                    <Box sx={{ width: '100%', height: 8, bgcolor: colors.surfaceContainerHigh, borderRadius: '9999px', overflow: 'hidden' }}>
                      <Box sx={{ height: '100%', width: `${s.pct}%`, ...vibrantGradient, borderRadius: '9999px', boxShadow: '0 0 8px rgba(99,14,212,0.4)' }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>

        {/* Right Sidebar: Progress + Events */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack sx={{ gap: 3 }}>
            {/* Weekly Progress */}
            <Box sx={{ ...glassCard, p: 4, borderColor: `${colors.primary}08` }}>
              <Typography sx={{ ...headlineSm, mb: 3 }}>Tu Progreso Semanal</Typography>
              <Stack direction="row" sx={{ alignItems: 'flex-end', gap: 1.5, height: 128, px: 1 }}>
                {WEEKLY.map((h, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '8px 8px 0 0',
                      ...(i === 2 ? vibrantGradient : { bgcolor: `${colors.primary}15` }),
                      transition: 'height 0.3s',
                      '&:hover': { height: `${Math.min(h + 5, 100)}%` }
                    }}
                  />
                ))}
              </Stack>
              <Stack direction="row" sx={{ justifyContent: 'space-between', mt: 1, px: 1 }}>
                {DAYS.map((d) => (
                  <Typography key={d} sx={{ ...labelXs, color: `${colors.onSurfaceVariant}99`, flex: 1, textAlign: 'center' }}>{d}</Typography>
                ))}
              </Stack>
              <Box sx={{ borderTop: `1px solid ${colors.outlineVariant}30`, mt: 3, pt: 3 }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack>
                    <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant, fontFamily: 'Be Vietnam Pro, sans-serif' }}>Tiempo de estudio</Typography>
                    <Typography sx={{ ...headlineSm, color: colors.primary }}>14h 20m</Typography>
                  </Stack>
                  <Box sx={{ bgcolor: `${colors.primary}15`, p: 1, borderRadius: '12px', color: colors.primary, display: 'flex' }}>
                    <RiseOutlined style={{ fontSize: 20 }} />
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* Upcoming Events */}
            <Box sx={{ ...glassCard, p: 4 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography sx={{ ...headlineSm }}>Próximos Retos</Typography>
                <CalendarOutlined style={{ fontSize: 18, color: colors.onSurfaceVariant }} />
              </Stack>
              <Stack sx={{ gap: 2 }}>
                {EVENTS.map((ev) => (
                  <Stack key={ev.day} direction="row" sx={{ alignItems: 'center', gap: 2, p: 1.5, borderRadius: '16px', cursor: 'pointer', '&:hover': { bgcolor: colors.surfaceContainerLow } }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: '12px', bgcolor: ev.color, color: ev.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}>{ev.day}</Typography>
                    </Box>
                    <Stack>
                      <Typography sx={{ fontWeight: 700, fontSize: '15px' }}>{ev.label}</Typography>
                      <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant, fontFamily: 'Be Vietnam Pro, sans-serif' }}>{ev.when}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
