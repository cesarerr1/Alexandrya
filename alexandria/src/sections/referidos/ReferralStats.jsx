// material-ui
import Grid from '@mui/material/Grid';

// project imports
import StatCard from 'components/cards/statistics/StatCard';

// assets
import UserOutlined from '@ant-design/icons/UserOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import GiftOutlined from '@ant-design/icons/GiftOutlined';

// ==============================|| REFERIDOS - STATS ||============================== //

export default function ReferralStats() {
  // TODO: reemplazar con datos de SWR
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <StatCard
          title="Referidos activos"
          count="1 / 3"
          subtitle="efectivos"
          icon={<UserOutlined />}
          color="success"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <StatCard
          title="Pendientes"
          count="1"
          subtitle="registrados sin pago"
          icon={<ClockCircleOutlined />}
          color="warning"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <StatCard
          title="Disponibles"
          count="2"
          subtitle="invitaciones restantes"
          icon={<GiftOutlined />}
          color="info"
        />
      </Grid>
    </Grid>
  );
}
