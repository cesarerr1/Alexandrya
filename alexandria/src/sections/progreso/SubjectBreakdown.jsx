// material-ui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// Datos de demostración
const SUBJECTS_PROGRESS = [
  { name: 'Matemáticas', emoji: '📐', progress: 72, exams: 8, average: 79, topics: 35, completed: 25 },
  { name: 'Español y Literatura', emoji: '📖', progress: 58, exams: 5, average: 82, topics: 20, completed: 12 },
  { name: 'Biología', emoji: '🧬', progress: 45, exams: 4, average: 71, topics: 30, completed: 13 },
  { name: 'Historia de México', emoji: '🏛️', progress: 38, exams: 3, average: 68, topics: 22, completed: 8 },
  { name: 'Física', emoji: '⚡', progress: 30, exams: 2, average: 75, topics: 25, completed: 8 },
  { name: 'Química', emoji: '🧪', progress: 25, exams: 2, average: 65, topics: 28, completed: 7 },
  { name: 'Competencia lectora', emoji: '📖', progress: 20, exams: 1, average: 88, topics: 18, completed: 4 },
  { name: 'Competencias escritas', emoji: '✍️', progress: 15, exams: 1, average: 70, topics: 15, completed: 2 },
  { name: 'Filosofía', emoji: '🤔', progress: 0, exams: 0, average: 0, topics: 12, completed: 0 },
  { name: 'Geografía', emoji: '🌍', progress: 0, exams: 0, average: 0, topics: 18, completed: 0 },
  { name: 'Historia Universal', emoji: '🌐', progress: 0, exams: 0, average: 0, topics: 20, completed: 0 }
];

const getColor = (value) => {
  if (value >= 70) return 'success';
  if (value >= 40) return 'warning';
  return 'error';
};

// ==============================|| PROGRESO - SUBJECT BREAKDOWN ||============================== //

export default function SubjectBreakdown() {
  return (
    <MainCard title="Progreso por materia">
      <Grid container spacing={2}>
        {SUBJECTS_PROGRESS.map((subject) => (
          <Grid key={subject.name} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1.5,
                border: '1px solid',
                borderColor: 'grey.A800',
                '&:hover': { borderColor: 'primary.light' },
                transition: 'border-color 0.2s'
              }}
            >
              <Stack sx={{ gap: 1.5 }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                      {subject.emoji}
                    </Typography>
                    <Typography variant="subtitle2">{subject.name}</Typography>
                  </Stack>
                  <Chip
                    label={`${subject.progress}%`}
                    size="small"
                    color={subject.progress > 0 ? getColor(subject.progress) : 'default'}
                    variant="light"
                  />
                </Stack>

                <LinearProgress
                  variant="determinate"
                  value={subject.progress}
                  color={subject.progress > 0 ? getColor(subject.progress) : 'inherit'}
                  sx={{ height: 6, borderRadius: 3 }}
                  aria-label={`Progreso en ${subject.name}: ${subject.progress}%`}
                />

                <Stack direction="row" sx={{ gap: 2 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {subject.completed}/{subject.topics} temas
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {subject.exams} evaluaciones
                  </Typography>
                  {subject.average > 0 && (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Prom. {subject.average}%
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
}
