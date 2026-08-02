import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// vibrant
import { colors, vibrantGradient, labelMd } from 'themes/vibrant';

// Mensajes del catálogo MSG-02x
const MESSAGES = {
  'MSG-020': 'Correo o contraseña incorrectos.',
  'MSG-021': 'Credenciales incorrectas. Te quedan {{intentos}} intentos.',
  'MSG-022': 'Demasiados intentos. Intenta de nuevo en {{minutos}} minutos.',
  'MSG-023': 'Tu cuenta aún no está verificada. Revisa tu correo.',
  'MSG-027': 'Al continuar cerraremos tu sesión en el otro dispositivo.'
};

// Shared input styles
const inputSx = {
  borderRadius: '14px',
  bgcolor: colors.surfaceContainerLow,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.outlineVariant
  },
  '&.Mui-focused': {
    bgcolor: '#fff',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
      borderWidth: 2
    }
  }
};

// ============================|| LOGIN — VIBRANT ODYSSEY ||============================ //

export default function AuthLogin({ isDemo = false }) {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Ingresa un correo válido')
          .max(100, 'Máximo 100 caracteres')
          .required('El correo es obligatorio'),
        password: Yup.string()
          .required('La contraseña es obligatoria')
          .test(
            'no-leading-trailing-whitespace',
            'La contraseña no puede iniciar o terminar con espacios',
            (value) => value === value?.trim()
          )
          .max(128, 'La contraseña es demasiado larga')
      })}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          // TODO: POST /api/v1/auth/login
          console.log('Login submit:', values.email);
        } catch (err) {
          const code = err?.response?.data?.code;
          const message = MESSAGES[code] || 'Ocurrió un error al iniciar sesión. Intenta de nuevo.';
          setErrors({ submit: message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Stack sx={{ gap: 3 }}>
            {/* Correo electrónico */}
            <Stack sx={{ gap: 0.75 }}>
              <InputLabel htmlFor="email-login" sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface }}>
                Correo electrónico
              </InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="tu@correo.com"
                fullWidth
                error={Boolean(touched.email && errors.email)}
                autoComplete="email"
                aria-describedby="helper-text-email-login"
                sx={inputSx}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="helper-text-email-login">{errors.email}</FormHelperText>
              )}
            </Stack>

            {/* Contraseña */}
            <Stack sx={{ gap: 0.75 }}>
              <InputLabel htmlFor="password-login" sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface }}>
                Contraseña
              </InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(touched.password && errors.password)}
                id="password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="current-password"
                aria-describedby="helper-text-password-login"
                placeholder="Ingresa tu contraseña"
                sx={inputSx}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="secondary"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="helper-text-password-login">{errors.password}</FormHelperText>
              )}
            </Stack>

            {/* Recordarme + Olvidé contraseña */}
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mt: -1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    size="small"
                    sx={{ color: colors.outline, '&.Mui-checked': { color: colors.primary } }}
                  />
                }
                label={<Typography sx={{ fontSize: '14px', color: colors.onSurfaceVariant }}>Recordarme</Typography>}
              />
              <Link
                component={RouterLink}
                to="/forgot-password"
                sx={{ fontSize: '14px', fontWeight: 600, color: colors.primary, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Stack>

            {/* Error del servidor */}
            {errors.submit && (
              <Alert severity="error" variant="outlined" sx={{ borderRadius: '12px' }}>
                {errors.submit}
              </Alert>
            )}

            {/* Submit */}
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                ...vibrantGradient,
                color: '#fff',
                borderRadius: '14px',
                py: 1.5,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(99, 14, 212, 0.3)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  ...vibrantGradient,
                  boxShadow: '0 8px 30px rgba(99, 14, 212, 0.4)',
                  transform: 'translateY(-1px)'
                },
                '&:disabled': {
                  opacity: 0.7,
                  color: '#fff'
                }
              }}
            >
              {isSubmitting ? 'Ingresando...' : 'Iniciar sesión'}
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
}

AuthLogin.propTypes = { isDemo: PropTypes.bool };
