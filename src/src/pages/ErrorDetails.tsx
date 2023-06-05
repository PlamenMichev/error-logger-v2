import { Box, Card, CardHeader, Typography, useTheme } from '@mui/material';
import Page from 'src/components/Page';
import useLocales from 'src/hooks/useLocales';
import { ErrorTableRow } from './ErrorsList';
import LineGrowthWidget from 'src/components/widgets/LineGrowthWidget';

export default function ErrorDetails() {
  const { translate } = useLocales();

  return (
    <Page title={translate('errorDetails')}>
      <Typography variant="h4">{translate('errorDetails')}</Typography>
      {/* We use mock data here for display purposes */}
      <Card sx={{ mt: 3 }}>
        <ErrorTableRow
          row={{
            date: '22.5.2023 10.41.52',
            description:
              'Creating of user with email lbm@trekanten.as in HelpScout returned fail status code. The response st...',
            id: 'some-id',
            status: '400',
            user: 'Testing User',
          }}
        />
      </Card>

      {/* We use the same components and layout as in the statistics page */}
      <Box display="flex" alignItems="center" justifyContent="space-between" my={10}>
        <Box width="50%" display="flex" alignItems="center" justifyContent="center">
          <LineGrowthWidget
            chartColor="warning"
            chartData={[5, 23, 15, 66, 55, 21, 6, 2, 5]}
            percent={5.4}
            title={translate('lastHour')}
            total={150}
          />
        </Box>

        <Box width="50%" display="flex" alignItems="center" justifyContent="center">
          <LineGrowthWidget
            chartColor="warning"
            chartData={[50, 315, 65, 66, 55, 251, 611, 25, 25]}
            percent={25.4}
            title={translate('lastHour')}
            total={921}
            moreText="thanLastWeek"
          />
        </Box>
      </Box>

      <Card sx={{ mt: 3 }}>
        <CardHeader title={translate('errorAppearedTo')} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="inherit" sx={{ m: 3 }}>
            Phillip Nielson
          </Typography>

          <Typography variant="inherit" sx={{ m: 3 }}>
            Administrator
          </Typography>

          <Typography variant="inherit" sx={{ m: 3 }}>
            Borum Gammeldans Forening
          </Typography>

          <Typography variant="inherit" sx={{ m: 3 }}>
            Can create, edit, delete users
          </Typography>
        </Box>
      </Card>

      <DetailsLines
        title={translate('actionHistory')}
        rows={[
          'An error occurres when the invoice is sent to the paying user of the household',
          'User creates an invoice to the new household',
          'User creates a new household',
          'User logs in',
        ]}
      />

      <DetailsLines
        title={translate('stackTrace')}
        rows={[
          'The error occurred in line 37 in the invoice sending serivice on the backend',
          'The invoice sending service was called from the GeneralInvoiceService line 97',
          'The user requested a sending of invoice in the invoce controller line 14',
          'The request is starting',
        ]}
      />
    </Page>
  );
}

type DetailsLinesProps = {
  rows: string[];
  title: string;
};

function DetailsLines({ rows, title }: DetailsLinesProps) {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title={title} sx={{ mb: 3 }} />
      {rows.map((row, index) => (
        <Box
          key={row}
          bgcolor={index % 2 !== 0 ? theme.palette.grey[0] : theme.palette.grey[50012]}
          p={3}
          display="flex"
        >
          {index === 0 && title !== translate('stackTrace') && (
            <img
              width="20px"
              style={{ marginRight: 10 }}
              alt="Error icon"
              src="/assets/icons/ic_alert.png"
            />
          )}
          <Typography variant="subtitle1">{row}</Typography>
        </Box>
      ))}
    </Card>
  );
}
