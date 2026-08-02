import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// project imports
import { glassCard, glassCardSm, vibrantGradient, headlineLg, headlineSm, labelXs, colors } from 'themes/vibrant';

// assets
import UserOutlined from '@ant-design/icons/UserOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import StarOutlined from '@ant-design/icons/StarOutlined';

// ==============================|| REFERIDOS - VIBRANT ODYSSEY ||============================== //

const METRICS = [
  { label: 'Referidos activos', value: '1', extra: '/ 3', icon: <UserOutlined style={{ fontSize: 24 }} />, bgColor: `${colors.primaryContainer}15`, iconColor: colors.primary },
  { label: 'Pendientes', value: '1', extra: null, icon: <ClockCircleOutlined style={{ fontSize: 24 }} />, bgColor: `${colors.secondaryContainer}20`, iconColor: colors.secondary },
  { label: 'Disponibles', value: '2', extra: null, icon: <GiftOutlined style={{ fontSize: 24 }} />, bgColor: `${colors.tertiaryContainer}15`, iconColor: colors.tertiary }
];

const REFERRALS = [
  { initials: 'ML', name: 'Maria Lopez', handle: '@m.lopez99', date: '12 Oct 2023', status: 'Efectivo', statusColor: '#dcfce7', statusText: '#15803d', dotColor: '#22c55e', bgColor: `${colors.secondaryContainer}30` },
  { initials: 'CR', name: 'Carlos Ruiz', handle: '@carlitos_r', date: '28 Oct 2023', status: 'Pendiente', statusColor: colors.surfaceContainerHigh, statusText: colors.onSurfaceVariant, dotColor: `${colors.onSurfaceVariant}60`, bgColor: `${colors.primaryContainer}20` }
];

const MILESTONES = [
  { pos: '1er Referido', benefit: 'Exámenes ilimitados', desc: 'Acceso total a simulacros de admisión.', status: 'obtained', statusLabel: 'Obtenido' },
  { pos: '2do Referido', benefit: 'Material premium', desc: 'Guías de estudio exclusivas de la facultad.', status: 'pending', statusLabel: 'Pendiente' },
  { pos: '3er Referido', benefit: '30 días extra', desc: 'Extensión de tu suscripción PRO totalmente gratis.', status: 'locked', statusLabel: null }
];

