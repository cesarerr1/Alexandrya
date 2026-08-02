import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - SUBJECT PROGRESS ||============================== //

function SubjectRow({ name, emoji, progress, exams, average }) {
  const getColor = (value) => {
    if (value >= 70) return 'success';
    if (value >= 40) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 0.75 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
            {emoji}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {name}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5 }}>
          {exams > 0 && (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {exams} {exams === 1 ? 'examen' : 'exámenes'} · Prom. {average}
            </Typography>
          )}
          <Chip
            label={`${progress}%`}
            size="small"
            color={getColor(progress)}
            variant="light"
            sx={{ minWidth: 50 }}
          />
        </Stack>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={getColor(progress)}
        sx={{ height: 8, borderRadius: 4 }}
        aria-label={`Progreso en ${name}: ${progress}%`}
      />
    </Box>
  );
}

SubjectRow.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  exams: PropTypes.number,
  average: PropTypes.number
};

export default function SubjectProgress({ subjects }) {
  // Datos de demostración si no se proporcionan
  const data = subjects || [
    { name: 'Matemáticas', emoji: '📐', progress: 72, exams: 8, average: 7.9 },
    { name: 'Español y Literatura', emoji: '📖', progress: 58, exams: 5, average: 8.2 },
    { name: 'Biología', emoji: '🧬', progress: 45, exams: 4, average: 7.1 },
    { name: 'Historia de México', emoji: '🏛️', progress: 38, exams: 3, average: 6.8 },
    { name: 'Física', emoji: '⚡', progress: 30, exams: 2, average: 7.5 },
    { name: 'Química', emoji: '🧪', progress: 25, exams: 2, average: 6.5 }
  ];

  const activeSubjects = data.filter((s) => s.progress > 0);

  return (
    <MainCard title="Progreso por materia">
      {activeSubjects.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Aún no has comenzado ninguna materia.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Inicia un simulacro o explora el catálogo para comenzar.
          </Typography>
        </Stack>
      ) : (
        <Stack sx={{ gap: 2.5 }}>
          {activeSubjects.map((subject) => (
            <SubjectRow key={subject.name} {...subject} />
          ))}
        </Stack>
      )}
    </MainCard>
  );
}

SubjectProgress.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      exams: PropTypes.number,
      average: PropTypes.number
    })
  )
};
