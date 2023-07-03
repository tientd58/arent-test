import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { signup } from '../stores/Auth/AuthAPIs';

export const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "ユーザー名は 3 ～ 20 文字でなければなりません。",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("この項目は必須です！"),
    email: Yup.string()
      .email("これは無効な電子メールです。")
      .required("この項目は必須です！"),
    password: Yup.string()
      .test(
        "len",
        "パスワードは 6 ～ 40 文字でなければなりません。",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("この項目は必須です！"),
  });

  const handleSignup = useCallback((formValue) => {
    setLoading(true);

    dispatch(signup({
      formValue,
      cbSuccess: (message) => {
        navigate("/signin");
        toast.success(message);
      },
      cbFailure: (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        toast.error(resMessage);
      },
    }));
  }, [dispatch, navigate]);

  return {
    loading,
    handleSignup,
    validationSchema,
  }
};
