import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// assets
import FormOutlined from '@ant-design/icons/FormOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

// Tipos de evaluación según RF-040
const EXAM_TYPES = [
  {
    id: 'tema',
    title: 'Por tema',
    description: 'Practica un tema específico. Sin límite de tiempo.',
    icon: <FileTextOutlined />,
    questions: '10-20',
    timed: false,
    color: 'info'
  },
  {
    id: 'modulo',
    title: 'Por módulo',
    description: 'Evalúa un módulo completo de una materia.',
    icon: <BookOutlined />,
    questions: '20-30',
    timed: false,
    color: 'success'
  },
  {
    id: 'materia',
    title: 'Por materia',
    description: 'Examen integral de una materia.',
    icon: <AppstoreOutlined />,
    questions: '30-50',
    timed: false,
    color: 'warning'
  },
  {
    id: 'general',
    title: 'General',
    description: 'Evaluación de todas las materias sin tiempo.',
    icon: <FormOutlined />,
    questions: '60-80',
    timed: false,
    color: 'primary'
  },
  {
    id: 'simulador',
    title: 'Simulador',
    description: 'Simula el examen real. 120 preguntas en 3 horas.',
    icon: <ClockCircleOutlined />,
    questions: '120',
    timed: true,
    color: 'error'
  }
];

// ==============================|| EVALUACIONES - EXAM TYPE SELECTOR ||============================== //

export default function ExamTypeSelector({ onSelect }) {
  return (
    <Grid container spacing={2.5}>
      {EXAM_TYPES.map((type) => (
        <Grid key={type.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              border: '1px solid',
              borderColor: 'grey.A800',
              borderRadius: 2,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: `${type.color}.main`,
                boxShadow: 2
              }
            }}
          >
            <CardActionArea
              onClick={() => onSelect(type)}
              sx={{ height: '100%' }}
              aria-label={`Iniciar evaluación ${type.title}`}
            >
              <CardContent sx={{ p: 2.5, height: '100%' }}>
                <Stack sx={{ gap: 2, height: '100%' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: `${type.color}.lighter`,
                      color: `${type.color}.main`,
                      fontSize: '1.25rem'
                    }}
                  >
                    {type.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {type.description}
                    </Typography>
                  </Box>
                  <Stack direction="row" sx={{ gap: 1, mt: 'auto' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {type.questions} preguntas
                    </Typography>
                    {type.timed && (
                      <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 500 }}>
                        · Con tiempo
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

ExamTypeSelector.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export { EXAM_TYPES };
