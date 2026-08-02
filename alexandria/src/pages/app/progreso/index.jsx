// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// ant icons
import {
  RiseOutlined,
  ClockCircleOutlined,
  EditOutlined,
  TrophyOutlined,
  FireOutlined,
  WarningOutlined,
  CheckCircleFilled,
  BulbOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  BookOutlined,
  RightOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  CalculatorOutlined
} from '@ant-design/icons';

// vibrant design system
import {
  glassCard,
  glassCardSm,
  vibrantGradient,
  headlineLg,
  headlineMd,
  headlineSm,
  labelMd,
  labelXs,
  colors,
  hoverLift
} from 'themes/vibrant';

// ==============================|| DEMO DATA ||============================== //

const generalProgress = 45;

const statCards = [
  { label: 'Horas estudiadas', value: 48, icon: ClockCircleOutlined, bg: `${colors.secondary}15`, color: colors.secondary },
  { label: 'Evaluaciones', value: 45, icon: EditOutlined, bg: `${colors.primary}12`, color: colors.primary },
  { label: 'Promedio general', value: '73%', icon: TrophyOutlined, bg: '#ffd9e440', color: colors.tertiary, topBorder: true },
  { label: 'Días en racha', value: 7, icon: FireOutlined, bg: '#ffdad640', color: '#ba1a1a', decoration: true }
];

const subjects = [
  { name: 'Matemáticas', icon: CalculatorOutlined, topics: '25/35 temas completados', pct: 72, barColor: colors.secondary, evals: 8, avg: 79 },
  { name: 'Biología', icon: ExperimentOutlined, topics: '13/30 temas completados', pct: 45, barColor: colors.tertiary, evals: 4, avg: 71 },
  { name: 'Física', icon: ThunderboltOutlined, topics: '8/25 temas completados', pct: 30, barColor: '#ba1a1a', evals: 2, avg: 75 },
  { name: 'Química', icon: ExperimentOutlined, topics: '7/28 temas completados', pct: 25, barColor: colors.primary, evals: 2, avg: 65 }
];

const weakTopics = [
  { name: 'Ecuaciones cuadráticas', subject: 'Matemáticas', pct: 35 },
  { name: 'Revolución Mexicana', subject: 'Historia', pct: 40 },
  { name: 'Leyes de Newton', subject: 'Física', pct: 42 }
];

const masteredTopics = [
  { name: 'Comprensión lectora', subject: 'Literatura', pct: 92 },
  { name: 'Tabla periódica', subject: 'Química', pct: 88 }
];

const recommendations = [
  {
    title: 'Practica ecuaciones cuadráticas',
    desc: 'Tu última calificación fue 35%. Mejorar esto aumentará tu promedio de Matemáticas en 5%.',
    icon: BulbOutlined,
    color: colors.primary,
    bg: `${colors.primary}0D`,
    border: `${colors.primary}1A`,
    cta: 'Practicar',
    ctaIcon: PlayCircleOutlined
  },
  {
    title: 'Repasa la Revolución Mexicana',
    desc: 'Tienes 2 evaluaciones con menos de 50% en este tema.',
    icon: ReadOutlined,
    color: colors.secondary,
    bg: `${colors.secondary}0D`,
    border: `${colors.secondary}1A`,
    cta: 'Estudiar',
    ctaIcon: BookOutlined
  }
];

// ==============================|| MI PROGRESO — VIBRANT ODYSSEY ||============================== //

