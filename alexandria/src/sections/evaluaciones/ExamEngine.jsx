import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

// Preguntas de demostración
const DEMO_QUESTIONS = [
  {
    id: 'q1',
    statement: '¿Cuál es la raíz cuadrada de 144?',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '11' },
      { key: 'C', text: '12' },
      { key: 'D', text: '14' }
    ],
    correct: 'C',
    subject: 'Matemáticas',
    topic: 'Aritmética',
    explanation: 'La raíz cuadrada de 144 es 12, ya que 12 × 12 = 144.'
  },
  {
    id: 'q2',
    statement: '¿En qué año se consumó la Independencia de México?',
    options: [
      { key: 'A', text: '1810' },
      { key: 'B', text: '1821' },
      { key: 'C', text: '1824' },
      { key: 'D', text: '1917' }
    ],
    correct: 'B',
    subject: 'Historia de México',
    topic: 'Independencia',
    explanation: 'La Independencia de México se consumó el 27 de septiembre de 1821 con la entrada del Ejército Trigarante a la Ciudad de México.'
  },
  {
    id: 'q3',
    statement: '¿Cuál es la fórmula del agua?',
    options: [
      { key: 'A', text: 'CO₂' },
      { key: 'B', text: 'NaCl' },
      { key: 'C', text: 'H₂O' },
      { key: 'D', text: 'O₂' }
    ],
    correct: 'C',
    subject: 'Química',
    topic: 'Compuestos químicos',
    explanation: 'El agua es un compuesto formado por dos átomos de hidrógeno y uno de oxígeno: H₂O.'
  },
  {
    id: 'q4',
    statement: '¿Cuál es la velocidad de la luz en el vacío?',
    options: [
      { key: 'A', text: '300,000 m/s' },
      { key: 'B', text: '300,000 km/s' },
      { key: 'C', text: '300,000 km/h' },
      { key: 'D', text: '150,000 km/s' }
    ],
    correct: 'B',
    subject: 'Física',
    topic: 'Óptica',
    explanation: 'La velocidad de la luz en el vacío es aproximadamente 300,000 km/s (3 × 10⁸ m/s).'
  },
  {
    id: 'q5',
    statement: '¿Cuál es la célula básica de todo ser vivo?',
    options: [
      { key: 'A', text: 'Átomo' },
      { key: 'B', text: 'Molécula' },
      { key: 'C', text: 'Célula' },
      { key: 'D', text: 'Tejido' }
    ],
    correct: 'C',
    subject: 'Biología',
    topic: 'Biología celular',
    explanation: 'La célula es la unidad básica estructural y funcional de todos los seres vivos.'
  }
];

// ==============================|| EVALUACIONES - EXAM ENGINE ||============================== //

