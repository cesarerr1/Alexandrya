import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

// project imports
import MainCard from 'components/MainCard';

// assets
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| DASHBOARD - RECENT EXAMS ||============================== //

export default function RecentExams({ exams }) {
  const navigate = useNavigate();

  // Datos de demostración
  const data = exams || [
    { id: '1', subject: 'Matemáticas', type: 'Simulacro', questions: 120, score: 85, date: '28/07/2026', status: 'completado' },
    { id: '2', subject: 'Español', type: 'Por tema', questions: 20, score: 72, date: '25/07/2026', status: 'completado' },
    { id: '3', subject: 'Biología', type: 'Por materia', questions: 30, score: 68, date: '22/07/2026', status: 'completado' },
    { id: '4', subject: 'Historia', type: 'Por módulo', questions: 15, score: null, date: '20/07/2026', status: 'pendiente' }
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'error';
  };

  return (
    <MainCard
      title="Evaluaciones recientes"
      secondary={
        <Button
          size="small"
          endIcon={<ArrowRightOutlined />}
          onClick={() => navigate('/app/evaluaciones')}
          sx={{ textTransform: 'none' }}
        >
          Ver todas
        </Button>
      }
    >
      {data.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            No has realizado evaluaciones aún.
          </Typography>
        </Stack>
      ) : (
        <TableContainer>
          <Table size="small" aria-label="Evaluaciones recientes">
            <TableHead>
              <TableRow>
                <TableCell>Materia</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell align="center">Preguntas</TableCell>
                <TableCell align="center">Aciertos</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((exam) => (
                <TableRow key={exam.id} hover sx={{ '&:last-child td': { borderBottom: 0 } }}>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {exam.subject}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {exam.type}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{exam.questions}</TableCell>
                  <TableCell align="center">
                    {exam.score !== null ? (
                      <Chip
                        label={`${exam.score}%`}
                        size="small"
                        color={getScoreColor(exam.score)}
                        variant="light"
                      />
                    ) : (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        —
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption">{exam.date}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={exam.status === 'completado' ? 'Completado' : 'Pendiente'}
                      size="small"
                      color={exam.status === 'completado' ? 'success' : 'warning'}
                      variant="light"
                    />
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

RecentExams.propTypes = {
  exams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      subject: PropTypes.string,
      type: PropTypes.string,
      questions: PropTypes.number,
      score: PropTypes.number,
      date: PropTypes.string,
      status: PropTypes.string
    })
  )
};
