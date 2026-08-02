import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CrownOutlined from '@ant-design/icons/CrownOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import SyncOutlined from '@ant-design/icons/SyncOutlined';

// Features del plan según RF-002
const PLAN_FEATURES = [
  'Acceso completo a las 11 materias',
  'Simulacros ilimitados',
  'Evaluaciones por tema, módulo y materia',
  'Dashboard de progreso con recomendaciones',
  'Material de estudio (videos, guías, recursos)',
  'Programa de referidos',
  'Soporte por correo'
];

// ==============================|| SUSCRIPCIÓN - PLAN DETAILS ||============================== //

export default function PlanDetails({ subscription }) {
  // Datos de demostración
  const data = subscription || {
    plan: 'Plan Anual',
    price: '$1,499 MXN',
    status: 'activa',
    startDate: '15 de mayo de 2026',
    endDate: '15 de mayo de 2027',
    daysRemaining: 285,
    autoRenewal: false,
    paymentMethod: 'Visa ****4532'
  };

  const isActive = data.status === 'activa';
  const isExpiring = data.daysRemaining <= 30;

  return (
    <MainCard>
      <Stack sx={{ gap: 3 }}>
        {/* Header */}
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2 }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.lighter',
                color: 'primary.main',
                fontSize: '1.5rem'
              }}
            >
              <CrownOutlined />
            </Box>
            <Box>
              <Typography variant="h4">{data.plan}</Typography>
              <Typography variant="h5" sx={{ color: 'primary.main' }}>
                {data.price}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={{ gap: 1 }}>
            <Chip
              label={isActive ? 'Activa' : 'Vencida'}
              color={isActive ? 'success' : 'error'}
            />
            {isExpiring && isActive && (
              <Chip label="Por vencer" color="warning" variant="light" />
            )}
          </Stack>
        </Stack>

        <Divider />

        {/* Dates */}
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 3 }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <CalendarOutlined />
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Fecha de inicio
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {data.startDate}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <CalendarOutlined />
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Fecha de vencimiento
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {data.endDate}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <SyncOutlined />
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Renovación automática
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {data.autoRenewal ? 'Activada' : 'Desactivada'}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {isActive && (
          <Box sx={{ bgcolor: 'primary.lighter', borderRadius: 1.5, p: 2 }}>
            <Typography variant="body2">
              <strong>{data.daysRemaining} días restantes</strong> de tu suscripción.
              {isExpiring && ' Renueva ahora para no perder tu progreso.'}
            </Typography>
          </Box>
        )}

        <Divider />

        {/* Features */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Tu plan incluye
        </Typography>
        <List dense disablePadding>
          {PLAN_FEATURES.map((feature) => (
            <ListItem key={feature} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '0.875rem' }} />
              </ListItemIcon>
              <ListItemText primary={feature} slotProps={{ primary: { variant: 'body2' } }} />
            </ListItem>
          ))}
        </List>

        {/* Actions */}
        {!isActive && (
          <Button variant="contained" size="large" sx={{ alignSelf: 'flex-start', textTransform: 'none' }}>
            Renovar suscripción — {data.price}
          </Button>
        )}
      </Stack>
    </MainCard>
  );
}

PlanDetails.propTypes = {
  subscription: PropTypes.object
};
