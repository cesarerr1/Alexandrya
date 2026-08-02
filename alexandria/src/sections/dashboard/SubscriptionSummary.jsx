import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// project imports
import MainCard from 'components/MainCard';

// assets
import CrownOutlined from '@ant-design/icons/CrownOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| DASHBOARD - SUBSCRIPTION SUMMARY ||============================== //

export default function SubscriptionSummary({ subscription }) {
  const navigate = useNavigate();

  // Datos de demostración
  const data = subscription || {
    plan: 'Plan Anual',
    status: 'activa',
    startDate: '15 de mayo de 2026',
    endDate: '15 de mayo de 2027',
    daysRemaining: 285,
    price: '$1,499 MXN'
  };

  const isActive = data.status === 'activa';
  const isExpiring = data.daysRemaining <= 30;

  return (
    <MainCard
      sx={{
        bgcolor: isActive ? 'primary.lighter' : 'warning.lighter',
        border: 'none'
      }}
    >
      <Stack sx={{ gap: 2 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <CrownOutlined style={{ fontSize: '1.25rem', color: 'inherit' }} />
            <Typography variant="h6">{data.plan}</Typography>
          </Stack>
          <Chip
            label={isActive ? 'Activa' : 'Vencida'}
            size="small"
            color={isActive ? 'success' : 'error'}
          />
        </Stack>

        <Divider />

        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <CalendarOutlined style={{ color: 'inherit' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Vigente hasta el {data.endDate}
          </Typography>
        </Stack>

        {isExpiring && isActive && (
          <Typography variant="body2" sx={{ color: 'warning.main', fontWeight: 500 }}>
            Tu suscripción vence en {data.daysRemaining} días
          </Typography>
        )}

        {!isExpiring && isActive && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.daysRemaining} días restantes
          </Typography>
        )}

        <Button
          variant={isActive ? 'text' : 'contained'}
          size="small"
          onClick={() => navigate('/app/suscripcion')}
          sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
        >
          {isActive ? 'Ver detalles de suscripción' : 'Renovar suscripción'}
        </Button>
      </Stack>
    </MainCard>
  );
}

SubscriptionSummary.propTypes = {
  subscription: PropTypes.shape({
    plan: PropTypes.string,
    status: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    daysRemaining: PropTypes.number,
    price: PropTypes.string
  })
};
