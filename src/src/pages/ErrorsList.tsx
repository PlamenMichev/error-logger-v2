// @mui
import {
  Box,
  Card,
  CardHeader,
  CircularProgress,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  styled,
} from '@mui/material';
// components
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { TableEmptyRows, TableHeadCustom, TableMoreMenu } from 'src/components/table';
import { useEffect, useState } from 'react';
import { ErrorType } from 'src/types/ErrorType';
import { HOST_API } from 'src/config';
import Iconify from 'src/components/Iconify';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const StyledLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default function ErrorsList() {
  const { translate } = useLocales();

  const [tableData, setTableData] = useState<ErrorType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(HOST_API + `logger?page=${0}&searchTerm=''`);
      const data = (await response.json()) as ErrorType[];

      console.log(data);
      setLoading(false);
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <Page title={translate('errorsListTitle')}>
      <Card>
        <CardHeader title={translate('errorsListTitle')} sx={{ mb: 3 }} />

        <TableContainer sx={{ overflow: 'hidden' }}>
          {loading && (
            <Table>
              <Box display="flex" alignItems="center" justifyContent="center" width="100%" m={5}>
                <CircularProgress />
              </Box>
            </Table>
          )}

          {!loading && tableData.length > 0 && (
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: 'errorCode', label: translate('errorsList.errorCode') },
                  { id: 'description', label: translate('errorsList.description') },
                  { id: 'user', label: translate('errorsList.user') },
                  { id: 'date', label: translate('errorsList.date') },
                  { id: '' },
                ]}
              />
              <TableBody>
                {tableData.map((row) => (
                  <ErrorTableRow row={row} key={row.id} />
                ))}
              </TableBody>
            </Table>
          )}

          {!loading && tableData.length === 0 && (
            <Table>
              <TableEmptyRows emptyRows={0} />
            </Table>
          )}
        </TableContainer>
      </Card>
    </Page>
  );
}

type ErrorTableRowProps = {
  row: ErrorType;
};

export function ErrorTableRow({ row }: ErrorTableRowProps) {
  const { translate } = useLocales();

  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const handleSendToJira = () => {
    handleCloseMenu();
    console.log('DOWNLOAD', row.id);
  };

  const handleContactUser = () => {
    handleCloseMenu();
    console.log('PRINT', row.id);
  };

  const handleSendToDeveloper = () => {
    handleCloseMenu();
    console.log('SHARE', row.id);
  };

  return (
    <TableRow key={row.id} hover>
      <TableCell>
        <StyledLink to="/dashboard/error-details">{row.status}</StyledLink>
      </TableCell>

      <TableCell>
        <StyledLink to="/dashboard/error-details">{row.description}...</StyledLink>
      </TableCell>

      <TableCell>
        <StyledLink to="/dashboard/error-details">{row.user}</StyledLink>
      </TableCell>

      <TableCell>
        <StyledLink to="/dashboard/error-details">
          {new Date(row.date).toLocaleDateString('da-DK') +
            ' ' +
            new Date(row.date).toLocaleTimeString('da-DK')}
        </StyledLink>
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem onClick={handleSendToJira}>
                <Iconify icon={'majesticons:bug-2'} minWidth={20} />
                {translate('report')}
              </MenuItem>

              <MenuItem onClick={handleContactUser}>
                <Iconify icon={'eva:printer-fill'} minWidth={20} />
                {translate('contactUser')}
              </MenuItem>

              <MenuItem onClick={handleSendToDeveloper}>
                <Iconify icon={'majesticons:settings-cog'} minWidth={20} />
                {translate('developer')}
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
