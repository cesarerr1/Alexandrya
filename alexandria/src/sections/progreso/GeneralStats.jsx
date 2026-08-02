// material-ui
import Grid from '@mui/material/Grid';

// project imports
import StatCard from 'components/cards/statistics/StatCard';

// assets
import TrophyOutlined from '@ant-design/icons/TrophyOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import FireOutlined from '@ant-design/icons/FireOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import RiseOutlined from '@ant-design/icons/RiseOutlined';

// ==============================|| PROGRESO - GENERAL STATS ||============================== //

export default function GeneralStats() {
  // TODO: reemplazar con datos de SWR
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Avance general"
          count="45%"
          subtitle="del contenido"
          icon={<RiseOutlined />}
          color="primary"
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Horas de estudio"
          count="48"
          subtitle="acumuladas"
          icon={<ClockCircleOutlined />}
          color="info"
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Evaluaciones"
          count="45"
          subtitle="completadas"
          icon={<FormOutlined />}
          color="success"
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Promedio"
          count="73%"
          subtitle="de aciertos"
          icon={<TrophyOutlined />}
          color="warning"
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Racha"
          count="7"
          subtitle="días seguidos"
          icon={<FireOutlined />}
          color="error"
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
        <StatCard
          title="Materias"
          count="6 / 11"
          subtitle="con actividad"
          icon={<BookOutlined />}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
}
