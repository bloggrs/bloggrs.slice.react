import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from 'formik';
import RegisterPanel from "../../components/RegisterPanel";
import AuthenticationPanel from "../../components/AuthenticationPanel";
import LoginPanel from "../../components/LoginPanel";
 
const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={
        Yup.object().shape({
          username: Yup.string().min(4).required(),
          password: Yup.string().min(8).required()
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default props => {
    return (
      <AuthenticationPanel>
        <LoginPanel />
        <RegisterPanel />
      </AuthenticationPanel>
    )
}