import { useEffect, useRef, useState } from 'react';
import useOTPInput from '../hooks/use-input-otp';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useForm } from 'react-hook-form';
import { useVerifyUserMutation } from '../redux-store/fetch/talentsSlice';
import { useSelector } from 'react-redux';

const OTP = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);
  // const email = useSelector(state => state.auth.email);
  // const ip = useSelector(state => state.auth.ip);

  // const schema = yup.object().shape({
  //   fieldOne: yup.number().integer().required(),
  //   fieldTwo: yup.number().integer().required(),
  //   fieldThree: yup.number().integer().required(),
  //   fieldFour: yup.number().integer().required(),
  //   fieldFive: yup.number().integer().required(),
  // });

  // const { register, handleSubmit } = useForm({
  //   resolver: yupResolver(schema),
  // });

  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

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

  // const [
  //   registerUser,
  //   {
  //     data: registerData,
  //     isSuccess: isRegisterSuccess,
  //     isError: isRegisterError,
  //     error: registerError,
  //   },
  // ] = useRegisterUserMutation();

  const [
    verifyUser,
    // {
    //   data: otpData,
    //   isSuccess: isVerificationSuccessful,
    //   isError: isVerificationError,
    //   error: verifyError,
    // },
  ] = useVerifyUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateOTP)
      await verifyUser({
        ipaddress: '283:234:0:12',
        token: otp.join(''),
        email: 'nath@gmail.com',
      });
    console.log(validateOTP);
    return {
      enteredFirstField: '',
      enteredSecondField: '',
      enteredThirdField: '',
      enteredFourthField: '',
      enteredFifthField: '',
      enteredSixthField: '',
    };
  };

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
            Validate OTP
          </button>
        </form>
        <p className="font-semibold text-xs md:text-xl">
          Didn’t receive an OTP? Resend in{' '}
          <span className="text-secondary">
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
          </span>
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
