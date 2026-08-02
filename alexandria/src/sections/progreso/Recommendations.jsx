// material-ui
import Button from '@mui/material/Button';
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
import BulbOutlined from '@ant-design/icons/BulbOutlined';
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| PROGRESO - RECOMMENDATIONS ||============================== //

// Datos de demostración basados en RF-050
const RECOMMENDATIONS = [
  {
    id: 'r1',
    text: 'Practica ecuaciones cuadráticas en Matemáticas — tu acierto es 35%.',
    action: 'Practicar',
    path: '/app/evaluaciones'
  },
  {
    id: 'r2',
    text: 'Revisa la Revolución Mexicana en Historia — 2 evaluaciones con menos de 50%.',
    action: 'Estudiar',
    path: '/app/catalogo/historia-mexico'
  },
  {
    id: 'r3',
    text: 'Realiza un simulador completo — llevas 3 semanas sin hacer uno.',
    action: 'Iniciar',
    path: '/app/evaluaciones'
  },
  {
    id: 'r4',
    text: 'Empieza Filosofía, Geografía o Historia Universal — aún no tienes progreso.',
    action: 'Explorar',
    path: '/app/catalogo'
  }
];

export default function Recommendations() {
  const navigate = useNavigate();

  return (
    <MainCard title="Recomendaciones">
      {RECOMMENDATIONS.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Completa más evaluaciones para recibir recomendaciones personalizadas.
          </Typography>
        </Stack>
      ) : (
        <List disablePadding>
          {RECOMMENDATIONS.map((rec, idx) => (
            <div key={rec.id}>
              <ListItem
                disableGutters
                sx={{ py: 1.5 }}
                secondaryAction={
                  <Button
                    size="small"
                    variant="text"
                    startIcon={<PlayCircleOutlined />}
                    onClick={() => navigate(rec.path)}
                    sx={{ textTransform: 'none' }}
                  >
                    {rec.action}
                  </Button>
                }
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <BulbOutlined style={{ color: '#faad14', fontSize: '1rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={rec.text}
                  slotProps={{ primary: { variant: 'body2' } }}
                  sx={{ mr: 8 }}
                />
              </ListItem>
              {idx < RECOMMENDATIONS.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      )}
    </MainCard>
  );
}
