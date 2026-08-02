import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| EVALUACIONES - HISTORY ||============================== //

// Datos de demostración
const DEMO_HISTORY = [
  { id: '1', type: 'Simulador', subject: 'General', questions: 120, correct: 102, score: 85, date: '28/07/2026', duration: '2h 45m' },
  { id: '2', type: 'Por materia', subject: 'Matemáticas', questions: 40, correct: 29, score: 72, date: '25/07/2026', duration: '35m' },
  { id: '3', type: 'Por tema', subject: 'Biología', questions: 15, correct: 10, score: 67, date: '22/07/2026', duration: '12m' },
  { id: '4', type: 'Por módulo', subject: 'Física', questions: 25, correct: 20, score: 80, date: '20/07/2026', duration: '22m' },
  { id: '5', type: 'Simulador', subject: 'General', questions: 120, correct: 90, score: 75, date: '15/07/2026', duration: '2h 55m' },
  { id: '6', type: 'Por materia', subject: 'Química', questions: 30, correct: 19, score: 63, date: '12/07/2026', duration: '28m' }
];

const getScoreColor = (score) => {
  if (score >= 80) return 'success';
  if (score >= 60) return 'warning';
  return 'error';
};

export default function ExamHistory({ exams }) {
  const data = exams || DEMO_HISTORY;

  return (
    <MainCard title="Historial de evaluaciones">
      {data.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Aún no has realizado ninguna evaluación.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Selecciona un tipo de evaluación arriba para comenzar.
          </Typography>
        </Stack>
      ) : (
        <TableContainer>
          <Table aria-label="Historial de evaluaciones">
            <TableHead>
              <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell>Materia</TableCell>
                <TableCell align="center">Preguntas</TableCell>
                <TableCell align="center">Aciertos</TableCell>
                <TableCell align="center">Resultado</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="right">Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((exam) => (
                <TableRow key={exam.id} hover>
                  <TableCell>
                    <Chip label={exam.type} size="small" variant="light" color="primary" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {exam.subject}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{exam.questions}</TableCell>
                  <TableCell align="center">{exam.correct}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={`${exam.score}%`}
                      size="small"
                      color={getScoreColor(exam.score)}
                      variant="light"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption">{exam.duration}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption">{exam.date}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </MainCard>
  );
}

ExamHistory.propTypes = {
  exams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      subject: PropTypes.string,
      questions: PropTypes.number,
      correct: PropTypes.number,
      score: PropTypes.number,
      date: PropTypes.string,
      duration: PropTypes.string
    })
  )
};
