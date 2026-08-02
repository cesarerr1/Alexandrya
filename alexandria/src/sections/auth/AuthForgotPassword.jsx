// material-ui
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| FORGOT PASSWORD ||============================ //

export default function AuthForgotPassword() {
  return (
    <Formik
      initialValues={{ email: '', submit: null }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Ingresa un correo válido')
          .max(255)
          .required('El correo es obligatorio')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // TODO: Conectar con API real
          // await apiClient.post('/api/v1/auth/forgot-password', { email: values.email });
          // MSG-02E: siempre el mismo mensaje (anti-enumeración)
          setStatus({ success: true });
        } catch (err) {
          setErrors({ submit: 'Ocurrió un error. Intenta de nuevo.' });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, status, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
              </Typography>
            </Grid>

            {status?.success ? (
              <Grid size={12}>
                <Alert severity="success" variant="outlined" sx={{ borderRadius: 1 }}>
                  Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.
                </Alert>
              </Grid>
            ) : (
              <>
                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="email-forgot">Correo electrónico</InputLabel>
                    <OutlinedInput
                      id="email-forgot"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      autoComplete="email"
                      aria-describedby="helper-text-email-forgot"
                    />
                  </Stack>
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-forgot">
                      {errors.email}
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
                      {isSubmitting ? 'Enviando...' : 'Enviar enlace'}
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
