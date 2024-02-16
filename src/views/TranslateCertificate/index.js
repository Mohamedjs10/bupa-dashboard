import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import { styles } from 'utils/mui-styles';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadDocuments } from 'views/utilities/general';
import PdfForm from 'ui-component/forms/PdfForm';
import PdfViewer from 'ui-component/pdf-generators/Pdf';
import { notifySuccess, notifyError } from 'utils/toastify';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MainCard from 'ui-component/cards/MainCard';
import uploadSection from '../../assets/images/bupa/upload-section.svg';
import dragSection from '../../assets/images/bupa/drag-section.svg';
import dragSection2 from '../../assets/images/bupa/drag-section2.svg';
import uploadBtn from '../../assets/images/bupa/upload-btn.svg';
import cancelBtn from '../../assets/images/bupa/cancel-btn.svg';
import continueBtn from '../../assets/images/bupa/continue-btn.svg';
import drag from '../../assets/images/bupa/drag.svg';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  const [certificate, setCertificate] = useState([]);
  const [idImages, setIdImages] = useState([]);
  console.log(idImages);
  const [step, setStep] = useState(1);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {step > 1 && (
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          onClick={() => {
            setStep((prev) => --prev);
          }}
        >
          <KeyboardBackspaceIcon sx={{ fontSize: { xs: '30px', sm: '50px' } }} />
        </IconButton>
      )}
      <Box container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: step === 0 ? 'flex' : 'none', alignItems: 'center', position: 'absolute', top: '50%' }}>
          <CircularProgress size="100px" />
        </Box>

        {/* step 1 */}
        {step === 1 && (
          <Box
            sx={{
              ...styles.container,
              maxWidth: '400px',
              gap: '30px'
            }}
          >
            <Box component="img" src={uploadSection} sx={{ width: '100%' }} />
            <Box
              component="img"
              src={uploadBtn}
              sx={styles.btn}
              onClick={() => {
                setStep(2);
              }}
            />
          </Box>
        )}
        {/* step 2 */}
        {step === 2 && (
          <Box
            sx={{
              ...styles.container,
              maxWidth: '600px',
              gap: '30px'
            }}
          >
            <Box component="img" src={dragSection} sx={{ width: '100%' }} />
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
                src={cancelBtn}
                sx={styles.btn}
                onClick={() => {
                  setStep(1);
                }}
              />
              <Box
                component="img"
                src={continueBtn}
                sx={styles.btn}
                onClick={() => {
                  setStep(3);
                }}
              />
            </Box>
            <label htmlFor="file-input">
              <Box component="img" src={drag} sx={{ position: 'relative', top: '-350px', maxWidth: '100%' }} />
              <Box
                component="input"
                onChange={(e) => {
                  console.log(e.target.files.length);
                  setCertificate(e.target.files[0]);
                }}
                id="file-input"
                type="file"
                style={{ display: 'none' }} // Hide the input element
                multiple
              />
            </label>
          </Box>
        )}
        {/* step 3 */}
        {step === 3 && (
          <Box
            sx={{
              ...styles.container,
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
        )}
        {/* step 4 */}
        {step === 4 && (
          <Box
            sx={{
              ...styles.container,
              maxWidth: '600px',
              gap: '30px'
            }}
          >
            <Box component="img" src={dragSection2} sx={{ width: '100%' }} />
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
              <Box component="img" src={cancelBtn} sx={styles.btn} onClick={() => {}} />
              <Box
                component="img"
                src={continueBtn}
                sx={styles.btn}
                onClick={() => {
                  setStep(0);
                  uploadDocuments(certificate, idImages, setLoading, setData, setStep);
                }}
              />
            </Box>
            <label htmlFor="file-input">
              <Box component="img" src={drag} sx={{ position: 'relative', top: '-350px', maxWidth: '100%' }} />
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
        )}
        {/* step 5 */}
        {step === 5 && (
          <Box
            sx={{
              ...styles.container,
              // maxWidth: '600px',
              width: '100%',
              gap: '30px'
            }}
          >
            <PdfForm data={data} setStep={setStep} />
          </Box>
        )}
        {/* step 6 */}
        {step === 6 && (
          <Box
            sx={{
              ...styles.container,
              // maxWidth: '600px',
              width: '100%',
              gap: '30px'
            }}
          >
            <PdfViewer uploadedEnCertificate={certificate} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
