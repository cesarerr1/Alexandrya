import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { useField } from 'formik';
import { labelMd, colors } from 'themes/vibrant';

// ==============================|| PRESETS ||============================== //

const PRESETS = {
  phone: { format: '## #### ####', mask: '_', placeholder: '55 1234 5678', type: 'pattern' },
  card: { format: '#### #### #### ####', mask: ' ', placeholder: '0000 0000 0000 0000', type: 'pattern' },
  expiry: { format: '##/##', mask: '_', placeholder: 'MM/YY', type: 'pattern' },
  curp: { format: '##################', mask: '_', placeholder: 'XXXX000000XXXXXX00', type: 'pattern' },
  currency: {
    thousandSeparator: ',',
    decimalSeparator: '.',
    decimalScale: 2,
    fixedDecimalScale: true,
    prefix: '$',
    suffix: ' MXN',
    placeholder: '$0.00 MXN',
    type: 'numeric'
  }
};

// ==============================|| INPUT SX ||============================== //

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

// ==============================|| ADAPTER COMPONENTS ||============================== //

const PatternAdapter = forwardRef(function PatternAdapter(props, ref) {
  const { onChange, format, mask, ...other } = props;
  return (
    <PatternFormat
      {...other}
      getInputRef={ref}
      format={format}
      mask={mask}
      onValueChange={(values) => onChange({ target: { name: props.name, value: values.value } })}
    />
  );
});

const NumericAdapter = forwardRef(function NumericAdapter(props, ref) {
  const { onChange, thousandSeparator, decimalSeparator, decimalScale, fixedDecimalScale, prefix, suffix, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      prefix={prefix}
      suffix={suffix}
      onValueChange={(values) => onChange({ target: { name: props.name, value: values.floatValue ?? '' } })}
    />
  );
});

// ==============================|| VIBRANT MASKED INPUT (FORMIK) ||============================== //

export default function VibrantMaskedInput({
  name,
  label,
  preset,
  format: customFormat,
  mask: customMask,
  startIcon,
  endIcon,
  disabled = false,
  ...rest
}) {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  const config = preset ? PRESETS[preset] : { format: customFormat, mask: customMask, type: customFormat ? 'pattern' : 'numeric' };
  const isPattern = config.type === 'pattern';

  const inputComponent = isPattern ? PatternAdapter : NumericAdapter;
  const inputProps = isPattern
    ? { format: config.format, mask: config.mask }
    : {
        thousandSeparator: config.thousandSeparator,
        decimalSeparator: config.decimalSeparator,
        decimalScale: config.decimalScale,
        fixedDecimalScale: config.fixedDecimalScale,
        prefix: config.prefix,
        suffix: config.suffix
      };

  return (
    <Stack sx={{ gap: 0.75 }}>
      {label && (
        <InputLabel htmlFor={`masked-${name}`} sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface, pl: 0.5 }}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        id={`masked-${name}`}
        name={name}
        value={field.value}
        onChange={(e) => helpers.setValue(e.target.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={config.placeholder || rest.placeholder}
        disabled={disabled}
        error={hasError}
        fullWidth
        sx={inputSx}
        slots={{ input: inputComponent }}
        slotProps={{ input: inputProps }}
        startAdornment={startIcon ? <InputAdornment position="start"><Box sx={{ color: colors.outline, display: 'flex' }}>{startIcon}</Box></InputAdornment> : undefined}
        endAdornment={endIcon ? <InputAdornment position="end"><Box sx={{ color: colors.outline, display: 'flex' }}>{endIcon}</Box></InputAdornment> : undefined}
        {...rest}
      />
      {hasError && (
        <FormHelperText error sx={{ pl: 0.5, fontSize: '12px' }}>{meta.error}</FormHelperText>
      )}
    </Stack>
  );
}

VibrantMaskedInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  preset: PropTypes.oneOf(['phone', 'card', 'expiry', 'curp', 'currency']),
  format: PropTypes.string,
  mask: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool
};
