import { useParams, useNavigate } from 'react-router-dom';

// material-ui
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import SubjectDetail from 'sections/catalogo/SubjectDetail';
import { SUBJECTS } from 'sections/catalogo/SubjectGrid';

// assets
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

// ==============================|| CATÁLOGO - DETALLE DE MATERIA ||============================== //

export default function SubjectPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const subject = SUBJECTS.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <Stack sx={{ alignItems: 'center', py: 8, gap: 2 }}>
        <Typography variant="h5">Materia no encontrada</Typography>
        <Button variant="outlined" startIcon={<ArrowLeftOutlined />} onClick={() => navigate('/app/catalogo')}>
          Volver al catálogo
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="navegación del catálogo">
        <Link
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/app/catalogo')}
        >
          Catálogo
        </Link>
        <Typography color="text.primary">{subject.name}</Typography>
      </Breadcrumbs>

      {/* Detail view */}
      <SubjectDetail subject={subject} />
    </Stack>
  );
}
