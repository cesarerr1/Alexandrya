import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import { glassCardSm, colors } from 'themes/vibrant';

// ==============================|| VIBRANT DATA TABLE ||============================== //

const tableStyles = {
  ...glassCardSm,
  border: 'none',
  '&:hover': { transform: 'none', boxShadow: glassCardSm.boxShadow },
  fontFamily: 'Be Vietnam Pro, sans-serif',
  '& .MuiDataGrid-columnHeaders': {
    bgcolor: colors.surfaceContainerLow,
    borderBottom: `1px solid ${colors.outlineVariant}40`,
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600,
      fontSize: '13px',
      color: colors.onSurfaceVariant,
      letterSpacing: '0.03em'
    }
  },
  '& .MuiDataGrid-row': {
    '&:hover': { bgcolor: `${colors.primary}06` },
    '&.Mui-selected': { bgcolor: `${colors.primary}0a`, '&:hover': { bgcolor: `${colors.primary}0e` } }
  },
  '& .MuiDataGrid-cell': {
    fontSize: '14px',
    color: colors.onSurface,
    borderBottom: `1px solid ${colors.outlineVariant}20`
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: `1px solid ${colors.outlineVariant}40`
  },
  '& .MuiCheckbox-root': {
    color: colors.outline,
    '&.Mui-checked': { color: colors.primary }
  },
  '& .MuiTablePagination-root': {
    fontFamily: 'Be Vietnam Pro, sans-serif',
    fontSize: '13px'
  }
};

export default function VibrantDataTable({
  rows,
  columns,
  pageSize = 10,
  checkboxSelection = false,
  disableRowSelectionOnClick = true,
  autoHeight = true,
  loading = false,
  onRowClick,
  sx,
  ...rest
}) {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize } }
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        autoHeight={autoHeight}
        loading={loading}
        onRowClick={onRowClick}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        sx={{ ...tableStyles, ...sx }}
        {...rest}
      />
    </Box>
  );
}

VibrantDataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
  checkboxSelection: PropTypes.bool,
  disableRowSelectionOnClick: PropTypes.bool,
  autoHeight: PropTypes.bool,
  loading: PropTypes.bool,
  onRowClick: PropTypes.func,
  sx: PropTypes.object
};
