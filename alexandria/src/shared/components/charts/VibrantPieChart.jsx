import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { glassCardSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT PIE CHART ||============================== //

const defaultColors = [colors.primary, colors.secondary, colors.tertiary, colors.primaryContainer, colors.secondaryContainer, colors.tertiaryContainer];

export default function VibrantPieChart({
  series,
  width,
  height = 300,
  palette = defaultColors,
  innerRadius = 0,
  paddingAngle = 2,
  cornerRadius = 4,
  glass = true,
  sx,
  ...rest
}) {
  const enhancedSeries = series.map((s) => ({
    ...s,
    innerRadius: s.innerRadius ?? innerRadius,
    paddingAngle: s.paddingAngle ?? paddingAngle,
    cornerRadius: s.cornerRadius ?? cornerRadius,
    cx: s.cx,
    cy: s.cy
  }));

  const chart = (
    <PieChart
      series={enhancedSeries}
      width={width}
      height={height}
      colors={palette}
      slotProps={{
        legend: {
          labelStyle: { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: 12, fill: colors.onSurface },
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' }
        }
      }}
      sx={{
        '& .MuiChartsLegend-root': { mt: 1 },
        ...sx
      }}
      {...rest}
    />
  );

  if (!glass) return chart;

  return (
    <Box sx={{ ...glassCardSm, p: 2, '&:hover': { transform: 'none', boxShadow: glassCardSm.boxShadow } }}>
      {chart}
    </Box>
  );
}

VibrantPieChart.propTypes = {
  series: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.array,
  innerRadius: PropTypes.number,
  paddingAngle: PropTypes.number,
  cornerRadius: PropTypes.number,
  glass: PropTypes.bool,
  sx: PropTypes.object
};
