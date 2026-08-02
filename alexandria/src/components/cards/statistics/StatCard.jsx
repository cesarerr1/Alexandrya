import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| STAT CARD - ALEXANDRYA ||============================== //

export default function StatCard({ title, count, subtitle, icon, color = 'primary', sx = {} }) {
  return (
    <MainCard contentSX={{ p: 2.25 }} sx={sx}>
      <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            {title}
          </Typography>
          <Typography variant="h4">{count}</Typography>
          {subtitle && (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          )}
        </Stack>
        {icon && (
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${color}.lighter`,
              color: `${color}.main`,
              fontSize: '1.25rem'
            }}
          >
            {icon}
          </Box>
        )}
      </Stack>
    </MainCard>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  sx: PropTypes.object
};
