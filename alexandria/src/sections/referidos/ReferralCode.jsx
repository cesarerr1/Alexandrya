import { useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined';

// ==============================|| REFERIDOS - CODE ||============================== //

export default function ReferralCode({ code }) {
  const referralCode = code || 'ALEX-7Q2X';
  const referralUrl = `https://alexandrya.mx/register?ref=${referralCode}`;
  const [toast, setToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setToast(true);
    } catch {
      // Fallback silencioso
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Alexandrya — Prepárate para tu examen',
          text: `Usa mi código ${referralCode} y obtén beneficios al suscribirte.`,
          url: referralUrl
        });
      } catch {
        // Usuario canceló
      }
    } else {
      await navigator.clipboard.writeText(referralUrl);
      setToast(true);
    }
  };

  return (
    <MainCard title="Tu código de referido">
      <Stack sx={{ gap: 2 }}>
        <OutlinedInput
          value={referralCode}
          readOnly
          fullWidth
          aria-label="Tu código de referido"
          sx={{
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: 2,
            textAlign: 'center',
            '& input': { textAlign: 'center' }
          }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                size="small"
                startIcon={<CopyOutlined />}
                onClick={handleCopy}
                sx={{ textTransform: 'none' }}
              >
                Copiar
              </Button>
            </InputAdornment>
          }
        />

        <Button
          variant="contained"
          startIcon={<ShareAltOutlined />}
          onClick={handleShare}
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Compartir enlace de invitación
        </Button>

        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Comparte tu código con hasta 3 personas. Ambos obtienen beneficios cuando tu referido se suscribe.
        </Typography>
      </Stack>

      <Snackbar
        open={toast}
        autoHideDuration={2000}
        onClose={() => setToast(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Código copiado al portapapeles
        </Alert>
      </Snackbar>
    </MainCard>
  );
}

ReferralCode.propTypes = {
  code: PropTypes.string
};
