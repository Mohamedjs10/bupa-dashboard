export const baseUrl = 'https://api.bupa.linnaea.ai';
import axios from 'axios';

export const uploadDocuments = (certificate, idImages, setLoading, setData, setStep) => {
  console.log(certificate);
  console.log(idImages);
  // **
  window.stop();
  setLoading(true);
  //   setIsUploaded(false);
  //   setFieldValue('image', '');
  // **
  axios
    .post(
      `${baseUrl}/api/documents`,
      {
        certificate: certificate,
        national_ids: idImages
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('acc-token')}`
        }
      }
    )
    .then((res) => {
      console.log(res);
      setStep(5);
      //   setData(res?.data);
      //   setLoading(false);
    });
  // **
};
