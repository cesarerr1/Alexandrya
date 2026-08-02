import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import { useField } from 'formik';
import { labelMd, colors } from 'themes/vibrant';

// ==============================|| VIBRANT TEXT FIELD (FORMIK) ||============================== //

const inputSx = {
  borderRadius: '14px',
  bgcolor: colors.surfaceContainerLow,
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.outlineVariant },
  '&.Mui-focused': {
    bgcolor: '#fff',
    boxShadow: `0 0 0 4px ${colors.primary}15`,
    '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.primary, borderWidth: 2 }
  },
  '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: '#ba1a1a' }
};

export default function VibrantTextField({
  name,
  label,
  placeholder,
  type = 'text',
  startIcon,
  endIcon,
  multiline = false,
  rows,
  disabled = false,
  autoComplete,
  fullWidth = true,
  helperText,
  ...rest
}) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <Stack sx={{ gap: 0.75 }}>
      {label && (
        <InputLabel
          htmlFor={`vibrant-${name}`}
          sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface, pl: 0.5 }}
        >
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        id={`vibrant-${name}`}
        type={type}
        placeholder={placeholder}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        autoComplete={autoComplete}
        error={hasError}
        sx={inputSx}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start">
              <Box sx={{ color: colors.outline, display: 'flex' }}>{startIcon}</Box>
            </InputAdornment>
          ) : undefined
        }
        endAdornment={
          endIcon ? (
            <InputAdornment position="end">
              <Box sx={{ color: colors.outline, display: 'flex' }}>{endIcon}</Box>
            </InputAdornment>
          ) : undefined
        }
        {...field}
        {...rest}
      />
      {hasError && (
        <FormHelperText error sx={{ pl: 0.5, fontSize: '12px' }}>
          {meta.error}
        </FormHelperText>
      )}
      {helperText && !hasError && (
        <FormHelperText sx={{ pl: 0.5, fontSize: '12px', color: colors.outline }}>
          {helperText}
        </FormHelperText>
      )}
    </Stack>
  );
}

VibrantTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string
};
