// components
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { useState } from 'react';
import { Tabs, Tab, CardHeader, Card, Box, Typography } from '@mui/material';
import LineGrowthWidget from 'src/components/widgets/LineGrowthWidget';
import { ComingSoonIllustration } from 'src/assets';

// ----------------------------------------------------------------------

export default function Statistics() {
  const { translate } = useLocales();

  const TABS = [
    {
      value: 'occurrence',
      label: translate('tabs.occurrence'),
    },
    {
      value: 'common',
      label: translate('tabs.common'),
    },
    {
      value: 'errorType',
      label: translate('tabs.errorType'),
    },
  ];
  const [pickedTab, setPickedTab] = useState(TABS[0].value);

  return (
    <Page title={translate('statisticsTitle')}>
      <Card>
        <CardHeader title={translate('statisticsTitle')} sx={{ mb: 3 }} />
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={pickedTab}
          onChange={(e, val) => setPickedTab(val)}
          sx={{ px: 2, bgcolor: 'background.neutral' }}
        >
          {TABS.map((tab) => (
            <Tab disableRipple key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {pickedTab === TABS[0].value && (
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
        )}
        {pickedTab === TABS[1].value && (
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <ComingSoonIllustration sx={{ my: 5, height: 240 }} />
            <Typography sx={{ mb: 3 }} variant="h3">
              {translate('commingSoon')}
            </Typography>
          </Box>
        )}
        {pickedTab === TABS[2].value && (
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <ComingSoonIllustration sx={{ my: 5, height: 240 }} />
            <Typography sx={{ mb: 3 }} variant="h3">
              {translate('commingSoon')}
            </Typography>
          </Box>
        )}
      </Card>
    </Page>
  );
}
