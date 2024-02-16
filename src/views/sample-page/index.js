// material-ui
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Bar from 'ui-component/charts/bar';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Card">
    <Box sx={{ maxHeight: '300px', maxWidth: '400px' }}>
      <Bar />
    </Box>
  </MainCard>
);

export default SamplePage;
