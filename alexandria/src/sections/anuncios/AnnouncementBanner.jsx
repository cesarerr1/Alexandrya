import { useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// icons
import {
  InfoCircleOutlined,
  ToolOutlined,
  GiftOutlined,
  WarningOutlined,
  CloseOutlined
} from '@ant-design/icons';

// vibrant
import { colors, labelMd, glassCardSm } from 'themes/vibrant';

// ==============================|| ANUNCIOS - BANNER SUTIL ||============================== //

const TYPE_CONFIG = {
  informativo: {
    Icon: InfoCircleOutlined,
    bg: `${colors.primary}08`,
    border: `${colors.primary}18`,
    color: colors.primary,
    iconBg: `${colors.primary}15`
  },
  mantenimiento: {
    Icon: ToolOutlined,
    bg: '#f59e0b08',
    border: '#f59e0b18',
    color: '#b45309',
    iconBg: '#f59e0b15'
  },
  promocion: {
    Icon: GiftOutlined,
    bg: `${colors.secondary}08`,
    border: `${colors.secondary}18`,
    color: colors.secondary,
    iconBg: `${colors.secondary}15`
  },
  critico: {
    Icon: WarningOutlined,
    bg: '#ba1a1a08',
    border: '#ba1a1a18',
    color: '#ba1a1a',
    iconBg: '#ba1a1a15'
  }
};

export default function AnnouncementBanner({ announcements }) {
  const [dismissed, setDismissed] = useState([]);

  const banners = (announcements || []).filter((a) => a.canal === 'banner' && !dismissed.includes(a.id));

  if (banners.length === 0) return null;

  return (
    <Stack sx={{ gap: 1.5 }}>
      {banners.map((ann) => {
        const cfg = TYPE_CONFIG[ann.tipo] || TYPE_CONFIG.informativo;
        return (
          <Collapse key={ann.id} in>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2.5,
                py: 1.5,
                borderRadius: '16px',
                bgcolor: cfg.bg,
                border: `1px solid ${cfg.border}`,
                transition: 'all 0.2s ease'
              }}
            >
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                bgcolor: cfg.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <cfg.Icon style={{ fontSize: 16, color: cfg.color }} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: colors.onSurface, lineHeight: 1.3 }}>
                  {ann.titulo}
                </Typography>
                <Typography sx={{ fontSize: '13px', color: colors.onSurfaceVariant, lineHeight: 1.4 }}>
                  {ann.cuerpo}
                </Typography>
              </Box>
              {ann.cta_texto && ann.cta_url && (
                <Button
                  href={ann.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    ...labelMd,
                    fontSize: '12px',
                    color: cfg.color,
                    textTransform: 'none',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    '&:hover': { bgcolor: cfg.iconBg }
                  }}
                >
                  {ann.cta_texto}
                </Button>
              )}
              <Box
                component="button"
                onClick={() => setDismissed((prev) => [...prev, ann.id])}
                sx={{
                  border: 'none',
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                  p: 0.5,
                  borderRadius: '8px',
                  color: colors.outline,
                  display: 'flex',
                  flexShrink: 0,
                  '&:hover': { bgcolor: cfg.iconBg, color: cfg.color }
                }}
              >
                <CloseOutlined style={{ fontSize: 12 }} />
              </Box>
            </Box>
          </Collapse>
        );
      })}
    </Stack>
  );
}

AnnouncementBanner.propTypes = {
  announcements: PropTypes.array
};
