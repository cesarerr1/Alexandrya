import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// project imports
import ExamEngine from 'sections/evaluaciones/ExamEngine';
import { glassCardSm, vibrantGradient, vibrantGlow, displayLg, headlineLg, headlineSm, labelXs, hoverLift, colors } from 'themes/vibrant';

// assets
import ThunderboltOutlined from '@ant-design/icons/ThunderboltOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import ExperimentOutlined from '@ant-design/icons/ExperimentOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';

// ==============================|| EVALUACIONES - VIBRANT ODYSSEY ||============================== //

const EXAM_TYPES = [
  { id: 'tema', name: 'Por tema', desc: 'Enfócate en una lección específica.', questions: '5-10', icon: <UnorderedListOutlined style={{ fontSize: 28 }} />, bgColor: `${colors.secondaryContainer}20`, iconColor: colors.secondary },
  { id: 'modulo', name: 'Por módulo', desc: 'Evalúa todo un bloque de aprendizaje.', questions: '15-25', icon: <AppstoreOutlined style={{ fontSize: 28 }} />, bgColor: `${colors.primaryContainer}15`, iconColor: colors.primary },
  { id: 'materia', name: 'Por materia', desc: 'Examen integral de una asignatura.', questions: '30-50', icon: <BookOutlined style={{ fontSize: 28 }} />, bgColor: `${colors.tertiaryContainer}15`, iconColor: colors.tertiary },
  { id: 'general', name: 'General', desc: 'Mix aleatorio de todas tus materias.', questions: '20', icon: <ExperimentOutlined style={{ fontSize: 28 }} />, bgColor: `${colors.onSurface}08`, iconColor: colors.onSurface },
  { id: 'simulador', name: 'Simulador', desc: 'Experiencia real de examen bajo presión.', questions: '80-120', icon: <RocketOutlined style={{ fontSize: 28 }} />, bgColor: colors.primary, iconColor: '#fff', special: true }
];

const HISTORY = [
  { type: 'Simulador', icon: <RocketOutlined />, iconColor: colors.primary, subject: 'Anatomía General', total: 120, correct: 108, pct: 90, pctColor: '#dcfce7', pctText: '#15803d', duration: '01:45:00', date: '15 Oct 2026' },
  { type: 'Materia', icon: <BookOutlined />, iconColor: colors.secondary, subject: 'Física II', total: 45, correct: 35, pct: 77, pctColor: '#fef3c7', pctText: '#b45309', duration: '00:38:12', date: '12 Oct 2026' },
  { type: 'Tema', icon: <UnorderedListOutlined />, iconColor: colors.tertiary, subject: 'Células Eucariotas', total: 10, correct: 10, pct: 100, pctColor: `${colors.primaryContainer}20`, pctText: colors.primary, duration: '00:05:45', date: '10 Oct 2026' },
  { type: 'General', icon: <ExperimentOutlined />, iconColor: '#ba1a1a', subject: 'Repaso Mensual', total: 50, correct: 24, pct: 48, pctColor: '#ffdad6', pctText: '#ba1a1a', duration: '00:42:00', date: '05 Oct 2026' }
];

