import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import Switch from '@mui/material/Switch';
import { schema, initialValues } from '../../utils/schemas/loginSchema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';
export default function LoginForm({ type, setOpen, setForceUpdate, setData, setIsLoading, currentId }) {
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
    <form
      className={styles.container}
      onSubmit={handleSubmit}
      style={{
        overflow: 'auto',
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        top: '100px',
        margin: '20px',
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
      }}
    >
      <Box
        component="img"
        src="./logo.svg"
        sx={{
          width: '200px',
          my: '30px',
          mx: 'auto'
        }}
      />
      {/* <div className={styles.title}>Hi admin, Please log in!</div> */}

      {/* email */}
      <div className={styles.label}>
        <span>Email</span>
        <span className={styles.error}> *</span>
        {errors.email && touched.email && <span className="error">{errors.email}</span>}
      </div>
      <input
        // className={`${styles.input} ${styles.bottom_margin}`}
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? `${styles.input} ${styles.bottom_margin} input-error` : `${styles.input} ${styles.bottom_margin}`
        }
        placeholder="Your email"
      ></input>

      {/* password */}
      <div className={styles.label}>
        <span>Password</span>
        <span className={styles.error}> *</span>
        {errors.password && touched.password && <span className="error">{errors.password}</span>}
      </div>
      <input
        placeholder="Your password"
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? `${styles.input} ${styles.bottom_margin} input-error` : `${styles.input} ${styles.bottom_margin}`
        }
      ></input>

      <button className={styles.brown_button}>Login</button>
    </form>
  );
}