export default function Referidos() {
  const [toast, setToast] = useState(false);
  const referralCode = 'ALEX-7Q2X';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setToast(true);
    } catch { /* fallback */ }
  };

  const handleShare = async () => {
    const url = `https://alexandrya.mx/register?ref=${referralCode}`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Alexandrya', text: `Usa mi código ${referralCode}`, url }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      setToast(true);
    }
  };

  return (
    <Stack sx={{ gap: 4 }}>
      {/* Header */}
      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { lg: 'flex-end' } }}>
        <Box>
          <Typography sx={{ ...headlineLg }}>Referidos</Typography>
          <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: colors.onSurfaceVariant, mt: 0.5 }}>
            Invita a tus amigos y desbloquea beneficios exclusivos.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'inline-flex' }, alignItems: 'center', gap: 1, bgcolor: `${colors.tertiaryContainer}15`, color: colors.tertiary, px: 2, py: 1, borderRadius: '9999px', border: `1px solid ${colors.tertiaryContainer}20` }}>
          <StarOutlined style={{ fontSize: 14 }} />
          <Typography sx={{ ...labelXs, fontSize: '12px' }}>Nivel de Embajador: Plata</Typography>
        </Box>
      </Stack>

      {/* Metrics Row */}
      <Grid container spacing={3}>
        {METRICS.map((m) => (
          <Grid key={m.label} size={{ xs: 12, md: 4 }}>
            <Box sx={{ ...glassCardSm, p: 3, display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: m.bgColor, color: m.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {m.icon}
              </Box>
              <Stack>
                <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant, fontSize: '11px', mb: 0.5 }}>{m.label}</Typography>
                <Stack direction="row" sx={{ alignItems: 'baseline', gap: 1 }}>
                  <Typography sx={{ fontSize: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>{m.value}</Typography>
                  {m.extra && <Typography sx={{ ...headlineSm, color: colors.onSurfaceVariant }}>{m.extra}</Typography>}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Code (2/5) + Table (3/5) */}
      <Grid container spacing={3}>
        {/* Referral Code */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Box sx={{ ...glassCard, p: 4, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ ...headlineSm, mb: 3 }}>Tu código de referido</Typography>
            <Box sx={{ bgcolor: colors.surfaceContainerLow, borderRadius: '16px', p: 3, border: `2px dashed ${colors.primary}20`, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant, letterSpacing: '0.2em', mb: 1.5 }}>CÓDIGO EXCLUSIVO</Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 700, color: colors.primary, letterSpacing: '0.1em' }}>
                {referralCode}
              </Typography>
              <Box onClick={handleCopy} sx={{ position: 'absolute', top: 12, right: 12, color: colors.onSurfaceVariant, cursor: 'pointer', '&:hover': { color: colors.primary }, transition: 'color 0.2s' }}>
                <CopyOutlined />
              </Box>
            </Box>
            <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant, fontFamily: 'Be Vietnam Pro, sans-serif', mt: 3, mb: 4, textAlign: 'center' }}>
              Comparte este código con tus compañeros. Cuando se registren y activen su cuenta, ambos recibirán beneficios exclusivos.
            </Typography>
            <Button
              variant="contained"
              startIcon={<SendOutlined />}
              onClick={handleShare}
              sx={{ ...vibrantGradient, color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, borderRadius: '16px', py: 2, textTransform: 'none', fontSize: '16px', boxShadow: `0 12px 30px ${colors.primary}30`, '&:hover': { ...vibrantGradient, transform: 'scale(1.02)' } }}
            >
              Compartir enlace de invitación
            </Button>
          </Box>
        </Grid>

        {/* Referral Table */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box sx={{ ...glassCard, p: 4 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography sx={{ ...headlineSm }}>Mis referidos</Typography>
              <Button sx={{ color: colors.primary, fontWeight: 700, textTransform: 'none', fontSize: '14px' }}>Ver todo</Button>
            </Stack>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {['Usuario', 'Fecha', 'Estado'].map((h, i) => (
                      <TableCell key={h} align={i === 2 ? 'right' : 'left'} sx={{ ...labelXs, fontSize: '11px', color: colors.onSurfaceVariant, borderBottom: `1px solid ${colors.outlineVariant}30`, pb: 2 }}>
                        {h}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {REFERRALS.map((r) => (
                    <TableRow key={r.initials}>
                      <TableCell sx={{ py: 2.5, borderBottom: `1px solid ${colors.outlineVariant}20` }}>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: r.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: colors.primary }}>
                            {r.initials}
                          </Box>
                          <Stack>
                            <Typography sx={{ fontWeight: 700 }}>{r.name}</Typography>
                            <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant }}>{r.handle}</Typography>
                          </Stack>
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ color: colors.onSurfaceVariant, fontSize: '14px', borderBottom: `1px solid ${colors.outlineVariant}20` }}>{r.date}</TableCell>
                      <TableCell align="right" sx={{ borderBottom: `1px solid ${colors.outlineVariant}20` }}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, bgcolor: r.statusColor, color: r.statusText, px: 1.5, py: 0.5, borderRadius: '9999px', fontSize: '12px', fontWeight: 700 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: r.dotColor }} />
                          {r.status}
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

      {/* Milestones */}
      <Box sx={{ ...glassCard, p: { xs: 4, md: 5 }, overflow: 'hidden' }}>
        <Typography sx={{ ...headlineSm, mb: 4 }}>Beneficios por referido</Typography>
        <Stack sx={{ gap: 3, maxWidth: 700, mx: 'auto', py: 2 }}>
          {MILESTONES.map((ms, i) => {
            const isObtained = ms.status === 'obtained';
            const isLocked = ms.status === 'locked';
            return (
              <Stack key={ms.pos} direction="row" sx={{ alignItems: 'flex-start', gap: 4, position: 'relative' }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  {isObtained ? (
                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', ...vibrantGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: `0 4px 16px ${colors.primary}40` }}>
                      <CheckCircleOutlined style={{ fontSize: 18 }} />
                    </Box>
                  ) : isLocked ? (
                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: colors.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center', color: `${colors.onSurfaceVariant}60` }}>
                      <LockOutlined style={{ fontSize: 18 }} />
                    </Box>
                  ) : (
                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#fff', border: `4px solid ${colors.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary, fontWeight: 700 }}>
                      2
                    </Box>
                  )}
                  {i < MILESTONES.length - 1 && (
                    <Box sx={{ position: 'absolute', left: '50%', top: 40, bottom: -28, width: 4, transform: 'translateX(-50%)', bgcolor: isObtained ? colors.primary : colors.surfaceContainerHigh, borderRadius: 2 }} />
                  )}
                </Box>
                <Box sx={{ flex: 1, p: 2.5, borderRadius: '16px', bgcolor: isLocked ? `${colors.surfaceContainerLow}80` : '#fff', border: `2px solid ${isObtained ? `${colors.primary}15` : isLocked ? 'transparent' : colors.outlineVariant}`, opacity: isLocked ? 0.6 : 1, boxShadow: isObtained ? '0 2px 8px rgba(0,0,0,0.04)' : 'none' }}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack>
                      <Typography sx={{ ...labelXs, fontSize: '11px', color: isObtained ? colors.primary : colors.onSurfaceVariant, mb: 0.5 }}>{ms.pos}</Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>{ms.benefit}</Typography>
                      <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>{ms.desc}</Typography>
                    </Stack>
                    {isObtained && (
                      <Box sx={{ bgcolor: `${colors.primary}12`, color: colors.primary, px: 2, py: 0.75, borderRadius: '9999px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>
                        {ms.statusLabel}
                      </Box>
                    )}
                    {ms.status === 'pending' && (
                      <Stack sx={{ alignItems: 'flex-end', gap: 0.5, flexShrink: 0 }}>
                        <Box sx={{ bgcolor: colors.surfaceContainerHigh, color: colors.onSurfaceVariant, px: 2, py: 0.75, borderRadius: '9999px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                          {ms.statusLabel}
                        </Box>
                        <Box sx={{ width: 96, height: 6, bgcolor: colors.surfaceContainerHigh, borderRadius: '9999px', overflow: 'hidden' }}>
                          <Box sx={{ width: '50%', height: '100%', ...vibrantGradient }} />
                        </Box>
                      </Stack>
                    )}
                  </Stack>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>

      <Snackbar open={toast} autoHideDuration={2000} onClose={() => setToast(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled">Código copiado al portapapeles</Alert>
      </Snackbar>
    </Stack>
  );
}
