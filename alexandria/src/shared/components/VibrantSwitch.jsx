import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useField } from 'formik';
import { colors } from 'themes/vibrant';

// ==============================|| VIBRANT SWITCH (FORMIK) ||============================== //

export default function VibrantSwitch({ name, label, disabled = false }) {
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <Stack>
      <FormControlLabel
        control={
          <Switch
            checked={field.value}
            onChange={(e) => helpers.setValue(e.target.checked)}
            onBlur={() => helpers.setTouched(true)}
            disabled={disabled}
            sx={{
              '& .MuiSwitch-switchBase': {
                '&.Mui-checked': {
                  color: '#fff',
                  '& + .MuiSwitch-track': {
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryContainer} 100%)`,
                    opacity: 1
                  }
                }
              },
              '& .MuiSwitch-track': {
                bgcolor: colors.outlineVariant,
                borderRadius: 12
              },
              '& .MuiSwitch-thumb': {
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }
            }}
          />
        }
        label={label}
        slotProps={{
          typography: {
            sx: { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '15px', color: colors.onSurface }
          }
        }}
      />
      {hasError && (
        <FormHelperText error sx={{ pl: 4, fontSize: '12px' }}>{meta.error}</FormHelperText>
      )}
    </Stack>
  );
}

VibrantSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
