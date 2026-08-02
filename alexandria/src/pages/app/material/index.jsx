import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// ant icons
import {
  PlayCircleOutlined,
  FilePdfOutlined,
  PictureOutlined,
  LinkOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  ExpandOutlined,
  GlobalOutlined,
  BookOutlined,
  RightOutlined,
  FilterOutlined,
  AppstoreOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  CalculatorOutlined,
  ReadOutlined,
  EditOutlined,
  HomeOutlined
} from '@ant-design/icons';

// project imports
import MaterialViewer from 'sections/material/MaterialViewer';

// vibrant design system
import {
  glassCardSm,
  headlineLg,
  headlineMd,
  labelMd,
  labelXs,
  colors,
  hoverLift
} from 'themes/vibrant';

// ==============================|| DEMO DATA ||============================== //

const typeConfig = {
  video: { label: 'Video', Icon: PlayCircleOutlined, color: colors.primary, bg: `${colors.primary}12` },
  pdf: { label: 'PDF', Icon: FilePdfOutlined, color: colors.tertiary, bg: `${colors.tertiary}12` },
  imagen: { label: 'Imagen', Icon: PictureOutlined, color: colors.secondary, bg: `${colors.secondary}12` },
  enlace: { label: 'Enlace', Icon: LinkOutlined, color: '#16a34a', bg: '#16a34a12' }
};

const materials = [
  {
    id: 1,
    type: 'video',
    title: 'Estequiometría — Balanceo de ecuaciones',
    subject: 'Química',
    SubjectIcon: ExperimentOutlined,
    meta: '12:30 min',
    MetaIcon: ClockCircleOutlined,
    cta: 'Reproducir',
    decoColor: colors.primary
  },
  {
    id: 2,
    type: 'pdf',
    title: 'Tabla periódica interactiva',
    subject: 'Química',
    SubjectIcon: ExperimentOutlined,
    meta: '4.2 MB',
    MetaIcon: DownloadOutlined,
    cta: 'Descargar',
    decoColor: colors.tertiary
  },
  {
    id: 3,
    type: 'imagen',
    title: 'Leyes de Newton — Resumen visual',
    subject: 'Física',
    SubjectIcon: ThunderboltOutlined,
    meta: 'Infografía',
    MetaIcon: ExpandOutlined,
    cta: 'Ver más',
    decoColor: colors.secondary
  },
  {
    id: 4,
    type: 'video',
    title: 'Derivadas — Introducción paso a paso',
    subject: 'Matemáticas',
    SubjectIcon: CalculatorOutlined,
    meta: '18:45 min',
    MetaIcon: ClockCircleOutlined,
    cta: 'Reproducir',
    decoColor: colors.primary
  },
  {
    id: 5,
    type: 'enlace',
    title: 'Calculadora de ecuaciones cuadráticas',
    subject: 'Matemáticas',
    SubjectIcon: CalculatorOutlined,
    meta: 'Herramienta web',
    MetaIcon: GlobalOutlined,
    cta: 'Abrir',
    decoColor: '#16a34a'
  },
  {
    id: 6,
    type: 'pdf',
    title: 'Guía de figuras retóricas',
    subject: 'Español',
    SubjectIcon: ReadOutlined,
    meta: '15 Páginas',
    MetaIcon: BookOutlined,
    cta: 'Leer ahora',
    decoColor: colors.tertiary
  }
];

const recentItems = [
  { subject: 'Biología', title: 'Fotosíntesis — Proceso completo', pct: 80, barColor: colors.secondary },
  { subject: 'Historia', title: 'Revolución Mexicana — Línea del tiempo', pct: 35, barColor: colors.primary },
  { subject: 'Habilidad Verbal', title: 'Comprensión lectora — Estrategias', pct: 100, barColor: colors.tertiary, complete: true }
];

// ==============================|| MATERIAL DE ESTUDIO — VIBRANT ODYSSEY ||============================== //

