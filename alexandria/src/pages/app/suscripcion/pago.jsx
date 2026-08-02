import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// icons
import {
  CreditCardOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  HomeOutlined,
  RightOutlined,
  QuestionCircleOutlined,
  WifiOutlined
} from '@ant-design/icons';

// vibrant
import { glassCard, vibrantGradient, headlineLg, headlineSm, labelMd, labelXs, colors } from 'themes/vibrant';

// ==============================|| INPUT SX ||============================== //

const inputSx = {
  borderRadius: '14px',
  bgcolor: colors.surfaceContainerLow,
  height: 56,
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.outlineVariant },
  '&.Mui-focused': {
    bgcolor: '#fff',
    boxShadow: `0 0 0 4px ${colors.primary}15`,
    '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary, borderWidth: 2 }
  }
};

// ==============================|| VIRTUAL CARD PREVIEW ||============================== //

function VirtualCard({ holder, number, expiry }) {
  const displayNumber = number || '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022';
  const displayHolder = holder?.toUpperCase() || 'ALEXANDRYA USER';
  const displayExpiry = expiry || 'MM/YY';

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #7c3aed 0%, #57dffe 100%)',
        borderRadius: '24px',
        p: { xs: 4, sm: 5 },
        color: '#fff',
        aspectRatio: '1.586 / 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(99, 14, 212, 0.25)'
      }}
    >
      {/* Decorative circles */}
      <Box sx={{ position: 'absolute', right: -40, bottom: -40, width: 160, height: 160, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(30px)' }} />
      <Box sx={{ position: 'absolute', left: -40, top: -40, width: 160, height: 160, bgcolor: 'rgba(0,104,122,0.3)', borderRadius: '50%', filter: 'blur(20px)' }} />

      {/* Top row: contactless + brand */}
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <WifiOutlined style={{ fontSize: 32, transform: 'rotate(90deg)', opacity: 0.9 }} />
        <Stack direction="row" sx={{ gap: 1 }}>
          <Box sx={{ width: 40, height: 24, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
          <Box sx={{ width: 40, height: 24, bgcolor: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} />
        </Stack>
      </Stack>

      {/* Bottom: number + holder + expiry */}
      <Stack sx={{ gap: 2.5, position: 'relative', zIndex: 1 }}>
        <Typography sx={{ fontSize: '20px', letterSpacing: '0.2em', fontWeight: 500, opacity: 0.9, fontFamily: 'monospace' }}>
          {displayNumber}
        </Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Stack sx={{ gap: 0.25 }}>
            <Typography sx={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.7 }}>Titular de tarjeta</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {displayHolder}
            </Typography>
          </Stack>
          <Stack sx={{ gap: 0.25, textAlign: 'right' }}>
            <Typography sx={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.7 }}>Expira</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{displayExpiry}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

// ==============================|| CHECKOUT / PAGO — VIBRANT ODYSSEY ||============================== //

export default function SuscripcionPago() {
  const navigate = useNavigate();
  const [cardPreview, setCardPreview] = useState({ holder: '', number: '', expiry: '' });

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
          <Typography sx={{ ...labelMd, color: colors.primary, fontSize: '13px' }}>Finalizar Pago</Typography>
        </Stack>
        <Typography sx={{ ...headlineLg }}>Finalizar Pago</Typography>
        <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '18px', color: colors.onSurfaceVariant, mt: 0.5 }}>
          Completa los detalles de tu tarjeta para activar tu suscripción.
        </Typography>
      </Box>

      {/* ── Layout: Card Preview + Summary (5) | Form (7) ── */}
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Left: Card Preview + Order Summary */}
        <Grid size={{ xs: 12, lg: 5 }} sx={{ order: { xs: 2, lg: 1 } }}>
          <Stack sx={{ gap: 3 }}>
            {/* Order Summary */}
            <Box sx={{ ...glassCard, p: 3, borderRadius: '24px', '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow } }}>
              <Typography sx={{ ...headlineSm, mb: 1 }}>Resumen de tu Plan</Typography>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: `1px solid ${colors.outlineVariant}40` }}>
                <Stack>
                  <Typography sx={{ fontWeight: 700, color: colors.onSurface }}>Plan Anual Alexandrya</Typography>
                  <Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>Acceso ilimitado a +500 cursos</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700, color: colors.primary }}>$1,499 MXN</Typography>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
                <Typography sx={{ color: colors.onSurfaceVariant }}>IVA (16%) incluido</Typography>
                <Typography sx={{ ...headlineSm }}>$1,499.00</Typography>
              </Stack>
            </Box>

            {/* Virtual Card */}
            <VirtualCard holder={cardPreview.holder} number={cardPreview.number} expiry={cardPreview.expiry} />

            {/* Security badge */}
            <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, color: colors.onSurfaceVariant }}>
              <SafetyCertificateOutlined style={{ fontSize: 18, color: colors.primary }} />
              <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Pago 100% seguro y encriptado</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Right: Payment Form */}
        <Grid size={{ xs: 12, lg: 7 }} sx={{ order: { xs: 1, lg: 2 } }}>
          <Box sx={{ ...glassCard, p: { xs: 3, md: 5 }, borderRadius: '32px', '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow } }}>
            <Formik
              initialValues={{ cardHolder: '', cardNumber: '', expiry: '', cvv: '' }}
              validationSchema={Yup.object().shape({
                cardHolder: Yup.string().required('El nombre del titular es obligatorio').max(80),
                cardNumber: Yup.string().required('El número de tarjeta es obligatorio').matches(/^[\d\s]{16,19}$/, 'Número de tarjeta inválido'),
                expiry: Yup.string().required('La fecha es obligatoria').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato MM/YY'),
                cvv: Yup.string().required('El CVV es obligatorio').matches(/^\d{3,4}$/, '3 o 4 dígitos')
              })}
              onSubmit={() => {
                navigate('/app/suscripcion/formalizar');
              }}
            >
              {({ errors, handleBlur, handleChange, handleSubmit, touched, values, setFieldValue }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Stack sx={{ gap: 3 }}>
                    {/* Card Holder */}
                    <Stack sx={{ gap: 0.75 }}>
                      <InputLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurfaceVariant, pl: 0.5 }}>
                        Nombre del titular
                      </InputLabel>
                      <OutlinedInput
                        name="cardHolder"
                        value={values.cardHolder}
                        onChange={(e) => {
                          handleChange(e);
                          setCardPreview((p) => ({ ...p, holder: e.target.value }));
                        }}
                        onBlur={handleBlur}
                        placeholder="Como aparece en la tarjeta"
                        fullWidth
                        error={Boolean(touched.cardHolder && errors.cardHolder)}
                        autoComplete="cc-name"
                        sx={inputSx}
                        startAdornment={
                          <InputAdornment position="start">
                            <UserOutlined style={{ fontSize: 16, color: colors.outline }} />
                          </InputAdornment>
                        }
                      />
                      {touched.cardHolder && errors.cardHolder && (
                        <Typography sx={{ fontSize: '12px', color: '#ba1a1a', pl: 0.5 }}>{errors.cardHolder}</Typography>
                      )}
                    </Stack>

                    {/* Card Number */}
                    <Stack sx={{ gap: 0.75 }}>
                      <InputLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurfaceVariant, pl: 0.5 }}>
                        Número de tarjeta
                      </InputLabel>
                      <OutlinedInput
                        name="cardNumber"
                        value={values.cardNumber}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
                          const formatted = raw.match(/.{1,4}/g)?.join(' ') || '';
                          setFieldValue('cardNumber', formatted);
                          setCardPreview((p) => ({ ...p, number: formatted }));
                        }}
                        onBlur={handleBlur}
                        placeholder="0000 0000 0000 0000"
                        fullWidth
                        error={Boolean(touched.cardNumber && errors.cardNumber)}
                        autoComplete="cc-number"
                        inputProps={{ maxLength: 19 }}
                        sx={inputSx}
                        endAdornment={
                          <InputAdornment position="end">
                            <CreditCardOutlined style={{ fontSize: 18, color: colors.outline }} />
                          </InputAdornment>
                        }
                      />
                      {touched.cardNumber && errors.cardNumber && (
                        <Typography sx={{ fontSize: '12px', color: '#ba1a1a', pl: 0.5 }}>{errors.cardNumber}</Typography>
                      )}
                    </Stack>

                    {/* Expiry + CVV */}
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 6 }}>
                        <Stack sx={{ gap: 0.75 }}>
                          <InputLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurfaceVariant, pl: 0.5 }}>
                            Fecha (MM/YY)
                          </InputLabel>
                          <OutlinedInput
                            name="expiry"
                            value={values.expiry}
                            onChange={(e) => {
                              let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
                              if (raw.length >= 2) raw = raw.substring(0, 2) + '/' + raw.substring(2);
                              setFieldValue('expiry', raw);
                              setCardPreview((p) => ({ ...p, expiry: raw }));
                            }}
                            onBlur={handleBlur}
                            placeholder="MM/YY"
                            fullWidth
                            error={Boolean(touched.expiry && errors.expiry)}
                            autoComplete="cc-exp"
                            inputProps={{ maxLength: 5 }}
                            sx={inputSx}
                          />
                          {touched.expiry && errors.expiry && (
                            <Typography sx={{ fontSize: '12px', color: '#ba1a1a', pl: 0.5 }}>{errors.expiry}</Typography>
                          )}
                        </Stack>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Stack sx={{ gap: 0.75 }}>
                          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, pl: 0.5 }}>
                            <InputLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurfaceVariant }}>CVV</InputLabel>
                            <QuestionCircleOutlined style={{ fontSize: 12, color: colors.outline, cursor: 'help' }} title="3 dígitos al reverso de tu tarjeta" />
                          </Stack>
                          <OutlinedInput
                            name="cvv"
                            value={values.cvv}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="***"
                            type="password"
                            fullWidth
                            error={Boolean(touched.cvv && errors.cvv)}
                            autoComplete="cc-csc"
                            inputProps={{ maxLength: 4 }}
                            sx={inputSx}
                            startAdornment={
                              <InputAdornment position="start">
                                <LockOutlined style={{ fontSize: 16, color: colors.outline }} />
                              </InputAdornment>
                            }
                          />
                          {touched.cvv && errors.cvv && (
                            <Typography sx={{ fontSize: '12px', color: '#ba1a1a', pl: 0.5 }}>{errors.cvv}</Typography>
                          )}
                        </Stack>
                      </Grid>
                    </Grid>

                    {/* CTA */}
                    <Button
                      fullWidth
                      type="submit"
                      sx={{
                        ...vibrantGradient,
                        color: '#fff',
                        borderRadius: '16px',
                        py: 2.5,
                        mt: 1,
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        textTransform: 'none',
                        boxShadow: '0 4px 20px rgba(99, 14, 212, 0.3)',
                        '&:hover': { ...vibrantGradient, boxShadow: '0 0 15px rgba(124, 58, 237, 0.4)', transform: 'scale(1.02)' },
                        '&:active': { transform: 'scale(0.98)' },
                        transition: 'all 0.3s'
                      }}
                    >
                      Finalizar Pago - $1,499 MXN
                    </Button>

                    {/* Legal */}
                    <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant, textAlign: 'center', px: 3 }}>
                      Al hacer clic en &quot;Finalizar Pago&quot;, aceptas nuestros{' '}
                      <Link href="#" sx={{ color: colors.primary, textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                        Términos de Servicio
                      </Link>{' '}
                      y{' '}
                      <Link href="#" sx={{ color: colors.primary, textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                        Política de Privacidad
                      </Link>.
                    </Typography>
                  </Stack>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
