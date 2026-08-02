import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { colors } from 'themes/vibrant';

// ==============================|| VIBRANT TABS ||============================== //

export default function VibrantTabs({ tabs, variant = 'standard', defaultTab = 0 }) {
  const [value, setValue] = useState(defaultTab);

  const isPills = variant === 'pills';

  return (
    <Box>
      <MuiTabs
        value={value}
        onChange={(_, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: 44,
          mb: 3,
          ...(isPills
            ? {
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTabs-flexContainer': { gap: 1 }
              }
            : {
                borderBottom: `1px solid ${colors.outlineVariant}40`,
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: '3px 3px 0 0',
                  background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondaryContainer} 100%)`
                }
              })
        }}
      >
        {tabs.map((tab, idx) => (
          <MuiTab
            key={tab.label}
            label={tab.label}
            icon={tab.icon ? <tab.icon style={{ fontSize: 16 }} /> : undefined}
            iconPosition="start"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'none',
              minHeight: 44,
              color: colors.onSurfaceVariant,
              transition: 'all 0.2s',
              ...(isPills
                ? {
                    borderRadius: '12px',
                    px: 2.5,
                    py: 1,
                    minWidth: 'auto',
                    bgcolor: value === idx ? `${colors.primary}12` : 'transparent',
                    color: value === idx ? colors.primary : colors.onSurfaceVariant,
                    border: `1px solid ${value === idx ? `${colors.primary}25` : 'transparent'}`,
                    '&:hover': { bgcolor: `${colors.primary}08` }
                  }
                : {
                    '&.Mui-selected': { color: colors.primary },
                    '&:hover': { bgcolor: `${colors.primary}05` }
                  })
            }}
          />
        ))}
      </MuiTabs>
      <Box>{tabs[value]?.content}</Box>
    </Box>
  );
}

VibrantTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  variant: PropTypes.oneOf(['standard', 'pills']),
  defaultTab: PropTypes.number
};
