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

// ==============================|| SUSCRIPCIÓN - PAYMENT HISTORY ||============================== //

const DEMO_PAYMENTS = [
  {
    id: 'pay-1',
    date: '15/05/2026',
    concept: 'Plan Anual — Suscripción nueva',
    amount: '$1,499.00 MXN',
    method: 'Visa ****4532',
    status: 'completado'
  }
];

export default function PaymentHistory({ payments }) {
  const data = payments || DEMO_PAYMENTS;

  return (
    <MainCard title="Historial de pagos">
      {data.length === 0 ? (
        <Stack sx={{ alignItems: 'center', py: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            No hay pagos registrados.
          </Typography>
        </Stack>
      ) : (
        <TableContainer>
          <Table aria-label="Historial de pagos">
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Concepto</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Método</TableCell>
                <TableCell align="center">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((payment) => (
                <TableRow key={payment.id} hover>
                  <TableCell>
                    <Typography variant="caption">{payment.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{payment.concept}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {payment.amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">{payment.method}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={payment.status === 'completado' ? 'Completado' : 'Pendiente'}
                      size="small"
                      color={payment.status === 'completado' ? 'success' : 'warning'}
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

PaymentHistory.propTypes = {
  payments: PropTypes.array
};
