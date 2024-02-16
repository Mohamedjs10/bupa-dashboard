import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import { styles } from 'utils/mui-styles';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadDocuments } from 'views/utilities/general';
import LoginForm from 'ui-component/forms/LoginForm';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  console.log(isLoading);
  const [data, setData] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [idImages, setIdImages] = useState([]);
  console.log(idImages);
  useEffect(() => {}, []);
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: isLoading ? 'flex' : 'none', alignItems: 'center', position: 'absolute', top: '40%' }}>
        <CircularProgress size="100px" />
      </Box>
      {!isLoading && <LoginForm />}
    </Box>
  );
};

export default Dashboard;
