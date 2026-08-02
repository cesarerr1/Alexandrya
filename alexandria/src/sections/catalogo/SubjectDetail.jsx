import PropTypes from 'prop-types';

// material-ui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import DownOutlined from '@ant-design/icons/DownOutlined';
import PlayCircleOutlined from '@ant-design/icons/PlayCircleOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| CATALOGO - SUBJECT DETAIL ||============================== //

// Datos de demostración de la jerarquía materia→módulo→tema
const DEMO_MODULES = [
  {
    id: 'mod-1',
    name: 'Álgebra',
    progress: 80,
    topics: [
      { id: 't-1', name: 'Ecuaciones lineales', questions: 25, completed: true },
      { id: 't-2', name: 'Ecuaciones cuadráticas', questions: 30, completed: false },
      { id: 't-3', name: 'Sistemas de ecuaciones', questions: 20, completed: true },
      { id: 't-4', name: 'Desigualdades', questions: 15, completed: false }
    ]
  },
  {
    id: 'mod-2',
    name: 'Geometría',
    progress: 45,
    topics: [
      { id: 't-5', name: 'Ángulos y triángulos', questions: 20, completed: true },
      { id: 't-6', name: 'Polígonos y circunferencias', questions: 25, completed: false },
      { id: 't-7', name: 'Áreas y volúmenes', questions: 30, completed: false }
    ]
  },
  {
    id: 'mod-3',
    name: 'Aritmética',
    progress: 100,
    topics: [
      { id: 't-8', name: 'Operaciones básicas', questions: 15, completed: true },
      { id: 't-9', name: 'Fracciones y decimales', questions: 20, completed: true },
      { id: 't-10', name: 'Razones y proporciones', questions: 18, completed: true }
    ]
  },
  {
    id: 'mod-4',
    name: 'Probabilidad y estadística',
    progress: 0,
    topics: [
      { id: 't-11', name: 'Medidas de tendencia central', questions: 15, completed: false },
      { id: 't-12', name: 'Probabilidad básica', questions: 20, completed: false }
    ]
  }
];

export default function SubjectDetail({ subject, modules }) {
  const navigate = useNavigate();
  const data = modules || DEMO_MODULES;

  const totalTopics = data.reduce((acc, m) => acc + m.topics.length, 0);
  const completedTopics = data.reduce((acc, m) => acc + m.topics.filter((t) => t.completed).length, 0);
  const totalQuestions = data.reduce((acc, m) => acc + m.topics.reduce((a, t) => a + t.questions, 0), 0);

  return (
    <Stack sx={{ gap: 3 }}>
      {/* Summary card */}
      <MainCard>
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
                fontSize: '2rem'
              }}
            >
              {subject?.emoji || '📐'}
            </Box>
            <Box>
              <Typography variant="h4">{subject?.name || 'Matemáticas'}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.length} módulos · {totalTopics} temas · {totalQuestions} preguntas
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={{ gap: 1.5 }}>
            <Chip
              label={`${completedTopics}/${totalTopics} temas completados`}
              color={completedTopics === totalTopics ? 'success' : 'primary'}
              variant="light"
            />
            <Button
              variant="contained"
              startIcon={<PlayCircleOutlined />}
              onClick={() => navigate('/app/evaluaciones')}
              sx={{ textTransform: 'none' }}
            >
              Practicar
            </Button>
          </Stack>
        </Stack>
      </MainCard>

      {/* Modules accordion */}
      {data.map((module) => (
        <Accordion
          key={module.id}
          elevation={0}
          sx={{
            border: '1px solid',
            borderColor: 'grey.A800',
            borderRadius: '8px !important',
            '&:before': { display: 'none' },
            '&.Mui-expanded': { margin: 0 }
          }}
        >
          <AccordionSummary expandIcon={<DownOutlined />} aria-controls={`${module.id}-content`} id={`${module.id}-header`}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2, gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {module.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {module.topics.length} temas
                </Typography>
              </Box>
              <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, minWidth: 150 }}>
                <LinearProgress
                  variant="determinate"
                  value={module.progress}
                  sx={{ height: 6, borderRadius: 3, flex: 1 }}
                  color={module.progress === 100 ? 'success' : 'primary'}
                  aria-label={`Progreso del módulo ${module.name}: ${module.progress}%`}
                />
                <Typography variant="caption" sx={{ minWidth: 35, textAlign: 'right' }}>
                  {module.progress}%
                </Typography>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Divider sx={{ mb: 1 }} />
            <List dense disablePadding>
              {module.topics.map((topic, idx) => (
                <ListItem
                  key={topic.id}
                  disableGutters
                  sx={{
                    py: 1,
                    borderBottom: idx < module.topics.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider'
                  }}
                  secondaryAction={
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {topic.questions} preguntas
                      </Typography>
                      {topic.completed ? (
                        <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '1rem' }} />
                      ) : (
                        <Button
                          size="small"
                          variant="text"
                          onClick={() => navigate('/app/evaluaciones')}
                          sx={{ textTransform: 'none', minWidth: 0 }}
                        >
                          Practicar
                        </Button>
                      )}
                    </Stack>
                  }
                >
                  <ListItemText
                    primary={topic.name}
                    slotProps={{ primary: { variant: 'body2', fontWeight: topic.completed ? 400 : 500 } }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

SubjectDetail.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    emoji: PropTypes.string
  }),
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      progress: PropTypes.number,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          questions: PropTypes.number,
          completed: PropTypes.bool
        })
      )
    })
  )
};
