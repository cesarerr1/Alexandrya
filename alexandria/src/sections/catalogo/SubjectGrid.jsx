import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

// react-router
import { useNavigate } from 'react-router-dom';

// ==============================|| CATALOGO - SUBJECT DATA ||============================== //

const SUBJECTS = [
  {
    id: 'quimica',
    name: 'Química',
    category: 'Ciencias',
    modules: 5,
    topics: 28,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #06b6d4 100%)',
    glowColor: '#34d399',
    bgImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80'
  },
  {
    id: 'matematicas',
    name: 'Matemáticas',
    category: 'Lógica',
    modules: 6,
    topics: 35,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)',
    glowColor: '#fbbf24',
    bgImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80'
  },
  {
    id: 'competencias-escritas',
    name: 'C. Escritas',
    category: 'Humanidades',
    modules: 3,
    topics: 15,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 50%, #8b5cf6 100%)',
    glowColor: '#f472b6',
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80'
  },
  {
    id: 'biologia',
    name: 'Biología',
    category: 'Ciencias',
    modules: 5,
    topics: 30,
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #06b6d4 100%)',
    glowColor: '#f472b6',
    bgImage: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80'
  },
  {
    id: 'competencia-lectora',
    name: 'C. Lectora',
    category: 'Humanidades',
    modules: 3,
    topics: 18,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
    glowColor: '#22d3ee',
    bgImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80'
  },
  {
    id: 'historia-mexico',
    name: 'Hist. de México',
    category: 'Historia',
    modules: 4,
    topics: 22,
    gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)',
    glowColor: '#10b981',
    bgImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&q=80'
  },
  {
    id: 'fisica',
    name: 'Física',
    category: 'Ciencias',
    modules: 5,
    topics: 25,
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
    glowColor: '#60a5fa',
    bgImage: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80'
  },
  {
    id: 'espanol-literatura',
    name: 'Español y Lit.',
    category: 'Humanidades',
    modules: 4,
    topics: 20,
    gradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #fb7185 100%)',
    glowColor: '#fb7185',
    bgImage: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&q=80'
  },
  {
    id: 'filosofia',
    name: 'Filosofía',
    category: 'Humanidades',
    modules: 3,
    topics: 12,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #d946ef 100%)',
    glowColor: '#c084fc',
    bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80'
  },
  {
    id: 'geografia',
    name: 'Geografía',
    category: 'Ciencias',
    modules: 4,
    topics: 18,
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
    glowColor: '#34d399',
    bgImage: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400&q=80'
  },
  {
    id: 'historia-universal',
    name: 'Hist. Universal',
    category: 'Historia',
    modules: 4,
    topics: 20,
    gradient: 'linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%)',
    glowColor: '#94a3b8',
    bgImage: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&q=80'
  }
];

// ==============================|| CATALOGO - GAME CARD ||============================== //

// Keyframes para el efecto shine
const shineKeyframes = {
  '@keyframes shine': {
    '0%': { left: '-100%' },
    '100%': { left: '150%' }
  }
};

function SubjectCard({ subject, progress = 0 }) {
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => navigate(`/app/catalogo/${subject.id}`)}
      aria-label={`Ver ${subject.name}`}
      sx={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
        aspectRatio: '3 / 4',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        cursor: 'pointer',
        // Shine pseudo-element
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-25deg)',
          transition: '0.75s',
          zIndex: 5,
          pointerEvents: 'none'
        },
        '&:hover': {
          transform: 'translateY(-12px) scale(1.03)',
          boxShadow: '0 25px 50px -12px rgba(99, 14, 212, 0.4)',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          '&::before': {
            left: '150%'
          },
          '& .card-bg-img': {
            transform: 'scale(1.1)',
            filter: 'brightness(0.9)'
          }
        },
        ...shineKeyframes
      }}
    >
      {/* Background image */}
      <Box
        className="card-bg-img"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${subject.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.75)',
          transition: 'transform 0.7s ease, filter 0.7s ease'
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1
        }}
      />

      {/* Fallback gradient (visible while image loads) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: subject.gradient,
          opacity: 0.5,
          zIndex: 0
        }}
      />

      {/* Category chip — glass */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
          px: 1.5,
          py: 0.5,
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            fontWeight: 900,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {subject.category}
        </Typography>
      </Box>

      {/* Bottom info panel — glassmorphism */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          zIndex: 20
        }}
      >
        <Box
          sx={{
            p: 2.5,
            borderRadius: '1.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              mb: 0.5,
              lineHeight: 1.3
            }}
          >
            {subject.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
              mb: 2
            }}
          >
            Módulos: {String(subject.modules).padStart(2, '0')} | Temas: {subject.topics}
          </Typography>

          {/* Progress bar with neon glow */}
          {progress > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ flex: 1, height: 6, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                <Box
                  sx={{
                    height: '100%',
                    width: `${progress}%`,
                    bgcolor: subject.glowColor,
                    borderRadius: '9999px',
                    boxShadow: `0 0 8px ${subject.glowColor}`,
                    transition: 'width 0.6s ease'
                  }}
                />
              </Box>
              <Typography sx={{ fontSize: '10px', fontWeight: 900, color: '#fff', minWidth: 28, textAlign: 'right' }}>
                {progress}%
              </Typography>
            </Box>
          ) : (
            <Typography
              sx={{
                width: '100%',
                py: 0.75,
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.5)'
              }}
            >
              Sin comenzar
            </Typography>
          )}
        </Box>
      </Box>
    </ButtonBase>
  );
}

SubjectCard.propTypes = {
  subject: PropTypes.object.isRequired,
  progress: PropTypes.number
};

// ==============================|| CATALOGO - SUBJECT GRID ||============================== //

export default function SubjectGrid({ progressData }) {
  const defaultProgress = {
    matematicas: 72,
    'espanol-literatura': 58,
    biologia: 45,
    'historia-mexico': 38,
    fisica: 30,
    quimica: 25
  };

  const progress = progressData || defaultProgress;

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Ambient background blurs */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(124, 58, 237, 0.05)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.06)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
        {SUBJECTS.map((subject) => (
          <Grid key={subject.id} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <SubjectCard subject={subject} progress={progress[subject.id]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

SubjectGrid.propTypes = {
  progressData: PropTypes.object
};

export { SUBJECTS };
