import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import { styles } from 'utils/mui-styles';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadDocuments } from 'views/utilities/general';
import PdfForm from 'ui-component/forms/PdfForm';
import PdfViewer from 'ui-component/pdf-generators/Pdf';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [certificate, setCertificate] = useState([]);
  console.log('aaaaaaaa', certificate);
  const [idImages, setIdImages] = useState([]);
  console.log(idImages);
  const [step, setStep] = useState(1);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: step === 0 ? 'flex' : 'none', alignItems: 'center', position: 'absolute', top: '50%' }}>
        <CircularProgress size="100px" />
      </Box>
      {/* step 1 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 1 ? '1' : '0',
          display: step === 1 ? 'flex' : 'none',
          maxWidth: '400px',
          gap: '30px'
        }}
      >
        <Box component="img" src="./upload-section.svg" sx={{ width: '100%' }} />
        <Box
          component="img"
          src="./upload-btn.svg"
          sx={styles.btn}
          onClick={() => {
            setStep(2);
          }}
        />
      </Box>
      {/* step 2 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 2 ? '1' : '0',
          display: step === 2 ? 'flex' : 'none',
          maxWidth: '600px',
          gap: '30px'
        }}
      >
        <Box component="img" src="./drag-section.svg" sx={{ width: '100%' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
            top: '-85px',
            right: '-100px'
          }}
        >
          <Box
            component="img"
            src="./cancel-btn.svg"
            sx={styles.btn}
            onClick={() => {
              setStep(3);
            }}
          />
          <Box
            component="img"
            src="./continue-btn.svg"
            sx={styles.btn}
            onClick={() => {
              setStep(3);
            }}
          />
        </Box>
        <label htmlFor="file-input">
          <Box component="img" src="./drag.svg" sx={{ position: 'relative', top: '-350px', maxWidth: '100%' }} />
          <Box
            component="input"
            onChange={(e) => {
              console.log(e.target.files.length);
              setCertificate(e.target.files[0]);
              setStep(6);
            }}
            id="file-input"
            type="file"
            style={{ display: 'none' }} // Hide the input element
            multiple
          />
        </label>
      </Box>
      {/* step 3 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 1 ? '1' : '0',
          display: step === 3 ? 'flex' : 'none',
          maxWidth: '500px',
          gap: '30px'
        }}
      >
        <Box component="img" src="./id-sample-section.svg" sx={{ width: '100%' }} />
        <Box
          component="img"
          src="./continue-btn.svg"
          sx={{ ...styles.btn, position: 'absolute', bottom: { xs: '7px', md: '13px' }, width: { xs: '100px', md: '130px' } }}
          onClick={() => {
            setStep(4);
          }}
        />
      </Box>
      {/* step 4 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 2 ? '1' : '0',
          display: step === 4 ? 'flex' : 'none',
          maxWidth: '600px',
          gap: '30px'
        }}
      >
        <Box component="img" src="./drag-section2.svg" sx={{ width: '100%' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
            top: '-85px',
            right: '-100px'
          }}
        >
          <Box component="img" src="./cancel-btn.svg" sx={styles.btn} onClick={() => {}} />
          <Box
            component="img"
            src="./continue-btn.svg"
            sx={styles.btn}
            onClick={() => {
              setStep(0);
              uploadDocuments(certificate, idImages, setLoading, setData, setStep);
            }}
          />
        </Box>
        <label htmlFor="file-input">
          <Box component="img" src="./drag.svg" sx={{ position: 'relative', top: '-350px', maxWidth: '100%' }} />
          <Box
            component="input"
            onChange={(e) => {
              console.log(e.target.files);
              setIdImages(e.target.files);
            }}
            id="file-input"
            type="file"
            style={{ display: 'none' }} // Hide the input element
            // multiple
          />
        </label>
      </Box>
      {/* step 5 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 2 ? '1' : '0',
          display: step === 5 ? 'flex' : 'none',
          // maxWidth: '600px',
          width: '100%',
          gap: '30px'
        }}
      >
        <PdfForm />
      </Box>
      {/* step 6 */}
      <Box
        sx={{
          ...styles.container,
          // transition: '1.5s',
          // opacity: step === 2 ? '1' : '0',
          display: step === 6 ? 'flex' : 'none',
          // maxWidth: '600px',
          width: '100%',
          gap: '30px'
        }}
      >
        <PdfViewer uploadedEnCertificate={certificate} />
      </Box>
    </Box>
  );
};

export default Dashboard;
