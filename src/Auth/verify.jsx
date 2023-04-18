import { useEffect, useRef, useState } from 'react';
import useOTPInput from '../hooks/use-input-otp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import logo from '../assets/logo.svg';
import back from '../assets/back-arrow.svg';
import logo2 from '../assets/logo-plain.svg';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg';
import amazon from '../assets/amazon.svg';
import apple from '../assets/apple.svg';
import netflix from '../assets/netflix.svg';
import google from '../assets/google.svg';
import microsoft from '../assets/microsoft.svg';
// import { useForm } from 'react-hook-form';
import {
  useReVerifyUserMutation,
  useVerifyUserMutation,
} from '../redux-store/fetch/talentsSlice';
import { useSelector } from 'react-redux';

const formatTime = time => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  return minutes + ':' + seconds;
};

const TIME_IN_SECONDS = 60;

const OTP = () => {
  const [countdown, setCountdown] = useState(TIME_IN_SECONDS);
  const [isLoading, setIsLoading] = useState(false);

  const timerId = useRef();

  const email = useSelector(state => state.auth.email);
  const ip = useSelector(state => state.auth.ip);
  const navigate = useNavigate();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);

  const {
    value: enteredFirstField,
    valueChangeHandler: firstFieldChangeHandler,
  } = useOTPInput();

  const {
    value: enteredSecondField,
    valueChangeHandler: secondFieldChangeHandler,
  } = useOTPInput();

  const {
    value: enteredThirdField,
    valueChangeHandler: thirdFieldChangeHandler,
  } = useOTPInput();

  const {
    value: enteredFourthField,
    valueChangeHandler: fourthFieldChangeHandler,
  } = useOTPInput();

  const {
    value: enteredFifthField,
    valueChangeHandler: fifthFieldChangeHandler,
  } = useOTPInput();

  const {
    value: enteredSixthField,
    valueChangeHandler: sixthFieldChangeHandler,
  } = useOTPInput();

  const firstInputRef = useRef();

  // Focus on first input field on rerender
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  // Focus on next and previous input fields (on delete or backspace press);
  const inputFocus = e => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };

  // Avoids strings in Input field for Firefox
  const inpNum = e => {
    e = e || window.event;
    const charCode = typeof e.which == 'undefined' ? e.keyCode : e.which;
    const charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  };

  const otp = [
    enteredFirstField,
    enteredSecondField,
    enteredThirdField,
    enteredFourthField,
    enteredFifthField,
    enteredSixthField,
  ];

  const validateOTP =
    enteredFirstField.length === 1 &&
    enteredSecondField.length === 1 &&
    enteredThirdField.length === 1 &&
    enteredFourthField.length === 1 &&
    enteredFifthField.length === 1 &&
    enteredSixthField.length === 1;

  const [
    verifyUser,
    {
      data: verifyData,
      isSuccess: isVerifySuccess,
      isError: isVerifyError,
      error: verifyError,
    },
  ] = useVerifyUserMutation();

  const [reVerifyUser] = useReVerifyUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    if (validateOTP && !verifyError)
      await verifyUser({
        ipaddress: ip,
        token: otp.join(''),
        email: email,
      });
  };

  const handleResend = async () => {
    await reVerifyUser({
      ipaddress: ip,
      email: email,
    });
    setCountdown(TIME_IN_SECONDS);
  };

  useEffect(() => {
    if (isVerifySuccess) {
      setIsLoading(false);
      toast.success('User Verification Successful');
      navigate('/', { replace: true });
    }
    if (!validateOTP && isVerifyError) {
      setIsLoading(false);
      toast.error('User Verification not successful. Please, try again!');
    }
  }, [isVerifySuccess, isVerifyError]);

  return (
    <section className="xl:bg-bg-2 px-5 md:px-10 xl:px-20 pt-10 pb-20 min-h-screen">
      <div className="max-width flex justify-between items-end mb-10">
        <img src={logo} alt="" className="w-[8rem] md:w-[10rem] xl:w-auto" />
        <Link to="/" className="flex items-center gap-2">
          <img src={back} alt="" className="w-[1rem] md:w-[2rem] xl:w-auto" />
          <p className="font-semibold text-xs md:text-2xl">
            Go Back to website
          </p>
        </Link>
      </div>
      <div className="max-width bg-bg-1 rounded-custom text-center font-semibold pb-10 mb-5 md:mb-10">
        <img
          src={logo2}
          alt=""
          className="w-[5rem] md:w-[7rem] xl:w-max mx-auto"
        />
        <h1 className="text-sm md:text-[2rem] mb-2.5 md:mb-5">
          Kindly Enter the OTP to verify your Account
        </h1>
        <p className="text-xs md:text-lg w-[90%] md:w-[80%] xl:w-[60%] mx-auto mb-7">
          Please take a moment to check your email address. We sent an email
          with an OTP to{' '}
          <span className="font-bold">joemicky689@gmail.com.</span> If you can’t
          find it in your Inbox, check your spam folder
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-5"
        >
          <div className="flex md:gap-20 gap-3 mb-7 md:mb-10">
            <input
              ref={firstInputRef}
              type="number"
              onKeyPress={e => inpNum(e)}
              autoComplete="off"
              name="field-1"
              className="otp-input"
              value={enteredFirstField}
              maxLength="1"
              tabIndex="1"
              onKeyUp={e => inputFocus(e)}
              onChange={firstFieldChangeHandler}
              // {...register('fieldOne')}
            />
            <input
              type="number"
              onKeyPress={e => inpNum(e)}
              name="field-2"
              className="otp-input"
              value={enteredSecondField}
              length="1"
              tabIndex="2"
              onKeyUp={e => inputFocus(e)}
              onChange={secondFieldChangeHandler}
              // {...register('fieldTwo')}
            />
            <input
              type="number"
              onKeyPress={e => inpNum(e)}
              name="field-3"
              className="otp-input"
              value={enteredThirdField}
              length="1"
              tabIndex="3"
              onKeyUp={e => inputFocus(e)}
              onChange={thirdFieldChangeHandler}
              // {...register('fieldThree')}
            />
            <input
              type="number"
              onKeyPress={e => inpNum(e)}
              name="field-4"
              className="otp-input"
              value={enteredFourthField}
              length="1"
              tabIndex="4"
              onKeyUp={e => inputFocus(e)}
              onChange={fourthFieldChangeHandler}
              // {...register('fieldFour')}
            />
            <input
              type="number"
              onKeyPress={e => inpNum(e)}
              name="field-5"
              className="otp-input"
              value={enteredFifthField}
              length="1"
              tabIndex="5"
              onKeyUp={e => inputFocus(e)}
              onChange={fifthFieldChangeHandler}
              // {...register('fieldFive')}
            />
            <input
              type="number"
              onKeyPress={e => inpNum(e)}
              name="field-6"
              className="otp-input"
              value={enteredSixthField}
              length="1"
              tabIndex="6"
              onKeyUp={e => inputFocus(e)}
              onChange={sixthFieldChangeHandler}
              // {...register('fieldSix')}
            />
          </div>
          <button className="bg-black font-semibold text-xs md:text-lg px-5 py-3 text-white rounded-custom-xs">
            {isLoading ? 'Validating...' : 'Validate OTP'}
          </button>
        </form>
        <p className="font-semibold text-xs md:text-xl">
          Didn’t receive an OTP?{' '}
          {countdown > 0 ? (
            'Resend in'
          ) : (
            <span
              onClick={handleResend}
              className="text-secondary cursor-pointer"
            >
              Resend
            </span>
          )}{' '}
          {countdown > 0 && (
            <span className="text-secondary">{formatTime(countdown)}</span>
          )}
        </p>
      </div>
      <div className="max-width flex flex-wrap bg-bg-2 xl:bg-white justify-center xl:justify-between gap-3 md:gap-5 xl:gap-0 xl:px-7 items-start py-3 rounded-custom-lg">
        <img src={facebook} alt="" className="w-[4.375rem] md:w-auto" />
        <img src={amazon} alt="" className="w-[3.75rem] md:w-auto" />
        <img src={apple} alt="" className="w-[4.0625rem] md:w-auto" />
        <img src={netflix} alt="" className="w-[3.75rem] md:w-auto" />
        <img src={google} alt="" className="w-[4.375rem] md:w-auto" />
        <img src={microsoft} alt="" className="w-[5rem] md:w-auto" />
      </div>
    </section>
  );
};

export default OTP;