export default function ExamEngine({ examType, onFinish, onCancel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = DEMO_QUESTIONS;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const handleAnswer = useCallback(
    (questionId, optionKey) => {
      setAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
    },
    []
  );

  const handleFinish = () => {
    setShowConfirmFinish(false);
    setShowResults(true);
  };

  // Resultados
  if (showResults) {
    const correctCount = questions.filter((q) => answers[q.id] === q.correct).length;
    const score = Math.round((correctCount / totalQuestions) * 100);

    return (
      <Stack sx={{ gap: 3 }}>
        <MainCard>
          <Stack sx={{ alignItems: 'center', gap: 2, py: 3 }}>
            <Typography variant="h3">Resultado</Typography>
            <Typography
              variant="h1"
              sx={{
                color: score >= 60 ? 'success.main' : 'error.main',
                fontSize: '3.5rem'
              }}
            >
              {score}%
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {correctCount} de {totalQuestions} respuestas correctas
            </Typography>
            <Chip
              label={score >= 80 ? 'Excelente' : score >= 60 ? 'Aprobado' : 'Necesitas practicar más'}
              color={score >= 80 ? 'success' : score >= 60 ? 'warning' : 'error'}
              size="medium"
            />
          </Stack>
        </MainCard>

        {/* Revisión de respuestas */}
        <MainCard title="Revisión de respuestas">
          <Stack sx={{ gap: 2 }}>
            {questions.map((q, idx) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correct;
              return (
                <Box
                  key={q.id}
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: isCorrect ? 'success.light' : 'error.light',
                    bgcolor: isCorrect ? 'success.lighter' : 'error.lighter'
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                    {idx + 1}. {q.statement}
                  </Typography>
                  <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
                    <Typography variant="caption">
                      Tu respuesta: <strong>{userAnswer || 'Sin responder'}</strong>
                    </Typography>
                    {!isCorrect && (
                      <Typography variant="caption" sx={{ color: 'success.main' }}>
                        Correcta: <strong>{q.correct}</strong>
                      </Typography>
                    )}
                  </Stack>
                  {q.explanation && (
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1 }}>
                      {q.explanation}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Stack>
        </MainCard>

        <Button variant="contained" onClick={onFinish} sx={{ alignSelf: 'center', textTransform: 'none' }}>
          Volver a evaluaciones
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 3 }}>
      {/* Header con progreso */}
      <MainCard contentSX={{ p: 2 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {examType?.title || 'Evaluación'}
            </Typography>
            <Chip label={currentQuestion.subject} size="small" variant="light" color="primary" />
          </Stack>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {answeredCount}/{totalQuestions} respondidas
            </Typography>
            {examType?.timed && (
              <Chip
                icon={<ClockCircleOutlined />}
                label="03:00:00"
                size="small"
                color="error"
                variant="light"
              />
            )}
          </Stack>
        </Stack>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
      </MainCard>

      {/* Question */}
      <MainCard>
        <Stack sx={{ gap: 3 }}>
          <Stack direction="row" sx={{ gap: 1, alignItems: 'baseline' }}>
            <Typography variant="h6" sx={{ color: 'primary.main', minWidth: 30 }}>
              {currentIndex + 1}.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {currentQuestion.statement}
            </Typography>
          </Stack>

          <Divider />

          <RadioGroup
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
          >
            <Grid container spacing={1.5}>
              {currentQuestion.options.map((option) => (
                <Grid key={option.key} size={12}>
                  <Box
                    sx={{
                      border: '1px solid',
                      borderColor: answers[currentQuestion.id] === option.key ? 'primary.main' : 'grey.A800',
                      borderRadius: 1.5,
                      px: 2,
                      py: 1,
                      transition: 'all 0.15s ease-in-out',
                      '&:hover': { borderColor: 'primary.light', bgcolor: 'primary.lighter' },
                      ...(answers[currentQuestion.id] === option.key && { bgcolor: 'primary.lighter' })
                    }}
                  >
                    <FormControlLabel
                      value={option.key}
                      control={<Radio size="small" />}
                      label={
                        <Typography variant="body1">
                          <strong>{option.key})</strong> {option.text}
                        </Typography>
                      }
                      sx={{ m: 0, width: '100%' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </Stack>
      </MainCard>

      {/* Navigation */}
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          startIcon={<ArrowLeftOutlined />}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
          sx={{ textTransform: 'none' }}
        >
          Anterior
        </Button>

        <Stack direction="row" sx={{ gap: 1.5 }}>
          {currentIndex < totalQuestions - 1 ? (
            <Button
              variant="contained"
              endIcon={<ArrowRightOutlined />}
              onClick={() => setCurrentIndex((i) => i + 1)}
              sx={{ textTransform: 'none' }}
            >
              Siguiente
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              startIcon={<CheckOutlined />}
              onClick={() => setShowConfirmFinish(true)}
              sx={{ textTransform: 'none' }}
            >
              Finalizar
            </Button>
          )}
        </Stack>
      </Stack>

      {/* Question navigator (dots) */}
      <MainCard contentSX={{ p: 1.5 }}>
        <Stack direction="row" sx={{ gap: 0.75, flexWrap: 'wrap', justifyContent: 'center' }}>
          {questions.map((q, idx) => (
            <Box
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Pregunta ${idx + 1}${answers[q.id] ? ', respondida' : ''}`}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(idx)}
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: idx === currentIndex ? 'primary.main' : answers[q.id] ? 'success.main' : 'grey.A800',
                bgcolor: idx === currentIndex ? 'primary.lighter' : answers[q.id] ? 'success.lighter' : 'transparent',
                color: idx === currentIndex ? 'primary.main' : answers[q.id] ? 'success.main' : 'text.secondary',
                transition: 'all 0.15s',
                '&:hover': { borderColor: 'primary.main' }
              }}
            >
              {idx + 1}
            </Box>
          ))}
        </Stack>
      </MainCard>

      {/* Confirm finish dialog */}
      <Dialog open={showConfirmFinish} onClose={() => setShowConfirmFinish(false)} aria-modal="true">
        <DialogTitle>¿Finalizar evaluación?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {answeredCount < totalQuestions
              ? `Tienes ${totalQuestions - answeredCount} preguntas sin responder. ¿Deseas finalizar de todas formas?`
              : 'Has respondido todas las preguntas. ¿Deseas enviar tus respuestas?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirmFinish(false)} sx={{ textTransform: 'none' }}>
            Continuar evaluación
          </Button>
          <Button variant="contained" onClick={handleFinish} sx={{ textTransform: 'none' }}>
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

ExamEngine.propTypes = {
  examType: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    timed: PropTypes.bool
  }),
  onFinish: PropTypes.func.isRequired,
  onCancel: PropTypes.func
};
