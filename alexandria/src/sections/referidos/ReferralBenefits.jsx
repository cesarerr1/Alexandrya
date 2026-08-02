// material-ui
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
import LockOutlined from '@ant-design/icons/LockOutlined';
import MinusCircleOutlined from '@ant-design/icons/MinusCircleOutlined';

// Beneficios configurables por posición (RN-042)
const BENEFITS = [
  { position: 1, label: 'Exámenes ilimitados', status: 'obtained' },
  { position: 2, label: 'Material premium', status: 'pending' },
  { position: 3, label: '30 días extra de suscripción', status: 'locked' }
];

const STATUS_CONFIG = {
  obtained: { icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />, color: 'success.main', text: 'Obtenido' },
  pending: { icon: <MinusCircleOutlined style={{ color: '#faad14' }} />, color: 'warning.main', text: 'Pendiente' },
  locked: { icon: <LockOutlined style={{ color: '#bfbfbf' }} />, color: 'text.disabled', text: 'Bloqueado' }
};

// ==============================|| REFERIDOS - BENEFITS ||============================== //

export default function ReferralBenefits() {
  return (
    <MainCard title="Beneficios por referido">
      <List disablePadding>
        {BENEFITS.map((benefit) => {
          const config = STATUS_CONFIG[benefit.status];
          return (
            <ListItem key={benefit.position} disableGutters sx={{ py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>{config.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        bgcolor: 'grey.100',
                        borderRadius: '50%',
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600
                      }}
                    >
                      {benefit.position}°
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {benefit.label}
                    </Typography>
                  </Stack>
                }
                secondary={config.text}
                slotProps={{ secondary: { sx: { color: config.color, ml: 4 } } }}
              />
            </ListItem>
          );
        })}
      </List>
    </MainCard>
  );
}
