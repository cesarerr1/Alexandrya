// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| ALEXANDRYA LOGO ||============================== //

export default function LogoMain() {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill={theme.vars.palette.primary.main} />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Public Sans, sans-serif"
          fontWeight="700"
          fontSize="18"
        >
          A
        </text>
      </svg>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: theme.vars.palette.common.black,
          letterSpacing: '-0.02em'
        }}
      >
        Alexandrya
      </Typography>
    </Stack>
  );
}
