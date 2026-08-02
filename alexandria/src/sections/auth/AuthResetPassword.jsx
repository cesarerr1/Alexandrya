import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// material-ui
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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

// ============================|| RESET PASSWORD ||============================ //

export default function AuthResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  if (!token) {
    return (
      <Alert severity="error" variant="outlined" sx={{ borderRadius: 1 }}>
        Este enlace no es válido o ha expirado. Solicita uno nuevo.
      </Alert>
    );
  }

  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '', submit: null }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required('La contraseña es obligatoria')
          .min(8, 'Mínimo 8 caracteres')
          .max(128, 'Máximo 128 caracteres')
          .matches(/[A-Z]/, 'Debe incluir al menos una mayúscula')
          .matches(/[a-z]/, 'Debe incluir al menos una minúscula')
          .matches(/[0-9]/, 'Debe incluir al menos un número'),
        confirmPassword: Yup.string()
          .required('Confirma tu contraseña')
          .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // TODO: Conectar con API real
          // await apiClient.post('/api/v1/auth/reset-password', {
          //   token,
          //   password: values.password
          // });
          setStatus({ success: true });
        } catch (err) {
          const code = err?.response?.data?.code;
          if (code === 'TOKEN_EXPIRED') {
            setErrors({ submit: 'Este enlace ya no es válido. Solicita uno nuevo.' });
          } else {
            setErrors({ submit: 'Ocurrió un error. Intenta de nuevo.' });
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, status, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {status?.success ? (
              <Grid size={12}>
                <Alert severity="success" variant="outlined" sx={{ borderRadius: 1 }}>
                  Tu contraseña se actualizó correctamente. Ya puedes iniciar sesión.
                </Alert>
              </Grid>
            ) : (
              <>
                <Grid size={12}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Ingresa tu nueva contraseña.
                  </Typography>
                </Grid>

                {/* Nueva contraseña */}
                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="password-reset">Nueva contraseña</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="password-reset"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        changePassword(e.target.value);
                      }}
                      autoComplete="new-password"
                      aria-describedby="helper-text-password-reset"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
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
                    <FormHelperText error id="helper-text-password-reset">
                      {errors.password}
                    </FormHelperText>
                  )}
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
                </Grid>

                {/* Confirmar contraseña */}
                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="confirm-password-reset">Confirmar contraseña</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                      id="confirm-password-reset"
                      type={showConfirm ? 'text' : 'password'}
                      value={values.confirmPassword}
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      autoComplete="new-password"
                      aria-describedby="helper-text-confirm-reset"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            onClick={() => setShowConfirm(!showConfirm)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                            color="secondary"
                          >
                            {showConfirm ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Repite tu contraseña"
                    />
                  </Stack>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <FormHelperText error id="helper-text-confirm-reset">
                      {errors.confirmPassword}
                    </FormHelperText>
                  )}
                </Grid>

                {errors.submit && (
                  <Grid size={12}>
                    <Alert severity="error" variant="outlined" sx={{ borderRadius: 1 }}>
                      {errors.submit}
                    </Alert>
                  </Grid>
                )}

                <Grid size={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                      {isSubmitting ? 'Actualizando...' : 'Restablecer contraseña'}
                    </Button>
                  </AnimateButton>
                </Grid>
              </>
            )}
          </Grid>
        </form>
      )}
    </Formik>
  );
}
