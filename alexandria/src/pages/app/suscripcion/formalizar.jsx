import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// icons
import {
  CheckCircleFilled,
  CreditCardOutlined,
  CrownOutlined,
  HomeOutlined,
  RightOutlined,
  RocketOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';

// vibrant
import { glassCard, vibrantGradient, headlineLg, headlineMd, headlineSm, labelMd, labelXs, colors } from 'themes/vibrant';

// ==============================|| DEMO DATA ||============================== //

const ORDER = {
  plan: 'Plan Anual Alexandrya',
  price: '$1,499 MXN',
  items: [
    { label: 'Acceso Ilimitado', value: 'Incluido' },
    { label: 'Mentoría IA 24/7', value: 'Incluido' },
    { label: 'Impuestos (IVA)', value: '$0.00' }
  ],
  card: {
    last4: '4532',
    holder: 'Juan Pérez',
    expiry: '12/28'
  }
};

// ==============================|| FORMALIZAR SUSCRIPCIÓN — VIBRANT ODYSSEY ||============================== //

export default function SuscripcionFormalizar() {
  const [processing, setProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePay = async () => {
    setProcessing(true);
    // TODO: POST /api/v1/payments/checkout
    await new Promise((r) => setTimeout(r, 2000));
    setProcessing(false);
    setShowSuccess(true);
  };

  return (
    <Stack sx={{ gap: 4, position: 'relative' }}>
      {/* Ambient blur */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: `${colors.primary}06`, filter: 'blur(100px)', pointerEvents: 'none' }} />

      {/* ── Breadcrumb + Header ── */}
      <Box>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mb: 0.5 }}>
          <HomeOutlined style={{ fontSize: 13, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.outline, fontSize: '13px' }}>Inicio</Typography>
          <RightOutlined style={{ fontSize: 10, color: colors.outline }} />
          <Link href="/free/app/suscripcion" sx={{ ...labelMd, color: colors.outline, fontSize: '13px', textDecoration: 'none', '&:hover': { color: colors.primary } }}>
            Suscripción
          </Link>
          <RightOutlined style={{ fontSize: 10, color: colors.outline }} />
          <Link href="/free/app/suscripcion/pago" sx={{ ...labelMd, color: colors.outline, fontSize: '13px', textDecoration: 'none', '&:hover': { color: colors.primary } }}>
            Pago
          </Link>
          <RightOutlined style={{ fontSize: 10, color: colors.outline }} />
          <Typography sx={{ ...labelMd, color: colors.primary, fontSize: '13px' }}>Confirmar</Typography>
        </Stack>
        <Typography sx={{ ...headlineLg }}>Finalizar suscripción</Typography>
        <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: colors.onSurfaceVariant, mt: 0.5 }}>
          Completa tus datos de pago para activar tu Plan Anual.
        </Typography>
      </Box>

      {/* ── Layout: Review (7) | Summary (5) ── */}
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Left: Payment Review */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Stack sx={{ gap: 3 }}>
            {/* Card on file */}
            <Box sx={{ ...glassCard, p: { xs: 3, md: 4 }, borderRadius: '28px', '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow } }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography sx={{ ...headlineSm }}>Método de pago</Typography>
                <Link href="/free/app/suscripcion/pago" sx={{ fontSize: '14px', color: colors.primary, fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Cambiar
                </Link>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  gap: 2.5,
                  p: 2.5,
                  bgcolor: colors.surfaceContainerLow,
                  borderRadius: '16px'
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 36,
                    background: 'linear-gradient(45deg, #7c3aed 0%, #57dffe 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  <CreditCardOutlined style={{ fontSize: 20 }} />
                </Box>
                <Stack sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 700, color: colors.onSurface }}>
                    Visa terminada en {ORDER.card.last4}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant }}>
                    {ORDER.card.holder} &middot; Expira {ORDER.card.expiry}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Plan details */}
            <Box sx={{ ...glassCard, p: { xs: 3, md: 4 }, borderRadius: '28px', '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow } }}>
              <Typography sx={{ ...headlineSm, mb: 2 }}>Detalles del plan</Typography>

              <Stack sx={{ gap: 2 }}>
                {[
                  { label: 'Plan', value: ORDER.plan },
                  { label: 'Duración', value: '12 meses' },
                  { label: 'Fecha de inicio', value: 'Inmediato tras confirmar' },
                  { label: 'Renovación automática', value: 'No' }
                ].map((row) => (
                  <Stack key={row.label} direction="row" sx={{ justifyContent: 'space-between', py: 1, borderBottom: `1px solid ${colors.outlineVariant}20` }}>
                    <Typography sx={{ fontSize: '15px', color: colors.onSurfaceVariant }}>{row.label}</Typography>
                    <Typography sx={{ fontSize: '15px', fontWeight: 600, color: colors.onSurface }}>{row.value}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* Security badge */}
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                gap: 1.5,
                p: 2.5,
                borderRadius: '14px',
                bgcolor: `${colors.surfaceContainerHigh}60`
              }}
            >
              <SafetyCertificateOutlined style={{ fontSize: 20, color: colors.primary }} />
              <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant, lineHeight: 1.4 }}>
                Tus datos están encriptados y protegidos por estándares de seguridad de nivel bancario.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Right: Order Summary */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Box sx={{ ...glassCard, p: { xs: 3, md: 4 }, borderRadius: '32px', position: { lg: 'sticky' }, top: { lg: 100 }, '&:hover': { transform: 'scale(1.02)', boxShadow: '0 20px 60px rgba(99, 14, 212, 0.1)' } }}>
            {/* Plan icon */}
            <Box
              sx={{
                width: 72,
                height: 72,
                ...vibrantGradient,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(99, 14, 212, 0.3)',
                mb: 3
              }}
            >
              <CrownOutlined style={{ fontSize: 36 }} />
            </Box>

            <Typography sx={{ ...headlineMd, mb: 1 }}>Resumen del Pedido</Typography>
            <Typography sx={{ fontSize: '15px', color: colors.onSurfaceVariant, mb: 3 }}>
              Estás a un paso de potenciar tu aprendizaje con Alexandrya.
            </Typography>

            {/* Line items */}
            <Stack sx={{ gap: 2, pt: 3, borderTop: `1px solid ${colors.outlineVariant}30`, mb: 4 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 600, color: colors.onSurface }}>{ORDER.plan}</Typography>
                <Typography sx={{ fontWeight: 700, color: colors.onSurface }}>{ORDER.price}</Typography>
              </Stack>
              {ORDER.items.map((item) => (
                <Stack key={item.label} direction="row" sx={{ justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>{item.label}</Typography>
                  <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>{item.value}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Total */}
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Typography sx={{ ...labelXs, color: colors.onSurfaceVariant }}>TOTAL A PAGAR</Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: colors.primary
                }}
              >
                {ORDER.price}
              </Typography>
            </Stack>

            {/* CTA */}
            <Button
              fullWidth
              onClick={handlePay}
              disabled={processing}
              startIcon={processing ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                ...vibrantGradient,
                color: '#fff',
                borderRadius: '16px',
                py: 2,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(99, 14, 212, 0.3)',
                transition: 'all 0.2s',
                '&:hover': { ...vibrantGradient, boxShadow: '0 8px 30px rgba(99, 14, 212, 0.4)', transform: 'translateY(-1px)' },
                '&:disabled': { opacity: 0.7, color: '#fff' }
              }}
            >
              {processing ? 'Procesando...' : 'Pagar ahora'}
            </Button>

            {/* Legal */}
            <Typography sx={{ fontSize: '12px', color: colors.onSurfaceVariant, textAlign: 'center', mt: 2, px: 2 }}>
              Al hacer clic en &quot;Pagar ahora&quot;, aceptas nuestros{' '}
              <Link href="#" sx={{ color: colors.primary, textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                Términos de Servicio
              </Link>{' '}
              y{' '}
              <Link href="#" sx={{ color: colors.primary, textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                Políticas de Privacidad
              </Link>.
            </Typography>

            {/* Social proof */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondaryContainer}20 100%)`,
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Stack direction="row" sx={{ alignItems: 'center', gap: 2, position: 'relative', zIndex: 1 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    ...vibrantGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0
                  }}
                >
                  <RocketOutlined style={{ fontSize: 20 }} />
                </Box>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: colors.onSurface, lineHeight: 1.4 }}>
                  Únete a más de 50,000 estudiantes que ya se preparan con Alexandrya.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* ── Success Dialog ── */}
      <Dialog
        open={showSuccess}
        PaperProps={{
          sx: {
            ...glassCard,
            borderRadius: '32px',
            p: 0,
            maxWidth: 440,
            '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow }
          }
        }}
      >
        <Box sx={{ p: { xs: 4, sm: 5 }, textAlign: 'center' }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              mx: 'auto',
              mb: 3,
              bgcolor: '#dcfce7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CheckCircleFilled style={{ fontSize: 48, color: '#16a34a' }} />
          </Box>
          <Typography sx={{ ...headlineLg, mb: 2 }}>¡Pago Exitoso!</Typography>
          <Typography sx={{ fontSize: '16px', color: colors.onSurfaceVariant, mb: 4, lineHeight: 1.5 }}>
            Bienvenido a la comunidad Alexandrya. Tu acceso Pro está activo.
          </Typography>
          <Button
            fullWidth
            href="/free/app/dashboard"
            sx={{
              ...vibrantGradient,
              color: '#fff',
              borderRadius: '16px',
              py: 1.75,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(99, 14, 212, 0.3)',
              '&:hover': { ...vibrantGradient, boxShadow: '0 8px 30px rgba(99, 14, 212, 0.4)' }
            }}
          >
            Ir a mi Dashboard
          </Button>
        </Box>
      </Dialog>
    </Stack>
  );
}
