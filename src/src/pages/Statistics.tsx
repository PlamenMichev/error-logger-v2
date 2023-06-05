// components
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { useState } from 'react';
import { Tabs, Tab, CardHeader, Card, Box } from '@mui/material';
import LineGrowthWidget from 'src/components/widgets/LineGrowthWidget';
import WidgetSummary from 'src/components/widgets/WidgetSummary';
import AnalyticsMostCommonErrors from 'src/components/widgets/AnalyticsMostCommonErrors';
import ErrorTypeGraph from 'src/components/widgets/ErrorTypeGraph';

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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            my={10}
            flexWrap="wrap"
            gap={3}
          >
            <Box width="35%" display="flex" alignItems="center" justifyContent="center">
              <LineGrowthWidget
                chartColor="warning"
                chartData={[5, 23, 15, 66, 55, 21, 6, 2, 5]}
                percent={5.4}
                title={translate('lastHour')}
                total={150}
                sx={{ width: '100%' }}
              />
            </Box>

            <Box width="35%" display="flex" alignItems="center" justifyContent="center">
              <LineGrowthWidget
                chartColor="warning"
                chartData={[50, 315, 65, 66, 55, 251, 611, 25, 25]}
                percent={25.4}
                title={translate('lastHour')}
                total={921}
                moreText="thanLastWeek"
                sx={{ width: '100%' }}
              />
            </Box>

            <Box width="35%" display="flex" alignItems="center" justifyContent="center">
              <WidgetSummary
                title={translate('mostCommonLastHour')}
                total={404}
                description={'5 ' + translate('times')}
                sx={{ width: '100%' }}
              />
            </Box>

            <Box width="35%" display="flex" alignItems="center" justifyContent="center">
              <WidgetSummary
                title={translate('mostCommonLastMonth')}
                total={401}
                description={'41 ' + translate('times')}
                sx={{ width: '100%' }}
              />
            </Box>
          </Box>
        )}
        {pickedTab === TABS[1].value && (
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Box width="70%" display="flex" alignItems="center" justifyContent="center" my={5}>
              <AnalyticsMostCommonErrors
                title={translate('mostCommonErrorsTitle')!}
                chartData={[
                  { label: '404', value: 590 },
                  { label: '401', value: 700 },
                  { label: '500', value: 590 },
                  { label: '408', value: 920 },
                  { label: '503', value: 920 },
                ]}
                sx={{ width: '100%' }}
              />
            </Box>
          </Box>
        )}
        {pickedTab === TABS[2].value && (
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Box width="70%" display="flex" alignItems="center" justifyContent="center" my={5}>
              <ErrorTypeGraph
                sx={{ width: '100%' }}
                title={translate('errorTypesTitle')!}
                subheader={translate('moreThanLastWeek')!}
                chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
                chartData={[
                  {
                    year: '2023',
                    data: [
                      { name: '408', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                      { name: '404', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                      { name: '401', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                  {
                    year: '2022',
                    data: [
                      { name: '408', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                      { name: '404', data: [10, 34, 13, 12, 77, 14, 99, 62, 45] },
                      { name: '401', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                ]}
              />
            </Box>
          </Box>
        )}
      </Card>
    </Page>
  );
}
