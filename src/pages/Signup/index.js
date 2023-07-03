import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Logo from '../../assets/svg/logo.svg';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const {loading, handleSignup, validationSchema} = useSignup();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img src={Logo} alt="Logo" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          <Form>
            <div>
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
                <label htmlFor="email">メールアドレス</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">パスワード</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
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
                  <span>登録</span>
                </button>
                <p>または</p>
                <a href="/signin">
                  <p>アカウントでサインインする</p>
                </a>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
