import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Close from '../assets/close.png';
import Logo from '../assets/images/logo.png';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useForgetPasswordMutation } from '../redux-store/fetch/talentsSlice';
import { saveIp, saveEmail } from '../redux-store/fetch/authSlice';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email Address is required'),
});

const ForgetCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //creating IP state
  const [ip, setIP] = useState('');

  useEffect(() => {
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      console.log(res.data.IPv4);
      setIP(res.data.IPv4);
    };
    getData();
  }, []);

  const [
    forgetPassword,
    {
      data: forgetPasswordData,
      isSuccess: isForgetPasswordSuccess,
      isError: isForgetPasswordError,
      error: forgetPasswordError,
    },
  ] = useForgetPasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = async data => {
    console.log({ ...data, ipaddress: ip });
    const forgetPasswordData = {
      ...data,
      ipaddress: ip,
    };

    dispatch(saveEmail(forgetPasswordData.email));
    dispatch(saveIp(ip));

    reset({
      email: '',
    });

    // if(isForgetPasswordError) toast.error(forgetPasswordError?.data.error);

    if (!isForgetPasswordError) {
      await forgetPassword(forgetPasswordData);
    }
  };

  useEffect(() => {
    if (isForgetPasswordSuccess) {
      // setIsLoading(false);
      toast.success(forgetPasswordData.message);
      navigate('/passwordtoken');
      console.log('successful');
    }
    if (isForgetPasswordError) {
      // setIsLoading(false);
      toast.error(forgetPasswordError?.data.error);
    }
  }, [isForgetPasswordSuccess, isForgetPasswordError]);

  return (
    <div className="bg-white px-5 md:px-10  lg:px-20 py-10">
      <div className="hidden lg:flex justify-end">
        <img src={Close} alt="" />
      </div>
      <div className="flex justify-start lg:justify-center">
        <img src={Logo} alt="" />
      </div>
      <p className="lg:text-center mt-4 text-[45px] font-semibold">
        Forget Password
      </p>
      <p className="text-left lg:text-center mt-4 lg:w-[75%] mx-auto">
        Kindly enter the email address associated to your account to reset your
        password{' '}
      </p>
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="label" className="block font-bold text-lg mt-8">
          Email Address
        </label>
        <input
          {...register('email')}
          type="text"
          placeholder="Enter your email address here"
          className="w-full mt-2 border border-[#D6D8E7] px-5 rounded h-[58px] font-bold"
        />
        <div className="mt-14">
          <button
            // to="/resetpassword"
            className="text-white bg-black p-4 w-full rounded-lg"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetCard;
