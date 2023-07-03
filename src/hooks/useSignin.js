import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { signin } from '../stores/Auth/AuthAPIs';

export const useSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("この項目は必須です！"),
    password: Yup.string().required("この項目は必須です！"),
  });

  const handleSignin = useCallback((formValue) => {
    setLoading(true);

    dispatch(signin({
      formValue,
      cbSuccess: () => {
        navigate("/");
        window.location.reload();
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
    handleSignin,
    validationSchema,
  }
};
