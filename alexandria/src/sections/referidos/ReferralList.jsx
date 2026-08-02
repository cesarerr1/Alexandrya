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

// assets
import UserOutlined from '@ant-design/icons/UserOutlined';

// ==============================|| REFERIDOS - LIST ||============================== //

const DEMO_REFERRALS = [
  {
    id: 'ref-1',
    name: 'María López',
    email: 'm***z@gmail.com',
    date: '20/06/2026',
    status: 'efectivo',
    benefit: 'Exámenes ilimitados'
  },
  {
    id: 'ref-2',
    name: 'Carlos Ruiz',
    email: 'c***z@hotmail.com',
    date: '10/07/2026',
    status: 'pendiente',
    benefit: null
  }
];

const STATUS_MAP = {
  efectivo: { label: 'Efectivo', color: 'success' },
  pendiente: { label: 'Pendiente', color: 'warning' },
  expirado: { label: 'Expirado', color: 'error' }
};

export default function ReferralList({ referrals }) {
  const data = referrals || DEMO_REFERRALS;

  return (
    <MainCard title="Mis referidos">
      {data.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 4, gap: 1 }}>
          <UserOutlined style={{ fontSize: 32, color: '#bfbfbf' }} />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Tus referidos aparecerán aquí cuando se registren con tu código.
          </Typography>
        </Stack>
      ) : (
        <TableContainer>
          <Table aria-label="Mis referidos">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Fecha registro</TableCell>
                <TableCell align="center">Estado</TableCell>
                <TableCell>Beneficio otorgado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((ref) => {
                const statusInfo = STATUS_MAP[ref.status] || STATUS_MAP.pendiente;
                return (
                  <TableRow key={ref.id} hover>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {ref.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{ref.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{ref.date}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={statusInfo.label} size="small" color={statusInfo.color} variant="light" />
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" sx={{ color: ref.benefit ? 'text.primary' : 'text.disabled' }}>
                        {ref.benefit || '—'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </MainCard>
  );
}

ReferralList.propTypes = {
  referrals: PropTypes.array
};
