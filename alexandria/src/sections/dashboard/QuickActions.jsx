// material-ui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project imports
import MainCard from 'components/MainCard';

// assets
import FormOutlined from '@ant-design/icons/FormOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| DASHBOARD - QUICK ACTIONS ||============================== //

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      label: 'Iniciar simulacro',
      icon: <FormOutlined />,
      variant: 'contained',
      path: '/app/evaluaciones'
    },
    {
      label: 'Explorar catálogo',
      icon: <BookOutlined />,
      variant: 'outlined',
      path: '/app/catalogo'
    },
    {
      label: 'Ver mi progreso',
      icon: <BarChartOutlined />,
      variant: 'outlined',
      path: '/app/progreso'
    },
    {
      label: 'Material de estudio',
      icon: <PlayCircleOutlined />,
      variant: 'outlined',
      path: '/app/material'
    }
  ];

  return (
    <MainCard title="Acciones rápidas">
      <Stack sx={{ gap: 1.5 }}>
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            fullWidth
            startIcon={action.icon}
            onClick={() => navigate(action.path)}
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </MainCard>
  );
}
