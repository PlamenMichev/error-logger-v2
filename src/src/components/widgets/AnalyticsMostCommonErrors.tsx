import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader, CardProps } from '@mui/material';
import { BaseOptionChart } from '../chart';
import { fNumber } from 'src/utils/formatNumber';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  chartData: {
    label: string;
    value: number;
  }[];
}

export default function AnalyticsMostCommonErrors({ title, chartData, ...other }: Props) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: string) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
