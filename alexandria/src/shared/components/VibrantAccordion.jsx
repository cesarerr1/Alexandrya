import PropTypes from 'prop-types';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DownOutlined } from '@ant-design/icons';
import { glassCardSm, headlineSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT ACCORDION ||============================== //

export default function VibrantAccordion({ items, exclusive }) {
  return (
    <Stack sx={{ gap: 1.5 }}>
      {items.map((item, idx) => (
        <MuiAccordion
          key={item.title || idx}
          defaultExpanded={item.defaultOpen}
          disableGutters
          elevation={0}
          sx={{
            ...glassCardSm,
            borderRadius: '16px !important',
            overflow: 'hidden',
            '&:before': { display: 'none' },
            '&.Mui-expanded': {
              boxShadow: '0 10px 30px rgba(99, 14, 212, 0.06)'
            }
          }}
        >
          <AccordionSummary
            expandIcon={<DownOutlined style={{ fontSize: 12, color: colors.primary, transition: 'transform 0.2s' }} />}
            sx={{
              px: 3,
              py: 1.5,
              minHeight: 56,
              '& .MuiAccordionSummary-content': { gap: 1.5, alignItems: 'center', my: 0 },
              '&:hover': { bgcolor: `${colors.primary}04` }
            }}
          >
            {item.icon && (
              <item.icon style={{ fontSize: 18, color: colors.primary }} />
            )}
            <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px', fontWeight: 600, color: colors.onSurface }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            {typeof item.content === 'string' ? (
              <Typography sx={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: '15px', color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
                {item.content}
              </Typography>
            ) : (
              item.content
            )}
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Stack>
  );
}

VibrantAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.elementType,
      defaultOpen: PropTypes.bool
    })
  ).isRequired,
  exclusive: PropTypes.bool
};
