import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo.svg';
import EyeSlash from '../assets/EyeSlash.svg';
import dropdown from '../assets/dropdown.svg';
import curlyArrowDown from '../assets/curlyArrowDown.svg';
import curlyArrowUp from '../assets/curlyArrowUp.svg';
import wavyLeft from '../assets/wavyLeft.svg';
import wavyRight2 from '../assets/wavyRight2.svg';
import blackGirl from '../assets/blackGirl.svg';
import blackBoy from '../assets/blackBoy.svg';
import baldBoy from '../assets/baldBoy.svg';
import whiteBoy from '../assets/whiteBoy.svg';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegisterUserMutation } from '../redux-store/fetch/talentsSlice';
import { saveEmail, saveIp } from '../redux-store/fetch/authSlice';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email Address is required'),
  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password Must Match')
    .required('Confirm Password is Required'),
  terms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

// {
//   "track_id": "1",
//  "email": "nath@gmail.com",
//  "password": "12345678" ,
//  "status": "active",
//  "ipaddress": "283:234:0:12",
//  "how_do_you": "Twitter",
//  }

const Apply = () => {
  const [showTracks, setShowTracks] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //creating IP state
  const [ip, setIP] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      console.log(res.data);
      setIP(res.data.IPv4);
    };
    getData();
  }, []);

  const trackDropdownHandler = () => {
    setShowTracks(!showTracks);
  };
  const mediumDropdownHandler = () => {
    setShowMedia(!showMedia);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = async data => {
    console.log(data);
    setIsLoading(true);
    if (!isRegisterError)
      await registerUser({
        track_id: '1',
        email: data.email,
        password: data.password,
        status: 'active',
        ipaddress: ip,
        how_do_you: 'Twitter',
        deleted: '0',
      });
    dispatch(saveEmail(data.email));
    dispatch(saveIp(ip));
    reset({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();
  useEffect(() => {
    if (isRegisterSuccess) {
      setIsLoading(false);
      toast.success(registerData.message);
      console.log('Register successful');
      navigate('/verify');
    }
    if (isRegisterError) {
      setIsLoading(false);
      toast.error(registerError?.data.error);
    }
  }, [isRegisterSuccess, isRegisterError]);

  return (
    // <section className="pt-[147px] pb-[191px] bg-[#FFFFFFF2] h-screen overflow-y-auto flex items-center justify-center ">
    <section className="">
      {/* <AuthLayout> */}
      <div className="relative  bg-bg-2 h-full overflow-x-hidden overflow-y-auto m-a flex items-center justify-center ">
        <img
          src={blackGirl}
          alt="bitmoji"
          className="z-[10] absolute top-[110px] left-[65px]"
        />
        <img
          src={whiteBoy}
          alt="bitmoji"
          className="z-[10] absolute top-[102px] right-[50px]"
        />
        <img
          src={baldBoy}
          alt="bitmoji"
          className="z-[10] absolute bottom-[210px] left-[50px]"
        />
        <img
          src={blackBoy}
          alt="bitmoji"
          className="z-[10] absolute bottom-[335px] right-[70px]"
        />
        <img
          src={curlyArrowDown}
          alt="Arrow pointing down"
          className="z-[5] absolute bottom-[558px] left-[-50px]"
        />
        <img
          src={curlyArrowUp}
          alt="Arrow pointing up"
          className="z-[5] absolute bottom-[578px] right-[-40px]"
        />
        <img
          src={wavyLeft}
          alt="Abstract waves svg"
          className="z-[5] absolute top-0 left-0"
        />
        <img
          src={wavyRight2}
          alt="Abstract waves svg"
          className="z-[5] absolute bottom-0 right-0"
        />

        <div className="md:mt-[147px] md:mb-[191px] rounded-[10px] z-[10] bg-white w-[845px] px-7 md:px-[159px] pt-[79px] md:pt-[62px] pb-[121px] md:pb-[51px] m-auto flex flex-col justify-center">
          <img
            src={logo}
            alt="Aurbase Logo"
            className="md:w-max md:h-auto flex md:self-center w-[176px] h-[56px]"
          />
          <h4 className="md:text-center text-2xl md:text-[32px] font-[600] pt-12 md:pt-[18px] pb-11 md:pb-9">
            Apply to Join our Talent Network
          </h4>

          <div className="mb-[30px]">
            <p className="pb-[6px] text-lg md:text-xl font-[600]">Track</p>
            <div className="relative">
              <img
                onClick={trackDropdownHandler}
                src={dropdown}
                alt="Dropdown Icon"
                className="pointer-events-none absolute bottom-[24px] right-[25px] w-[15px] h-2.5"
              />
              <select
                name=""
                id=""
                className=" appearance-none flex items-center justify-between md:text-xl font-[600] w-full h-[58px] py-4 pl-[23px] pr-[25px] rounded border border-[#D6D8E7] "
              >
                {/* I am a Developer */}

                <option value="" className="">
                  I am a Developer
                </option>
                {/* <option value="" className="">
                  I am a Product Manager
                </option> */}
                {/* <option value="" className="">
                  I am a Product Designer
                </option> */}
              </select>
            </div>
            {/* {showTracks && (
              <div className="h-[58px] md:text-xl font-[600] w-full pl-[23px] mt-4 bg-white shadow-md">
                <li className=" list-none">I am a Product Manager</li>
              </div>
            )} */}
          </div>
          <div className="mb-[30px]">
            <label
              htmlFor="email"
              className="block pb-[6px] text-xl font-[600]"
            >
              Email Address
            </label>
            <input
              {...register('email')}
              type="text"
              id="email"
              placeholder="sample@gmail.com"
              className="w-full h-[58px] py-4 pl-4 placeholder-[#A0A3BD] rounded-[4px] border border-[#D6D8E7] "
            />
          </div>
          <div className="relative mb-[30px]">
            <img
              onClick={togglePassword}
              src={EyeSlash}
              alt="Eye Slash SVG"
              className="absolute bottom-4 right-6"
            />
            <label htmlFor="" className="block pb-[6px] text-xl font-[600]">
              Password
            </label>
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="**********"
              className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
            />
          </div>
          <div className="relative mb-[30px]">
            <img
              onClick={toggleConfirmPassword}
              src={EyeSlash}
              alt="Eye Slash SVG"
              className="absolute bottom-4 right-6"
            />
            {/* <img src={EyeSlash} alt="Eye Slash SVG" className="absolute bottom-4 right-6" /> */}
            <label htmlFor="" className="block pb-[6px] text-xl font-[600]">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              // rhf={{ ...register('confirmPassword') }}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="**********"
              className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
            />
          </div>

          <div className="">
            <p className="pb-[6px] text-xl font-[600]">
              How do you hear about us ?
            </p>

            <div className="relative">
              <img
                onClick={mediumDropdownHandler}
                src={dropdown}
                alt="Dropdown Icon"
                className="pointer-events-none absolute bottom-[24px] right-[25px] w-[15px] h-2.5"
              />
              <select
                name=""
                id=""
                className=" appearance-none flex items-center justify-between  md:text-xl font-[600] w-full h-[58px] py-4 pl-[23px] pr-[25px] rounded-[4px] border border-[#D6D8E7] "
              >
                {/* Twitter */}
                <option value="">Twitter</option>
                {/* <option value="">Facebook</option> */}
              </select>
            </div>
            {/* {showMedia && (
              <div className="h-[58px] text-xl font-[600] w-full pl-[23px] mt-4 bg-white shadow-md">
                <li className=" list-none">Facebook</li>
              </div>
            )} */}
          </div>
          <div className="mt-[22px] items-start flex gap-2">
            <input type="checkbox" {...register('terms')} />
            <p className="text-[10px] md:text-sm leading-[18px] mt-[-2px]">
              You acknowledge that the Aurbase screening procedure is
              confidential and that you will not reveal any information about it
              publicly. You acknowledge that you have read and agree to our
              terms and conditions, privacy and policy, and cookie policy by
              submitting.
            </p>
          </div>

          <button
            onClick={handleSubmit(submitForm)}
            className="bg-black w-full font-[600] text-center text-white mt-[26px] md:mt-[23px] py-[18px] rounded-[4px] shadow-[0px_4px_8px_0px_#39B54A0A]
"
          >
            {!isLoading ? 'Apply Now' : 'Applying...'}
          </button>
          <p className="text-[#3A3A3A80] text-center pt-[22px] md:pt-[14px]">
            Already a member?{' '}
            <Link to="/" className="text-black cursor-pointer">
              Login now!
            </Link>
          </p>
        </div>
      </div>
      {/* </AuthLayout> */}
    </section>
  );
};

export default Apply;