export default function Progreso() {
  return (
    <Stack sx={{ gap: 4 }}>
      {/* ── Header ── */}
      <Box>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mb: 0.5 }}>
          <Typography sx={{ ...labelMd, color: colors.onSurfaceVariant, opacity: 0.6 }}>Inicio</Typography>
          <RightOutlined style={{ fontSize: 10, color: colors.onSurfaceVariant, opacity: 0.6 }} />
          <Typography sx={{ ...labelMd, color: colors.primary }}>Mi progreso</Typography>
        </Stack>
        <Typography sx={{ ...headlineLg }}>Mi progreso</Typography>
        <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: colors.onSurfaceVariant, mt: 0.5 }}>
          Revisa tu avance general y por materia.
        </Typography>
      </Box>

      {/* ── Bento Stats Grid ── */}
      <Grid container spacing={3}>
        {/* General Progress — spans 2 cols */}
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Box sx={{
            ...glassCardSm,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: `8px solid ${colors.primary}`,
            position: 'relative',
            overflow: 'hidden',
            height: '100%'
          }}>
            <Box sx={{ zIndex: 1 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography sx={{ ...labelMd, color: colors.onSurfaceVariant }}>Progreso general</Typography>
                <Box sx={{ p: 1, bgcolor: `${colors.primary}15`, color: colors.primary, borderRadius: '12px', display: 'flex' }}>
                  <RiseOutlined style={{ fontSize: 20 }} />
                </Box>
              </Stack>
              <Stack direction="row" sx={{ alignItems: 'baseline', gap: 1 }}>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 800, color: colors.onSurface }}>
                  {generalProgress}%
                </Typography>
                <Typography sx={{ fontSize: '16px', color: colors.onSurfaceVariant }}>del contenido</Typography>
              </Stack>
            </Box>
            <Box sx={{ mt: 3 }}>
              <LinearProgress
                variant="determinate"
                value={generalProgress}
                sx={{
                  height: 12,
                  borderRadius: 99,
                  bgcolor: colors.surfaceContainerHigh,
                  [`& .${linearProgressClasses.bar}`]: {
                    borderRadius: 99,
                    ...vibrantGradient,
                    boxShadow: '0 0 15px rgba(124, 58, 237, 0.4)'
                  }
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Stat cards */}
        {statCards.map((s) => (
          <Grid key={s.label} size={{ xs: 6, lg: 2 }}>
            <Box sx={{
              ...glassCardSm,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              ...(s.topBorder && { borderTop: `4px solid ${colors.tertiary}` })
            }}>
              {/* Fire decoration */}
              {s.decoration && (
                <FireOutlined style={{
                  position: 'absolute',
                  right: -8,
                  top: -8,
                  fontSize: 72,
                  color: '#ba1a1a',
                  opacity: 0.05
                }} />
              )}
              <Box sx={{
                p: 1.5,
                bgcolor: s.bg,
                color: s.color,
                borderRadius: '16px',
                mb: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <s.icon style={{ fontSize: 22 }} />
              </Box>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', fontWeight: 700, color: colors.onSurface }}>
                {s.value}
              </Typography>
              <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant, mt: 0.5 }}>{s.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ── Main Content: Subjects + Sidebar ── */}
      <Grid container spacing={4}>
        {/* Left: Progress by Subject + Recommendations */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack sx={{ gap: 3 }}>
            {/* Subject header */}
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ ...headlineMd, color: colors.onSurface }}>Progreso por materia</Typography>
              <Button
                endIcon={<RightOutlined />}
                sx={{ ...labelMd, color: colors.primary, textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: `${colors.primary}08` } }}
              >
                Ver todo
              </Button>
            </Stack>

            {/* Subject cards 2x2 */}
            <Grid container spacing={2}>
              {subjects.map((subj) => (
                <Grid key={subj.name} size={{ xs: 12, md: 6 }}>
                  <Box sx={{ ...glassCardSm, p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                        <Box sx={{
                          width: 48,
                          height: 48,
                          bgcolor: '#fff',
                          borderRadius: '16px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(204, 195, 216, 0.1)'
                        }}>
                          <subj.icon style={{ fontSize: 24, color: subj.barColor }} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: colors.onSurface }}>{subj.name}</Typography>
                          <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant }}>{subj.topics}</Typography>
                        </Box>
                      </Stack>
                      <Typography sx={{ fontWeight: 700, fontSize: '18px', color: subj.barColor }}>{subj.pct}%</Typography>
                    </Stack>

                    <LinearProgress
                      variant="determinate"
                      value={subj.pct}
                      sx={{
                        height: 8,
                        borderRadius: 99,
                        bgcolor: colors.surfaceContainerHigh,
                        [`& .${linearProgressClasses.bar}`]: {
                          borderRadius: 99,
                          bgcolor: subj.barColor
                        }
                      }}
                    />

                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant, opacity: 0.7 }}>
                        {subj.evals} EVALUACIONES
                      </Typography>
                      <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant, opacity: 0.7 }}>
                        PROM. {subj.avg}%
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Recommendations */}
            <Box sx={{ pt: 2 }}>
              <Typography sx={{ ...headlineSm, color: colors.onSurface, mb: 3 }}>Recomendaciones personalizadas</Typography>
              <Stack sx={{ gap: 2 }}>
                {recommendations.map((rec) => (
                  <Stack
                    key={rec.title}
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      gap: 2,
                      bgcolor: rec.bg,
                      border: `1px solid ${rec.border}`,
                      p: 2,
                      borderRadius: '16px',
                      transition: 'background 0.2s',
                      '&:hover': { bgcolor: `${rec.color}15` }
                    }}
                  >
                    <Box sx={{ p: 1.5, bgcolor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex' }}>
                      <rec.icon style={{ fontSize: 20, color: rec.color }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>{rec.title}</Typography>
                      <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>{rec.desc}</Typography>
                    </Box>
                    <Button
                      startIcon={<rec.ctaIcon />}
                      sx={{ ...labelMd, color: rec.color, textTransform: 'none', fontWeight: 700, whiteSpace: 'nowrap' }}
                    >
                      {rec.cta}
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* Right: Areas of Opportunity sidebar */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ ...glassCardSm, p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ ...headlineSm, color: colors.onSurface, mb: 3 }}>Áreas de oportunidad</Typography>

            {/* Weak topics */}
            <Typography sx={{ ...labelXs, color: '#ba1a1a', mb: 2 }}>Temas por reforzar</Typography>
            <Stack sx={{ gap: 1.5, mb: 4 }}>
              {weakTopics.map((t) => (
                <Stack
                  key={t.name}
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1.5,
                    bgcolor: '#ffdad620',
                    borderRadius: '16px',
                    border: '1px solid rgba(186, 26, 26, 0.05)'
                  }}
                >
                  <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                    <WarningOutlined style={{ fontSize: 18, color: '#ba1a1a' }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</Typography>
                      <Typography sx={{ fontSize: '11px', color: colors.onSurfaceVariant }}>{t.subject}</Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#ba1a1a' }}>{t.pct}%</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Mastered topics */}
            <Typography sx={{ ...labelXs, color: colors.secondary, mb: 2 }}>Temas dominados</Typography>
            <Stack sx={{ gap: 1.5, mb: 4 }}>
              {masteredTopics.map((t) => (
                <Stack
                  key={t.name}
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1.5,
                    bgcolor: `${colors.secondaryContainer}15`,
                    borderRadius: '16px',
                    border: `1px solid ${colors.secondary}0D`
                  }}
                >
                  <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleFilled style={{ fontSize: 18, color: colors.secondary }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</Typography>
                      <Typography sx={{ fontSize: '11px', color: colors.onSurfaceVariant }}>{t.subject}</Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: colors.secondary }}>{t.pct}%</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Keep going card */}
            <Box sx={{
              mt: 'auto',
              p: 3,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryContainer} 100%)`,
              borderRadius: '24px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              '&:hover .deco-circle': { transform: 'scale(1.25)' }
            }}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>¡Sigue así!</Typography>
                <Typography sx={{ fontSize: '12px', opacity: 0.9, mb: 2 }}>
                  Estás a solo 5 lecciones de alcanzar tu meta semanal.
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: 8,
                    borderRadius: 99,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    mb: 1,
                    [`& .${linearProgressClasses.bar}`]: {
                      borderRadius: 99,
                      bgcolor: '#fff'
                    }
                  }}
                />
                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                  <Typography sx={{ ...labelXs, color: '#fff' }}>80% logrado</Typography>
                  <Typography sx={{ ...labelXs, color: '#fff' }}>Meta: 20 lecciones</Typography>
                </Stack>
              </Box>
              {/* Decorative circle */}
              <Box
                className="deco-circle"
                sx={{
                  position: 'absolute',
                  right: -32,
                  bottom: -32,
                  width: 128,
                  height: 128,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  transition: 'transform 0.3s ease'
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
