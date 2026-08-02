import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CloseOutlined } from '@ant-design/icons';
import IconButton from 'components/@extended/IconButton';
import { headlineSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT DRAWER / OFFCANVAS ||============================== //

const radiusMap = {
  right: '24px 0 0 24px',
  left: '0 24px 24px 0',
  top: '0 0 24px 24px',
  bottom: '24px 24px 0 0'
};

export default function VibrantDrawer({ open, onClose, title, anchor = 'right', width = 400, children }) {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: width },
          maxWidth: '100vw',
          bgcolor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          borderRadius: radiusMap[anchor] || radiusMap.right,
          border: '2px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
        }
      }}
      slotProps={{
        backdrop: { sx: { bgcolor: 'rgba(25, 28, 30, 0.3)', backdropFilter: 'blur(4px)' } }
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2.5,
          borderBottom: `1px solid ${colors.outlineVariant}30`
        }}
      >
        <Typography sx={{ ...headlineSm, fontSize: '18px' }}>{title}</Typography>
        <IconButton
          onClick={onClose}
          variant="light"
          color="secondary"
          sx={{
            width: 36,
            height: 36,
            borderRadius: '10px',
            '&:hover': { bgcolor: `${colors.primary}08` }
          }}
        >
          <CloseOutlined style={{ fontSize: 14 }} />
        </IconButton>
      </Stack>

      {/* Content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
        {children}
      </Box>
    </Drawer>
  );
}

VibrantDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  width: PropTypes.number,
  children: PropTypes.node
};