export default function Material() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <MaterialViewer material={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <Stack sx={{ gap: 5 }}>
      {/* ── Breadcrumb ── */}
      <Box>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mb: 1 }}>
          <HomeOutlined style={{ fontSize: 14, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.outline, fontSize: '13px' }}>Inicio</Typography>
          <RightOutlined style={{ fontSize: 10, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.primary, fontSize: '13px' }}>Material de estudio</Typography>
        </Stack>

        {/* ── Page Header ── */}
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3 }}>
          <Box>
            <Typography sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '32px', md: '48px' },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: colors.primary,
              mb: 1
            }}>
              Material de estudio
            </Typography>
            <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', lineHeight: 1.6, color: colors.onSurfaceVariant, maxWidth: 600 }}>
              Explora videos, guías y recursos interactivos organizados por materia para potenciar tu aprendizaje diario.
            </Typography>
          </Box>
          <Stack direction="row" sx={{ gap: 1.5, flexShrink: 0 }}>
            <Button
              startIcon={<FilterOutlined />}
              sx={{
                bgcolor: '#fff',
                border: `1px solid ${colors.outlineVariant}`,
                borderRadius: '12px',
                color: colors.onSurface,
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'none',
                px: 2,
                '&:hover': { bgcolor: colors.surfaceContainerLow }
              }}
            >
              Filtros
            </Button>
            <Button
              startIcon={<AppstoreOutlined />}
              sx={{
                bgcolor: colors.primary,
                color: '#fff',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'none',
                px: 2,
                boxShadow: '0 4px 16px rgba(99, 14, 212, 0.3)',
                '&:hover': { bgcolor: colors.primary, opacity: 0.9 }
              }}
            >
              Ver catálogo
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* ── Bento Grid of Resources ── */}
      <Grid container spacing={3}>
        {materials.map((mat) => {
          const tc = typeConfig[mat.type];
          return (
            <Grid key={mat.id} size={{ xs: 12, md: 6, xl: 4 }}>
              <Box
                onClick={() => setSelected(mat)}
                sx={{
                  ...glassCardSm,
                  p: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
                  },
                  '&:hover .mat-title': { color: mat.decoColor },
                  '&:hover .deco-bubble': { transform: 'scale(1.1)' }
                }}
              >
                {/* Decorative bubble */}
                <Box
                  className="deco-bubble"
                  sx={{
                    position: 'absolute',
                    top: -64,
                    right: -64,
                    width: 128,
                    height: 128,
                    bgcolor: `${mat.decoColor}08`,
                    borderRadius: '50%',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Header: icon + type badge */}
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '16px',
                    bgcolor: tc.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <tc.Icon style={{ fontSize: 24, color: tc.color }} />
                  </Box>
                  <Chip
                    label={tc.label}
                    size="small"
                    sx={{
                      ...labelXs,
                      bgcolor: tc.bg,
                      color: tc.color,
                      fontWeight: 700,
                      borderRadius: '99px',
                      height: 24,
                      '& .MuiChip-label': { px: 1.5 }
                    }}
                  />
                </Stack>

                {/* Title + subject */}
                <Typography
                  className="mat-title"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    mb: 0.5,
                    transition: 'color 0.2s'
                  }}
                >
                  {mat.title}
                </Typography>
                <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 3 }}>
                  <mat.SubjectIcon style={{ fontSize: 14, color: colors.outline }} />
                  <Typography sx={{ fontSize: '14px', color: colors.outline }}>{mat.subject}</Typography>
                </Stack>

                {/* Footer: meta + CTA */}
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 'auto',
                    pt: 2,
                    borderTop: `1px solid ${colors.outlineVariant}30`
                  }}
                >
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
                    <mat.MetaIcon style={{ fontSize: 14, color: colors.onSurfaceVariant }} />
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: colors.onSurfaceVariant }}>{mat.meta}</Typography>
                  </Stack>
                  <Button
                    endIcon={<RightOutlined style={{ fontSize: 10 }} />}
                    sx={{
                      ...labelMd,
                      fontSize: '12px',
                      color: mat.decoColor,
                      textTransform: 'none',
                      fontWeight: 700,
                      minWidth: 'auto',
                      p: 0,
                      '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                    }}
                  >
                    {mat.cta}
                  </Button>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* ── Vistos recientemente ── */}
      <Box>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ ...headlineMd }}>Vistos recientemente</Typography>
          <Button
            sx={{ ...labelMd, color: colors.primary, textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: `${colors.primary}08` } }}
          >
            Ver todo el historial
          </Button>
        </Stack>

        <Stack direction="row" sx={{ gap: 3, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
          {recentItems.map((item) => (
            <Box
              key={item.title}
              sx={{
                minWidth: 280,
                bgcolor: '#fff',
                borderRadius: '16px',
                p: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: `1px solid ${colors.outlineVariant}30`,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }
              }}
            >
              {/* Thumbnail placeholder */}
              <Box sx={{
                width: 64,
                height: 64,
                borderRadius: '12px',
                bgcolor: colors.surfaceContainerLow,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <EditOutlined style={{ fontSize: 24, color: item.barColor }} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ ...labelXs, color: colors.outline, mb: 0.25 }}>{item.subject}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3, mb: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.title}
                </Typography>
                <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={item.pct}
                    sx={{
                      flex: 1,
                      height: 4,
                      borderRadius: 99,
                      bgcolor: colors.surfaceContainerHigh,
                      [`& .${linearProgressClasses.bar}`]: {
                        borderRadius: 99,
                        bgcolor: item.barColor
                      }
                    }}
                  />
                  <Typography sx={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: item.complete ? item.barColor : colors.outline
                  }}>
                    {item.complete ? 'Completo' : `${item.pct}%`}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
