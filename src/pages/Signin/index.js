import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Logo from '../../assets/svg/logo.svg';
import { useSignin } from '../../hooks/useSignin';

const Signin = () => {
  const {loading, handleSignin, validationSchema} = useSignin();
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img src={Logo} alt="Logo" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignin}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">ユーザー名</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">パスワード</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group button-login">
              <button type="submit" className="btn btn-primary btn-block login-button" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>ログイン</span>
              </button>
              <p>または</p>
              <a href="/signup">
                <p>新しいアカウントに登録する</p>
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signin;