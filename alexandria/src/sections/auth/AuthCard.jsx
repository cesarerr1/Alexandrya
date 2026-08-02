import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { glassCard, colors } from 'themes/vibrant';

// ==============================|| AUTH CARD — VIBRANT ODYSSEY ||============================== //

export default function AuthCard({ children, ...other }) {
  return (
    <Box
      sx={{
        ...glassCard,
        borderRadius: '28px',
        maxWidth: { xs: 420, sm: 480 },
        width: '100%',
        p: { xs: 3, sm: 4, md: 5 },
        '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow }
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

AuthCard.propTypes = { children: PropTypes.any };
