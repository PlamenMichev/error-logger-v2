import { Box, Card, Typography, CardProps } from '@mui/material';
import { fNumber } from 'src/utils/formatNumber';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  description: string;
}

export default function WidgetSummary({ title, total, description, sx, ...other }: Props) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="h3">{fNumber(total)}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Card>
  );
}
