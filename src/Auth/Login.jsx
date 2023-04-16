import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import EyeSlash from '../assets/EyeSlash.svg';
import curlyArrowDown from '../assets/curlyArrowDown.svg';
import curlyArrowUp from '../assets/curlyArrowUp.svg';
import wavyLeft from '../assets/wavyLeft.svg';
import wavyRight from '../assets/wavyRight.svg';
import blackGirl from '../assets/blackGirl.svg';
import blackBoy from '../assets/blackBoy.svg';
import baldBoy from '../assets/baldBoy.svg';
import whiteBoy from '../assets/whiteBoy.svg';

import axios from 'axios';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginUserMutation } from '../redux-store/fetch/talentsSlice';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email Address is required'),
  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'password must be at least 8 characters'),
});

const Login = () => {
  const [device, setDevice] = useState('');
  //creating IP state
  const [ip, setIP] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isMobile) setDevice('Mobile');
    if (isTablet) setDevice('Tablet');
    if (isDesktop) setDevice('Desktop');

    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      console.log(res.data);
      setIP(res.data.IPv4);
    };
    getData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = async data => {
    // getData();
    const loginData = {
      ...data,
      ipaddress: ip,
      device,
    };
    console.log(loginData);

    if(!isLoginError) await loginUser(loginData);
    reset({
      email: '',
      password: '',
    });
    console.log(isMobile, isTablet, isDesktop);

    // //To store data for implementation of protected routes
    // sessionStorage.setItem('data', JSON.stringify(loginData));
  };

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  useEffect(() => {
    if (isLoginSuccess) {
      console.log('login successful');
          //To store data for implementation of protected routes
    sessionStorage.setItem('data', JSON.stringify(loginData));
      navigate('/dashboard');
    }
  }, [isLoginSuccess]);
  // const handleLogin = async () => {
  //   if (email && password) {
  //     await loginUser({ email, password, ipaddress, device });
  //   }
  // };

  return (
    <section className="relative md:pt-[147px] md:pb-[191px] bg-bg-2 h-full overflow-y-auto flex items-center justify-center ">
      <img
        src={blackGirl}
        alt=""
        className="z-[10] absolute top-[110px] left-[65px]"
      />
      <img
        src={whiteBoy}
        alt=""
        className="z-[10] absolute top-[102px] right-[119px]"
      />
      <img
        src={baldBoy}
        alt=""
        className="z-[10] absolute bottom-[74px] left-[137px]"
      />
      <img
        src={blackBoy}
        alt=""
        className="z-[10] absolute bottom-[99px] right-[114px]"
      />
      <img
        src={curlyArrowDown}
        alt=""
        className="z-[5] absolute bottom-[258px] left-[0px]"
      />
      <img
        src={curlyArrowUp}
        alt=""
        className="z-[5] absolute bottom-[340px] right-[0px]"
      />
      <img src={wavyLeft} alt="" className="z-[5] absolute top-0 left-0" />
      <img src={wavyRight} alt="" className="z-[5] absolute bottom-0 right-0" />
      {/* <AuthLayout> */}
      <div className="rounded-[10px] z-[10] bg-white w-[700px] px-7 md:px-[115.5px] pt-[89px] md:pt-[67px] pb-[217px] md:pb-[73px] m-auto flex flex-col justify-center">
        <img
          src={logo}
          alt="Aurbase Logo"
          className="md:w-max md:h-auto flex md:self-center w-[176px] h-[56px]"
        />
        <h3 className="text-2xl md:text-[45px] md:leading-[54px] md:text-center font-[600] pt-12 md:pt-4">
          Welcome Back
        </h3>
        <p className="max-w-[263px] md:max-w-none pt-2 md:pt-3 pb-[22px] text-sm md:text-base md:text-center text-[#4E4B66]">
          To continue using our services, Log in to your account
        </p>

        {/* <form action=""></form> */}
        <div className="mb-7">
          <label
            htmlFor="email"
            className="block pb-2 text-[#4E4B66] text-lg font-[900]"
          >
            Email Address
          </label>
          <input
            // ref={register}
            // name='email'
            {...register('email')}
            type="text"
            id="email"
            placeholder="Enter your email address here"
            className="w-full h-[58px] py-4 pl-4 placeholder-[#A0A3BD] rounded-[4px] border border-[#D6D8E7]"
          />
          <p className="text-red-500 -mt-3">{errors.email?.message}</p>
        </div>
        <div className="relative">
          <img
            onClick={togglePassword}
            src={EyeSlash}
            alt="Eye Slash SVG"
            className="absolute bottom-4 right-6"
          />
          <label
            htmlFor=""
            className="block pb-2 text-[#4E4B66] text-lg font-[900]"
          >
            Password
          </label>
          <input
            // ref={register}
            // name='password'
            {...register('password')}
            // {...register("password", {
            //   required: "required",
            //   minLength: {
            //     value: 5,
            //     message: "min length is 5"
            //   }
            // })}
            // rhf={{ ...register('password') }}
            type={showPassword ? 'text' : 'password'}
            placeholder="**********"
            className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
          />
        </div>
        <p className="text-red-500 -mt-3">{errors.password?.message}</p>

        <div className="font-[900] text-[#4E4B66] flex justify-between items-center mt-[15px]">
          <div className="flex gap-2 md:gap-[11px] items-center">
            <input type="checkbox" />
            <p className="">Remember me</p>
          </div>
          <Link to="/forgetpassword" className="">
            Forgot Password
          </Link>
        </div>

        <button
          onClick={handleSubmit(submitForm)}
          to="/dashboard"
          className="bg-black w-full text-center text-white mt-10 md:mt-[49px] py-[18px] rounded-[8px] shadow-[0px_4px_8px_0px_#39B54A0A]
"
        >
          Log In
        </button>
        <p className="pt-[43px] text-[#3A3A3A80] md:pt-4 text-center">
          Not yet a member?{' '}
          <Link to="/apply" className="text-black cursor-pointer">
            {' '}
            Create an account now!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
