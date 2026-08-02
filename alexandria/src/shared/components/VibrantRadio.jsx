import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useField } from 'formik';
import { labelMd, colors } from 'themes/vibrant';

// ==============================|| VIBRANT RADIO GROUP (FORMIK) ||============================== //

export default function VibrantRadio({ name, label, options, row = false, disabled = false }) {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && Boolean(meta.error);

  return (
    <FormControl error={hasError} disabled={disabled}>
      {label && (
        <FormLabel sx={{ ...labelMd, fontSize: '13px', color: colors.onSurface, mb: 1, pl: 0.5 }}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        row={row}
        value={field.value}
        onChange={(e) => helpers.setValue(e.target.value)}
        onBlur={() => helpers.setTouched(true)}
      >
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={
              <Radio
                size="small"
                sx={{
                  color: colors.outline,
                  '&.Mui-checked': { color: colors.primary },
                  '&:hover': { bgcolor: `${colors.primary}08` },
                  transition: 'color 0.2s'
                }}
              />
            }
            label={opt.label}
            slotProps={{
              typography: {
                sx: { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '15px', color: colors.onSurface }
              }
            }}
          />
        ))}
      </RadioGroup>
      {hasError && (
        <FormHelperText error sx={{ pl: 0.5, fontSize: '12px' }}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}

VibrantRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  row: PropTypes.bool,
  disabled: PropTypes.bool
};
