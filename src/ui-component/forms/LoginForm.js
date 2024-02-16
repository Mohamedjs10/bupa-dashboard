import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import Switch from '@mui/material/Switch';
import { schema, initialValues } from '../../utils/schemas/loginSchema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from 'views/utilities/general';
import Box from '@mui/material/Box';
import { notifySuccess, notifyError } from 'utils/toastify';
import { useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    console.log(values);
    axios
      .post(`${baseUrl}/api/auth/tokens/`, {
        login: 's@test.com',
        password: 'test-123456'
      })
      .then((res) => {
        setIsLoading(false);
        notifySuccess('Login Successful!');
        navigate('/translate-certificate');
        console.log(res.data.tokens.access);
        localStorage.setItem('acc-token', res.data.tokens.access);
      })
      .catch((err) => {
        console.log(err.response.data.detail);
        setIsLoading(false);
        notifyError(err.response.data.detail);
      });
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit
  });

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
        src="https://svgur.com/i/13Ag.svg"
        sx={{
          width: '200px',
          my: '30px',
          mx: 'auto'
        }}
      />

      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      {!isLoading && (
        <>
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
              errors.email && touched.email
                ? `${styles.input} ${styles.bottom_margin} input-error`
                : `${styles.input} ${styles.bottom_margin}`
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
              errors.email && touched.email
                ? `${styles.input} ${styles.bottom_margin} input-error`
                : `${styles.input} ${styles.bottom_margin}`
            }
          ></input>
          <button className={styles.brown_button}>Login</button>
        </>
      )}
    </form>
  );
}
