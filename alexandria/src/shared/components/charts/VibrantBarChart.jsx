import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import { glassCardSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT BAR CHART ||============================== //

const defaultColors = [colors.primary, colors.secondary, colors.tertiary, colors.primaryContainer, colors.secondaryContainer];

export default function VibrantBarChart({
  series,
  xAxis,
  yAxis,
  width,
  height = 350,
  palette = defaultColors,
  layout = 'vertical',
  borderRadius = 6,
  glass = true,
  sx,
  ...rest
}) {
  const chart = (
    <BarChart
      series={series.map((s) => ({ ...s, color: s.color || undefined }))}
      xAxis={xAxis}
      yAxis={yAxis}
      width={width}
      height={height}
      colors={palette}
      layout={layout}
      borderRadius={borderRadius}
      slotProps={{
        legend: {
          labelStyle: { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: 12 }
        }
      }}
      sx={{
        '& .MuiChartsAxis-tickLabel': { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '12px', fill: colors.onSurfaceVariant },
        '& .MuiChartsAxis-line': { stroke: colors.outlineVariant },
        '& .MuiChartsGrid-line': { stroke: `${colors.outlineVariant}40` },
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

VibrantBarChart.propTypes = {
  series: PropTypes.array.isRequired,
  xAxis: PropTypes.array,
  yAxis: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.array,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  borderRadius: PropTypes.number,
  glass: PropTypes.bool,
  sx: PropTypes.object
};
