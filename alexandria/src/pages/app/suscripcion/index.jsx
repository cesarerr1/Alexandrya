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
import { glassCard, glassCardSm, vibrantGradient, headlineLg, headlineMd, headlineSm, labelXs, colors } from 'themes/vibrant';

// assets
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CrownOutlined from '@ant-design/icons/CrownOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import StopOutlined from '@ant-design/icons/StopOutlined';

// ==============================|| SUSCRIPCIÓN - VIBRANT ODYSSEY ||============================== //

const FEATURES = [
  'Acceso completo a las 11 materias',
  'Simulacros ilimitados',
  'Evaluaciones por tema, módulo y materia',
  'Dashboard de progreso inteligente',
  'Material de estudio (videos, guías)'
];

const PAYMENTS = [
  { concept: 'Suscripción Anual - Pro', date: '15 Mayo, 2026', amount: '$1,499.00 MXN', status: 'Completado' },
  { concept: 'Suscripción Anual - Pro', date: '15 Mayo, 2025', amount: '$1,499.00 MXN', status: 'Completado' }
];

export default function Suscripcion() {
  return (
    <Stack sx={{ gap: 4, position: 'relative' }}>
      {/* Ambient blurs */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: `${colors.primary}05`, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: `${colors.secondary}05`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Breadcrumbs + Title */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography sx={{ ...labelXs, color: colors.outline, mb: 0.5 }}>
          Home › <Box component="span" sx={{ color: colors.primary, fontWeight: 900 }}>Suscripción</Box>
        </Typography>
        <Typography sx={{ ...headlineLg, mb: 1 }}>Mi suscripción</Typography>
        <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: colors.onSurfaceVariant, maxWidth: 600 }}>
          Gestiona tu plan premium, consulta tus beneficios exclusivos y mantente al día con tu viaje de aprendizaje en Alexandrya.
        </Typography>
      </Box>

      {/* Main Bento: Status (8) + Benefits (4) */}
      <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Status Card */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box sx={{ ...glassCard, p: { xs: 4, md: 5 } }}>
            {/* Plan Header */}
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 3, mb: 4 }}>
              <Stack direction="row" sx={{ alignItems: 'center', gap: 3 }}>
                <Box sx={{ width: 80, height: 80, ...vibrantGradient, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 30px rgba(99,14,212,0.3)', transform: 'rotate(3deg)' }}>
                  <CrownOutlined style={{ fontSize: 40 }} />
                </Box>
                <Stack>
                  <Typography sx={{ ...headlineMd }}>Plan Anual Alexandrya</Typography>
                  <Stack direction="row" sx={{ alignItems: 'baseline', gap: 1, mt: 0.5 }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, color: colors.primary, fontFamily: 'Montserrat, sans-serif' }}>$1,499 MXN</Typography>
                    <Typography sx={{ fontSize: '14px', color: colors.outline }}>/año</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Box sx={{ px: 3, py: 1, bgcolor: '#dcfce7', color: '#15803d', borderRadius: '9999px', border: '1px solid #bbf7d0', fontWeight: 700, fontSize: '14px', alignSelf: { xs: 'flex-start', md: 'center' } }}>
                Activa
              </Box>
            </Stack>

            {/* Dates Row */}
            <Grid container spacing={3} sx={{ pt: 4, borderTop: `1px solid ${colors.outlineVariant}30` }}>
              {[
                { icon: <CalendarOutlined />, label: 'Inicio', value: '15 mayo 2026' },
                { icon: <ClockCircleOutlined />, label: 'Vencimiento', value: '15 mayo 2027' },
                { icon: <StopOutlined />, label: 'Renovación', value: 'Desactivada', valueColor: '#ba1a1a' }
              ].map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
                    <Box sx={{ p: 1.5, bgcolor: colors.surfaceContainerLow, borderRadius: '12px', color: colors.primary, display: 'flex' }}>
                      {item.icon}
                    </Box>
                    <Stack>
                      <Typography sx={{ ...labelXs, color: colors.outline, fontSize: '11px' }}>{item.label}</Typography>
                      <Typography sx={{ fontWeight: 700, color: item.valueColor || colors.onSurface }}>{item.value}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* Countdown Banner */}
            <Box sx={{ mt: 5, p: 3, bgcolor: `${colors.primary}08`, border: `1px solid ${colors.primary}15`, borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, position: 'relative', zIndex: 2 }}>
                <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 48, height: 48, bgcolor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <ClockCircleOutlined style={{ fontSize: 22, color: colors.primary }} />
                  </Box>
                  <Stack>
                    <Typography sx={{ ...headlineSm }}>
                      Quedan <Box component="span" sx={{ color: colors.primary }}>285 días</Box>
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>Disfruta de acceso total hasta mayo 2027</Typography>
                  </Stack>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1.5 }}>
                  <Button variant="contained" href="/free/app/suscripcion/pago" sx={{ bgcolor: colors.primary, fontWeight: 700, borderRadius: '16px', px: 4, py: 1.5, textTransform: 'none', boxShadow: `0 8px 24px ${colors.primary}30`, '&:hover': { bgcolor: '#5a00c6' } }}>
                    Renovar Plan
                  </Button>
                  <Button variant="outlined" href="/free/app/suscripcion/formalizar" sx={{ borderColor: colors.primary, color: colors.primary, fontWeight: 700, borderRadius: '16px', px: 4, py: 1.5, textTransform: 'none', '&:hover': { bgcolor: `${colors.primary}08`, borderColor: '#5a00c6' } }}>
                    Formalizar Pago
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Benefits Card */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ ...glassCard, p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, mb: 3 }}>
              <CheckCircleOutlined style={{ fontSize: 20, color: colors.secondary }} />
              <Typography sx={{ ...headlineSm }}>Tu plan incluye</Typography>
            </Stack>
            <Stack sx={{ gap: 2, flex: 1 }}>
              {FEATURES.map((f) => (
                <Stack key={f} direction="row" sx={{ alignItems: 'flex-start', gap: 1.5, '&:hover .check-circle': { bgcolor: '#22c55e', color: '#fff' }, cursor: 'default' }}>
                  <Box className="check-circle" sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.25, transition: 'all 0.2s', flexShrink: 0 }}>
                    <CheckCircleOutlined style={{ fontSize: 12, color: '#16a34a' }} />
                  </Box>
                  <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 500, color: colors.onSurfaceVariant, fontSize: '15px' }}>{f}</Typography>
                </Stack>
              ))}
            </Stack>
            {/* Upgrade teaser */}
            <Box sx={{ mt: 4, p: 2, bgcolor: `${colors.secondaryContainer}15`, border: `1px solid ${colors.secondaryContainer}30`, borderRadius: '16px' }}>
              <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: '50%', ...vibrantGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(99,14,212,0.3)' }}>
                  <RocketOutlined style={{ fontSize: 18 }} />
                </Box>
                <Stack sx={{ flex: 1 }}>
                  <Typography sx={{ ...labelXs, color: colors.secondary, fontSize: '11px' }}>UPGRADE</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>¿Quieres más?</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Payment History */}
        <Grid size={12}>
          <Box sx={{ ...glassCard, p: { xs: 3, md: 5 }, overflow: 'hidden' }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography sx={{ ...headlineSm }}>Historial de Pagos</Typography>
              <Button sx={{ color: colors.primary, fontWeight: 700, textTransform: 'none' }}>Descargar todo</Button>
            </Stack>
            <TableContainer>
              <Table sx={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                <TableHead>
                  <TableRow>
                    {['Concepto', 'Fecha', 'Monto', 'Estado', 'Acción'].map((h, i) => (
                      <TableCell key={h} align={i === 4 ? 'right' : 'left'} sx={{ ...labelXs, fontSize: '11px', color: colors.outline, pb: 2, borderBottom: 'none' }}>
                        {h}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PAYMENTS.map((p, i) => (
                    <TableRow key={i} sx={{ bgcolor: `${colors.surfaceContainerLow}60`, '&:hover': { bgcolor: '#fff' }, transition: 'background 0.2s', '& td:first-of-type': { borderRadius: '16px 0 0 16px' }, '& td:last-of-type': { borderRadius: '0 16px 16px 0' } }}>
                      <TableCell sx={{ py: 2.5, borderBottom: 'none' }}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{ color: colors.primary, bgcolor: `${colors.primary}12`, p: 1, borderRadius: '8px', display: 'flex' }}>
                            <FileTextOutlined />
                          </Box>
                          <Typography sx={{ fontWeight: 700 }}>{p.concept}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ borderBottom: 'none' }}>{p.date}</TableCell>
                      <TableCell sx={{ fontWeight: 700, borderBottom: 'none' }}>{p.amount}</TableCell>
                      <TableCell sx={{ borderBottom: 'none' }}>
                        <Box sx={{ display: 'inline-flex', px: 1.5, py: 0.5, bgcolor: '#dcfce7', color: '#15803d', borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                          {p.status}
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: 'none' }}>
                        <Box sx={{ color: colors.outline, cursor: 'pointer', '&:hover': { color: colors.primary }, transition: 'color 0.2s' }}>
                          <DownloadOutlined />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
