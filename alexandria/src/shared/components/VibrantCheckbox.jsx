import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import { useField } from 'formik';
import { colors } from 'themes/vibrant';

// ==============================|| VIBRANT CHECKBOX (FORMIK) ||============================== //

export default function VibrantCheckbox({ name, label, disabled = false }) {
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <Stack>
      <FormControlLabel
        control={
          <Checkbox
            checked={field.value}
            onChange={(e) => helpers.setValue(e.target.checked)}
            onBlur={() => helpers.setTouched(true)}
            disabled={disabled}
            size="small"
            sx={{
              color: colors.outline,
              '&.Mui-checked': { color: colors.primary },
              '&:hover': { bgcolor: `${colors.primary}08` },
              transition: 'color 0.2s'
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

VibrantCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