export default function Evaluaciones() {
  const [activeExam, setActiveExam] = useState(null);

  if (activeExam) {
    return <ExamEngine type={activeExam} onFinish={() => setActiveExam(null)} />;
  }

  return (
    <Stack sx={{ gap: 6 }}>
      {/* Hero Banner */}
      <Box sx={{ ...vibrantGradient, borderRadius: '32px', p: { xs: 4, md: 6 }, position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px rgba(99,14,212,0.25)' }}>
        <Stack sx={{ gap: 2, position: 'relative', zIndex: 2, maxWidth: '70%' }}>
          <Box sx={{ display: 'inline-flex', alignSelf: 'flex-start', px: 2, py: 0.75, borderRadius: '9999px', bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <Typography sx={{ ...labelXs, color: '#fff', fontSize: '12px' }}>MÓDULO DE PRUEBAS</Typography>
          </Box>
          <Typography sx={{ ...displayLg, color: '#fff' }}>Evaluaciones</Typography>
          <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, maxWidth: 600 }}>
            Mide tus conocimientos con nuestras herramientas dinámicas. Desde simuladores completos hasta repasos rápidos por tema.
          </Typography>
        </Stack>
        <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '33%', display: { xs: 'none', lg: 'flex' }, alignItems: 'center', justifyContent: 'center', opacity: 0.15, pointerEvents: 'none', fontSize: 200 }}>
          <ThunderboltOutlined />
        </Box>
      </Box>

      {/* Exam Type Cards */}
      <Box>
        <Stack sx={{ mb: 3 }}>
          <Typography sx={{ ...headlineLg }}>Tipo de Evaluación</Typography>
          <Typography sx={{ color: colors.onSurfaceVariant, fontFamily: 'Be Vietnam Pro, sans-serif' }}>Selecciona la modalidad que mejor se adapte a tu meta de hoy</Typography>
        </Stack>
        <Grid container spacing={3}>
          {EXAM_TYPES.map((et) => (
            <Grid key={et.id} size={{ xs: 12, sm: 6, lg: 2.4 }}>
              {et.special ? (
                <Box sx={{ p: '2px', borderRadius: '24px', ...vibrantGradient, boxShadow: '0 15px 40px rgba(99,14,212,0.2)', '&:hover': { transform: 'scale(1.05)' }, transition: 'transform 0.3s', cursor: 'pointer' }} onClick={() => setActiveExam(et.id)}>
                  <Box sx={{ ...glassCardSm, p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2, '&:hover': { transform: 'none' } }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: et.bgColor, color: et.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', ...vibrantGlow }}>
                        {et.icon}
                      </Box>
                      <Box sx={{ bgcolor: colors.primary, color: '#fff', px: 1, py: 0.25, borderRadius: '9999px' }}>
                        <Typography sx={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>Pro</Typography>
                      </Box>
                    </Stack>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ ...headlineSm, color: colors.primary }}>{et.name}</Typography>
                      <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant }}>{et.desc}</Typography>
                    </Box>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: `1px solid ${colors.primary}20` }}>
                      <Typography sx={{ ...labelXs, color: colors.primary, fontWeight: 900, fontSize: '12px' }}>{et.questions} preguntas</Typography>
                      <ThunderboltOutlined style={{ color: colors.primary }} />
                    </Stack>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ ...glassCardSm, p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2, ...hoverLift, cursor: 'pointer' }} onClick={() => setActiveExam(et.id)}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: et.bgColor, color: et.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {et.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ ...headlineSm }}>{et.name}</Typography>
                    <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant }}>{et.desc}</Typography>
                  </Box>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: `1px solid ${colors.outlineVariant}15` }}>
                    <Typography sx={{ ...labelXs, color: colors.outline, fontSize: '12px' }}>{et.questions} preguntas</Typography>
                    <ArrowRightOutlined style={{ color: colors.outline }} />
                  </Stack>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* History Table */}
      <Box>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ ...headlineLg }}>Historial de evaluaciones</Typography>
          <Button startIcon={<DownloadOutlined />} sx={{ color: colors.primary, fontWeight: 700, textTransform: 'none' }}>
            Descargar reporte
          </Button>
        </Stack>
        <Box sx={{ ...glassCardSm, overflow: 'hidden' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: `${colors.surfaceContainerLow}80` }}>
                  {['Tipo', 'Materia', 'Preguntas', 'Aciertos', 'Resultado', 'Duración', 'Fecha'].map((h) => (
                    <TableCell key={h} sx={{ ...labelXs, fontSize: '12px', color: colors.onSurface, py: 2.5, borderBottom: `1px solid ${colors.outlineVariant}15` }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {HISTORY.map((row, i) => (
                  <TableRow key={i} sx={{ '&:hover': { bgcolor: `${colors.primaryContainer}08` }, transition: 'background 0.2s' }}>
                    <TableCell>
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ color: row.iconColor }}>{row.icon}</Box>
                        <Typography sx={{ fontWeight: 700 }}>{row.type}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ color: colors.onSurfaceVariant, fontWeight: 500 }}>{row.subject}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.correct}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'inline-flex', bgcolor: row.pctColor, color: row.pctText, px: 1.5, py: 0.5, borderRadius: '9999px', fontWeight: 700, fontSize: '13px' }}>
                        {row.pct}%
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: colors.outline }}>{row.duration}</TableCell>
                    <TableCell sx={{ color: colors.outline }}>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Stack>
  );
}
