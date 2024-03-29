import { notifySuccess, notifyError } from './toastify';
import html2pdf from 'html2pdf.js';

export const convertToPDF = (content, option, setTranslatedArCertificate, refSnapshot, setRefSnapshot) => {
  if (option === 1) {
    setRefSnapshot(content);
    return;
  }

  if (refSnapshot) {
    //* functionality
    html2pdf()
      .from(refSnapshot)
      .set({
        margin: [1.5, 0.5, 1.5, 0.5],
        filename: 'document.pdf',
        html2canvas: { scale: 5 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        console.log(pdf);
        var totalPages = pdf.internal.getNumberOfPages();
        for (var i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          //^ set page
          pdf.setFontSize(10);
          //^ add page number
          // pdf.setTextColor(150);
          pdf.text(`${i}`, pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() / 2 + 5.3);
          //^ add header logo
          pdf.addImage(
            'https://iili.io/J1p1FP1.jpg',
            'JPEG',
            pdf.internal.pageSize.getWidth() / 2 - 3.8,
            pdf.internal.pageSize.getHeight() / 2 + 4.2,
            7.6,
            1
          );
          //^ add footer (as image)
          pdf.addImage(
            'https://iili.io/J1pp1Wu.jpg',
            'JPEG',
            pdf.internal.pageSize.getWidth() / 2 + 2.75,
            pdf.internal.pageSize.getHeight() / 2 - 5.3,
            1,
            1
          );
        }
        if (option === 2) {
          // setTranslatedArCertificate
          var pdfData = pdf.output('blob');
          var pdfUrl = URL.createObjectURL(pdfData);
          setTranslatedArCertificate(`${pdfUrl}`);
        }
        if (option === 3) {
          // open in new tab
          pdf.output('dataurlnewwindow');
        }
        if (option === 4) {
          // save pdf to pc
          pdf.save('document.pdf');
        }
      })
      .catch((error) => {
        notifyError('Error while generating PDF...');
      });
  }
};
