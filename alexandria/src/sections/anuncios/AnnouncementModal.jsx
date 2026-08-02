import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// icons
import { WarningOutlined, InfoCircleOutlined, RightOutlined } from '@ant-design/icons';

// vibrant
import { glassCard, vibrantGradient, headlineMd, labelMd, labelXs, colors } from 'themes/vibrant';

// ==============================|| ANUNCIOS - MODAL CRÍTICO ||============================== //

export default function AnnouncementModal({ announcements, onAcknowledge }) {
  const [current, setCurrent] = useState(null);

  const modals = (announcements || []).filter((a) => a.canal === 'modal');

  useEffect(() => {
    if (modals.length > 0 && !current) {
      setCurrent(modals[0]);
    }
  }, [modals, current]);

  const handleAcknowledge = () => {
    if (onAcknowledge && current) {
      onAcknowledge(current.id);
    }
    const idx = modals.findIndex((a) => a.id === current?.id);
    const next = modals[idx + 1] || null;
    setCurrent(next);
  };

  if (!current) return null;

  const isCritical = current.tipo === 'critico';

  return (
    <Dialog
      open={Boolean(current)}
      maxWidth="sm"
      fullWidth
      disableEscapeKeyDown={current.requiere_acuse}
      PaperProps={{
        sx: {
          ...glassCard,
          borderRadius: '28px',
          p: 0,
          overflow: 'hidden',
          '&:hover': { transform: 'none', boxShadow: glassCard.boxShadow }
        }
      }}
    >
      {/* Header stripe */}
      <Box sx={{
        height: 6,
        borderRadius: 0,
        background: isCritical
          ? 'linear-gradient(90deg, #ba1a1a 0%, #ff6b6b 100%)'
          : `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondaryContainer} 100%)`
      }} />

      <Box sx={{ p: { xs: 3, sm: 4 } }}>
        {/* Icon + Title */}
        <Stack direction="row" sx={{ alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '14px',
            bgcolor: isCritical ? '#ba1a1a12' : `${colors.primary}12`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {isCritical
              ? <WarningOutlined style={{ fontSize: 22, color: '#ba1a1a' }} />
              : <InfoCircleOutlined style={{ fontSize: 22, color: colors.primary }} />
            }
          </Box>
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 0.25 }}>
              <Typography sx={{ ...headlineMd, fontSize: '20px', color: colors.onSurface }}>
                {current.titulo}
              </Typography>
            </Stack>
            <Chip
              label={isCritical ? 'Acción requerida' : 'Aviso'}
              size="small"
              sx={{
                ...labelXs,
                fontSize: '9px',
                bgcolor: isCritical ? '#ba1a1a12' : `${colors.primary}12`,
                color: isCritical ? '#ba1a1a' : colors.primary,
                fontWeight: 700,
                height: 20,
                '& .MuiChip-label': { px: 1 }
              }}
            />
          </Box>
        </Stack>

        {/* Body */}
        <Typography sx={{
          fontSize: '15px',
          color: colors.onSurfaceVariant,
          lineHeight: 1.6,
          whiteSpace: 'pre-line',
          mb: 3,
          pl: 0.5
        }}>
          {current.cuerpo}
        </Typography>

        {/* External CTA */}
        {current.cta_texto && current.cta_url && (
          <Button
            href={current.cta_url}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<RightOutlined style={{ fontSize: 10 }} />}
            sx={{
              ...labelMd,
              fontSize: '13px',
              color: colors.primary,
              textTransform: 'none',
              fontWeight: 700,
              mb: 2,
              '&:hover': { bgcolor: `${colors.primary}08` }
            }}
          >
            {current.cta_texto}
          </Button>
        )}

        {/* Action button */}
        <Button
          fullWidth
          onClick={handleAcknowledge}
          sx={{
            ...(current.requiere_acuse ? vibrantGradient : {}),
            bgcolor: current.requiere_acuse ? undefined : colors.surfaceContainerLow,
            color: current.requiere_acuse ? '#fff' : colors.onSurface,
            borderRadius: '14px',
            py: 1.5,
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'none',
            boxShadow: current.requiere_acuse ? '0 4px 20px rgba(99, 14, 212, 0.3)' : 'none',
            transition: 'all 0.2s ease',
            '&:hover': {
              ...(current.requiere_acuse ? vibrantGradient : {}),
              bgcolor: current.requiere_acuse ? undefined : colors.surfaceContainerHigh,
              boxShadow: current.requiere_acuse ? '0 8px 30px rgba(99, 14, 212, 0.4)' : 'none',
              transform: current.requiere_acuse ? 'translateY(-1px)' : 'none'
            }
          }}
        >
          {current.requiere_acuse ? 'Entendido' : 'Cerrar'}
        </Button>
      </Box>
    </Dialog>
  );
}

AnnouncementModal.propTypes = {
  announcements: PropTypes.array,
  onAcknowledge: PropTypes.func
};
