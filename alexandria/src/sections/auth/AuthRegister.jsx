import { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

// material-ui
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// ============================|| REGISTRO ||============================ //

export default function AuthRegister() {
  const [searchParams] = useSearchParams();
  const refCode = searchParams.get('ref') || '';

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        referralCode: refCode,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string()
          .max(255, 'Máximo 255 caracteres')
          .required('El nombre es obligatorio'),
        lastname: Yup.string()
          .max(255, 'Máximo 255 caracteres')
          .required('El apellido es obligatorio'),
        email: Yup.string()
          .email('Ingresa un correo válido')
          .max(255)
          .required('El correo es obligatorio'),
        password: Yup.string()
          .required('La contraseña es obligatoria')
          .min(8, 'Mínimo 8 caracteres')
          .max(128, 'Máximo 128 caracteres')
          .matches(/[A-Z]/, 'Debe incluir al menos una mayúscula')
          .matches(/[a-z]/, 'Debe incluir al menos una minúscula')
          .matches(/[0-9]/, 'Debe incluir al menos un número')
          .test(
            'no-leading-trailing-whitespace',
            'No puede iniciar o terminar con espacios',
            (value) => value === value?.trim()
          ),
        referralCode: Yup.string()
          .matches(/^(ALEX-[A-Z0-9]{4})?$/, 'Código de referido inválido')
      })}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        if (!acceptTerms) {
          setErrors({ submit: 'Debes aceptar los términos y condiciones.' });
          setSubmitting(false);
          return;
        }
        try {
          // TODO: Conectar con API real
          // const response = await apiClient.post('/api/v1/auth/register', {
          //   nombre: values.firstname,
          //   apellido: values.lastname,
          //   email: values.email,
          //   password: values.password,
          //   codigo_referido: values.referralCode || null
          // });
          // Redirect to verification page
          console.log('Register submit:', values.email);
        } catch (err) {
          // MSG-02B: mensaje genérico anti-enumeración
          setErrors({
            submit: 'No pudimos completar el registro con esos datos.'
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Nombre */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="firstname-signup">Nombre *</InputLabel>
                <OutlinedInput
                  id="firstname-signup"
                  value={values.firstname}
                  name="firstname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  fullWidth
                  error={Boolean(touched.firstname && errors.firstname)}
                  autoComplete="given-name"
                  aria-describedby="helper-text-firstname-signup"
                />
              </Stack>
              {touched.firstname && errors.firstname && (
                <FormHelperText error id="helper-text-firstname-signup">
                  {errors.firstname}
                </FormHelperText>
              )}
            </Grid>

            {/* Apellido */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="lastname-signup">Apellido *</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.lastname && errors.lastname)}
                  id="lastname-signup"
                  value={values.lastname}
                  name="lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  autoComplete="family-name"
                  aria-describedby="helper-text-lastname-signup"
                />
              </Stack>
              {touched.lastname && errors.lastname && (
                <FormHelperText error id="helper-text-lastname-signup">
                  {errors.lastname}
                </FormHelperText>
              )}
            </Grid>

            {/* Correo */}
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="email-signup">Correo electrónico *</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  id="email-signup"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  aria-describedby="helper-text-email-signup"
                />
              </Stack>
              {touched.email && errors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {errors.email}
                </FormHelperText>
              )}
            </Grid>

            {/* Contraseña */}
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="password-signup">Contraseña *</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="password-signup"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}
                  autoComplete="new-password"
                  aria-describedby="helper-text-password-signup"
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
                  placeholder="Mínimo 8 caracteres"
                />
              </Stack>
              {touched.password && errors.password && (
                <FormHelperText error id="helper-text-password-signup">
                  {errors.password}
                </FormHelperText>
              )}

              {/* Indicador de fortaleza */}
              <FormControl fullWidth sx={{ mt: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid>
                    <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle1" fontSize="0.75rem">
                      {level?.label}
                    </Typography>
                  </Grid>
                </Grid>
              </FormControl>
              <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
                Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número.
              </Typography>
            </Grid>

            {/* Código de referido (opcional) */}
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="referral-signup">Código de referido (opcional)</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="referral-signup"
                  value={values.referralCode}
                  name="referralCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="ALEX-XXXX"
                  error={Boolean(touched.referralCode && errors.referralCode)}
                  aria-describedby="helper-text-referral-signup"
                  inputProps={{ maxLength: 9, style: { textTransform: 'uppercase' } }}
                />
              </Stack>
              {touched.referralCode && errors.referralCode && (
                <FormHelperText error id="helper-text-referral-signup">
                  {errors.referralCode}
                </FormHelperText>
              )}
            </Grid>

            {/* Términos y condiciones */}
            <Grid size={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    name="acceptTerms"
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2">
                    Acepto los{' '}
                    <Link component={RouterLink} to="/terminos" variant="subtitle2">
                      Términos y condiciones
                    </Link>
                    {' '}y el{' '}
                    <Link component={RouterLink} to="/privacidad" variant="subtitle2">
                      Aviso de privacidad
                    </Link>
                  </Typography>
                }
              />
            </Grid>

            {/* Error del servidor */}
            {errors.submit && (
              <Grid size={12}>
                <Alert severity="error" variant="outlined" sx={{ borderRadius: 1 }}>
                  {errors.submit}
                </Alert>
              </Grid>
            )}

            {/* Submit */}
            <Grid size={12}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting || !acceptTerms}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  {isSubmitting ? 'Registrando...' : 'Crear cuenta'}
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
