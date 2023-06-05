// @mui
import { TableRow, TableCell } from '@mui/material';
//
import EmptyContent from '../EmptyContent';
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

type Props = {
  isNotFound: boolean;
};

export default function TableNoData({ isNotFound }: Props) {
  const { translate } = useLocales();

  return (
    <TableRow>
      {isNotFound ? (
        <TableCell colSpan={12}>
          <EmptyContent
            title={translate('noData')}
            sx={{
              '& span.MuiBox-root': { height: 160 },
            }}
          />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
}
