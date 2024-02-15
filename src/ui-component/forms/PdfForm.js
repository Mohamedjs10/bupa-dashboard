import React, { useEffect, useState } from 'react';
import styles from './PdfForm.module.css';
import Switch from '@mui/material/Switch';
import { schema, initialValues } from '../../utils/schemas/pdfSchema.js';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';
export default function PdfForm({ type, setOpen, setForceUpdate, setData, setIsLoading, currentId }) {
  const theme = useTheme();

  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [customColors, setCustomColors] = useState([]);
  const [currentColor, setCurrentColor] = useState([]);
  // const [currentItem, setCurrentItem] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const sizes = ['sm', 'm', 'l', 'xl', 'xxl', 'xxxl'];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  if (type == 'product_update') {
  }

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
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
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit
  });
  console.log(values);
  console.log(errors);

  function getStyles(name, sizes, theme) {
    return {
      fontWeight: sizes.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
  }
  const handleSelectChange = (event) => {
    const {
      target: { value }
    } = event;
    setFieldValue('sizes', typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit} style={{ overflow: 'auto', width: '100%' }}>
      <div className={styles.title}>Edit Empty Fields </div>

      {/* nameEn */}
      <Box className={styles.input_container_full}>
        <div className={styles.label}>
          <span>English name</span>
          <span className={styles.error}> *</span>
          {errors.nameEn && touched.nameEn && <span className="error">{errors.nameEn}</span>}
        </div>
        <input
          disabled={true}
          value={values.nameEn}
          onChange={handleChange}
          id="nameEn"
          type="nameEn"
          onBlur={handleBlur}
          className={
            errors.nameEn && touched.nameEn
              ? `${styles.input} ${styles.bottom_margin} input-error`
              : `${styles.input} ${styles.bottom_margin}`
          }
          placeholder="Your last name"
        ></input>
      </Box>

      <button className={styles.brown_button} type="submit">
        Create
      </button>
    </form>
  );
}
