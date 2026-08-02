import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

// project imports
import MainCard from 'components/MainCard';

// assets
import WarningOutlined from '@ant-design/icons/WarningOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';

// ==============================|| DASHBOARD - WEAK/STRONG AREAS ||============================== //

export default function WeakAreas({ areas }) {
  // Datos de demostración
  const data = areas || {
    weak: [
      { theme: 'Ecuaciones cuadráticas', subject: 'Matemáticas', accuracy: 35 },
      { theme: 'Revolución Mexicana', subject: 'Historia de México', accuracy: 40 },
      { theme: 'Leyes de Newton', subject: 'Física', accuracy: 42 }
    ],
    strong: [
      { theme: 'Comprensión lectora', subject: 'Competencia lectora', accuracy: 92 },
      { theme: 'Tabla periódica', subject: 'Química', accuracy: 88 }
    ]
  };

  return (
    <MainCard title="Áreas de oportunidad">
      {data.weak.length === 0 && data.strong.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Completa más evaluaciones para identificar tus áreas fuertes y de oportunidad.
          </Typography>
        </Stack>
      ) : (
        <Stack sx={{ gap: 2 }}>
          {data.weak.length > 0 && (
            <>
              <Typography variant="subtitle2" sx={{ color: 'error.main' }}>
                Temas por reforzar
              </Typography>
              <List dense disablePadding>
                {data.weak.map((area) => (
                  <ListItem key={area.theme} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <WarningOutlined style={{ color: '#ff4d4f', fontSize: '0.875rem' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={area.theme}
                      secondary={area.subject}
                      slotProps={{
                        primary: { variant: 'body2', fontWeight: 500 },
                        secondary: { variant: 'caption' }
                      }}
                    />
                    <Chip label={`${area.accuracy}%`} size="small" color="error" variant="light" />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {data.strong.length > 0 && (
            <>
              <Typography variant="subtitle2" sx={{ color: 'success.main', mt: 1 }}>
                Temas dominados
              </Typography>
              <List dense disablePadding>
                {data.strong.map((area) => (
                  <ListItem key={area.theme} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '0.875rem' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={area.theme}
                      secondary={area.subject}
                      slotProps={{
                        primary: { variant: 'body2', fontWeight: 500 },
                        secondary: { variant: 'caption' }
                      }}
                    />
                    <Chip label={`${area.accuracy}%`} size="small" color="success" variant="light" />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Stack>
      )}
    </MainCard>
  );
}

WeakAreas.propTypes = {
  areas: PropTypes.shape({
    weak: PropTypes.arrayOf(
      PropTypes.shape({
        theme: PropTypes.string,
        subject: PropTypes.string,
        accuracy: PropTypes.number
      })
    ),
    strong: PropTypes.arrayOf(
      PropTypes.shape({
        theme: PropTypes.string,
        subject: PropTypes.string,
        accuracy: PropTypes.number
      })
    )
  })
};
