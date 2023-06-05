// @mui
import { Box, Typography, useTheme, Button } from '@mui/material';
// components
import Page from '../components/Page';
import { Link } from 'react-router-dom';
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

export default function Login() {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Page title={translate('loginTitle')}>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        bgcolor={theme.palette.primary.light}
      >
        <Box borderRadius={20} width="50%" height="100%">
          <Box width="100%" height="100%" px={4} py={2}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background:
                  "url('https://uploads-ssl.webflow.com/60feaa7a5219be12bddf4bb3/6325f88bfed41f1515ed02d6_Top%2030%20st%C3%B8rste%20administrationshuse%20i%20Danmark-p-800.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: 20,
              }}
            />
          </Box>
        </Box>

        <Box width="50%" height="100%" display="flex" alignItems="center" justifyContent="center">
          <Box
            bgcolor={theme.palette.primary.lighter}
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={10}
          >
            <img src="/logo/logo_single.png" alt="Google icon" width="90px" height="90px" />
            <Typography variant="h4" align="center" sx={{ mb: 10, mt: 3 }}>
              {translate('loginHeader')}
            </Typography>
            <Button
              component={Link}
              to="/dashboard/index"
              sx={{
                bgcolor: theme.palette.primary.contrastText,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
                width: '100%',
              }}
            >
              <img src="/assets/icons/ic_google.png" alt="Google icon" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
