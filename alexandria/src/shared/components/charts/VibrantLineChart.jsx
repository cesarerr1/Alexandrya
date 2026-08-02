import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { glassCardSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT LINE CHART ||============================== //

const defaultColors = [colors.primary, colors.secondary, colors.tertiary, colors.primaryContainer];

export default function VibrantLineChart({
  series,
  xAxis,
  yAxis,
  width,
  height = 350,
  palette = defaultColors,
  area = false,
  glass = true,
  sx,
  ...rest
}) {
  const chart = (
    <LineChart
      series={series.map((s) => ({ ...s, area: s.area ?? area }))}
      xAxis={xAxis}
      yAxis={yAxis}
      width={width}
      height={height}
      colors={palette}
      slotProps={{
        legend: {
          labelStyle: { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: 12 }
        }
      }}
      sx={{
        '& .MuiChartsAxis-tickLabel': { fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '12px', fill: colors.onSurfaceVariant },
        '& .MuiChartsAxis-line': { stroke: colors.outlineVariant },
        '& .MuiChartsGrid-line': { stroke: `${colors.outlineVariant}40` },
        '& .MuiAreaElement-root': { opacity: 0.15 },
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

VibrantLineChart.propTypes = {
  series: PropTypes.array.isRequired,
  xAxis: PropTypes.array,
  yAxis: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.array,
  area: PropTypes.bool,
  glass: PropTypes.bool,
  sx: PropTypes.object
};
