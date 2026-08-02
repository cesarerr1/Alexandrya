import PropTypes from 'prop-types';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import { useField } from 'formik';
import { labelMd, colors } from 'themes/vibrant';

// ==============================|| VIBRANT DATE PICKER (FORMIK) ||============================== //

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    bgcolor: colors.surfaceContainerLow,
    fontFamily: 'Be Vietnam Pro, sans-serif',
    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.outlineVariant },
    '&.Mui-focused': {
      bgcolor: '#fff',
      boxShadow: `0 0 0 4px ${colors.primary}15`,
      '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary, borderWidth: 2 }
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: '#ba1a1a' }
  }
};

export default function VibrantDatePicker({
  name,
  label,
  placeholder = 'DD/MM/AAAA',
  minDate,
  maxDate,
  disabled = false,
  format = 'DD/MM/YYYY'
}) {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <Stack sx={{ gap: 0.75 }}>
        {label && (
          <InputLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface, pl: 0.5 }}>
            {label}
          </InputLabel>
        )}
        <DatePicker
          value={field.value ? dayjs(field.value) : null}
          onChange={(val) => helpers.setValue(val ? val.toISOString() : '')}
          format={format}
          minDate={minDate ? dayjs(minDate) : undefined}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
          disabled={disabled}
          slotProps={{
            textField: {
              fullWidth: true,
              placeholder,
              error: hasError,
              onBlur: () => helpers.setTouched(true),
              sx: inputSx
            }
          }}
        />
        {hasError && (
          <FormHelperText error sx={{ pl: 0.5, fontSize: '12px' }}>{meta.error}</FormHelperText>
        )}
      </Stack>
    </LocalizationProvider>
  );
}

VibrantDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string
};
