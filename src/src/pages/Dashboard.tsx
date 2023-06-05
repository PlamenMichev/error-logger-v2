// components
import { ComingSoonIllustration } from 'src/assets';
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Dashboard() {
  const { translate } = useLocales();

  return (
    <Page title={translate('dashboardTitle')}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <ComingSoonIllustration sx={{ my: 5, height: 240 }} />
        <Typography variant="h3">{translate('commingSoon')}</Typography>
      </Box>
    </Page>
  );
}
