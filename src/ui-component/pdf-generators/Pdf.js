import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import {
  intro,
  tableDescriptionPrefix,
  tableDescription,
  contractInfo,
  contractInfoPrefix,
  lastSection,
  lastSectionP1,
  lastSectionP2
} from '../../utils/generalUtils';
import { notifySuccess, notifyError } from 'utils/toastify';
import { convertToPDF } from 'utils/pdf-generators';

import Table from './Table.js';
const PdfViewer = ({ uploadedEnCertificate }) => {
  const [lastPageContent, setLastPageContent] = useState(1);
  // uploadedEnCertificate url
  const blob = new Blob([uploadedEnCertificate], { type: uploadedEnCertificate.type }); // type: file.type
  const uploadedEnCertificateUrl = URL.createObjectURL(blob);
  // translatedArCertificate url
  const [translatedArCertificate, setTranslatedArCertificate] = useState('');

  const styles = {
    link: { color: 'blue', textDecoration: 'underline' }
  };
  const phone = '01011302022';
  const phax = '01011302022';

  const contentRef = useRef(null);
  const [refSnapshot, setRefSnapshot] = useState(null);

  const sir = 'وليد هاني محمد عبد الخالق';
  useEffect(() => {
    if (lastPageContent === 1) {
      convertToPDF(contentRef.current, 1, setTranslatedArCertificate, refSnapshot, setRefSnapshot);
    }
  }, [lastPageContent]);
  return (
    <Box sx={{ width: '100%' }}>
      {/* top buttons */}
      <Box sx={{ display: 'flex', gap: '10px', mb: '20px' }}>
        <Button
          sx={{ fontSize: { xs: '10px', sm: '14px' }, p: { xs: '0px', sm: '5px' } }}
          variant={lastPageContent === 1 ? 'contained' : 'outlined'}
          onClick={() => {
            setLastPageContent(1);
          }}
        >
          View Arabic Certificate
        </Button>
        <Button
          sx={{ fontSize: { xs: '10px', sm: '14px' }, p: { xs: '0', sm: '5px' } }}
          variant={lastPageContent === 2 ? 'contained' : 'outlined'}
          onClick={() => {
            setLastPageContent(2);
            convertToPDF(contentRef.current, 2, setTranslatedArCertificate, refSnapshot);
          }}
        >
          Compare Ar & En Certificates
        </Button>
        <Button
          sx={{ fontSize: { xs: '10px', sm: '14px' }, p: { xs: '0', sm: '5px' } }}
          variant="outlined"
          onClick={() => {
            convertToPDF(contentRef.current, 3, setTranslatedArCertificate, refSnapshot);
          }}
        >
          Open Arabic Certificate
        </Button>
        <Button
          sx={{ fontSize: { xs: '10px', sm: '14px' }, p: { xs: '0', sm: '5px' } }}
          variant="outlined"
          onClick={() => {
            convertToPDF(contentRef.current, 4, setTranslatedArCertificate, refSnapshot);
          }}
        >
          Download Arabic Certificate
        </Button>
      </Box>

      {lastPageContent === 1 && (
        <Box ref={contentRef} dir="rtl">
          {/* 1st page */}
          <Box>الشهادة: {`MC-1328062-60001-702512-V2`}</Box>
          <Box>التاريخ: {`2023 11/10`}</Box>
          <Box
            sx={{
              display: 'flex',
              gap: '50px',
              my: '10px'
            }}
          >
            <Box
              sx={{
                bgcolor: '#D3D3D3',
                p: '10px',
                width: '300px'
              }}
            >
              <Box sx={{}}>السيد: {sir}</Box>
            </Box>
            <Box
              sx={{
                p: '10px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ fontWeight: 'bold' }}>بوبا إيجيبت للتأمين</Box>
              <Box sx={{}}>مبنى رقم /٣ب،١ قطعة ،٣٣ ميفيدا بيزنس بارك،</Box>
              <Box sx={{}}>التجمع الخامس،</Box>
              <Box sx={{}}>رقم بريدي ،١١٨٣٥</Box>
              <Box sx={{}}>القاهرة الجديدة، مصر</Box>
              <Box sx={{}}>{`هاتف: ${phone}`}</Box>
              <Box sx={{}}>{`فاكس: ${phax}`}</Box>
              <Box component="a" href="mailto:egyptcustserv@bupa.com" sx={styles.link}>
                {`egyptcustserv@bupa.com`}
              </Box>
              <Box component="a" href="http://www.bupaglobal.com" sx={styles.link}>
                www.bupaglobal.com
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              whiteSpace: 'pre-line'
            }}
          >
            {intro()}
          </Box>
          <Box sx={{ fontWeight: 'bold', whiteSpace: 'pre-line' }}>
            <Box component="span" sx={{ textDecoration: 'underline' }}>
              {tableDescriptionPrefix()}
            </Box>
            <Box component="span">{tableDescription()}</Box>
          </Box>
          <Box>
            <Box sx={{ fontWeight: 'bold' }}>{contractInfoPrefix()}</Box>
            <Box>{contractInfo()}</Box>
          </Box>
          <Box sx={{ fontWeight: 'bold', whiteSpace: 'pre-line' }}>
            <span>{lastSectionP1()} </span>
            <a href="https://fra.gov.eg/" style={styles.link}>
              /https://fra.gov.eg
            </a>
            <span> {lastSectionP2()}</span>
          </Box>

          <Table />
        </Box>
      )}
      {lastPageContent === 2 && (
        <Box>
          <iframe title="PDF Viewer" src={translatedArCertificate} width={`${2480 / 4}px`} height={`${3508 / 4}px`} frameBorder="0" />
          <iframe title="PDF Viewer" src={uploadedEnCertificateUrl} width={`${2480 / 4}px`} height={`${3508 / 4}px`} frameBorder="0" />
        </Box>
      )}
    </Box>
  );
};

export default PdfViewer;
