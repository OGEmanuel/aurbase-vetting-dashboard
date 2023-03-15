import { useEffect, useRef, useState } from 'react';
import useOTPInput from '../hooks/use-input-otp';
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

const OTP = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);

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

  // Focus on first input field on reload
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
    console.log(e);
    const charCode = typeof e.which == 'undefined' ? e.keyCode : e.which;
    console.log(charCode);
    console.log(e.keyCode);
    const charStr = String.fromCharCode(charCode);
    console.log(charStr);
    if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  };

  const handleSubmit = () => {
    setStart(true);
  };

  return (
    <section className="bg-bg-2 px-20 pt-10 pb-20">
      <div className="flex justify-between items-center mb-10">
        <img src={logo} alt="" />
        <Link to="/" className="flex items-center gap-2">
          <img src={back} alt="" />
          <p className="font-semibold text-2xl">Go Back to website</p>
        </Link>
      </div>
      <div className="bg-bg-1 rounded-custom text-center font-semibold pb-10 mb-10">
        <img src={logo2} alt="" className="w-max mx-auto" />
        <h1 className="text-[2rem]">
          Kindly Enter the OTP to verify your Account
        </h1>
        <p className="text-lg w-[60%] mx-auto mb-7">
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
          <div className="flex md:gap-20 gap-3 mb-10">
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
            />
          </div>
          <button className="bg-black font-semibold text-lg px-5 py-3 text-white rounded-custom-xs">
            Validate OTP
          </button>
        </form>
        <p className="font-semibold text-xl">
          Didn’t receive an OTP? Resend in{' '}
          <span className="text-secondary">
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
          </span>
        </p>
      </div>
      <div className="flex bg-white mx-3 justify-between px-7 items-center py-3">
        <img src={facebook} alt="" />
        <img src={amazon} alt="" />
        <img src={apple} alt="" />
        <img src={netflix} alt="" />
        <img src={google} alt="" />
        <img src={microsoft} alt="" />
      </div>
    </section>
  );
};

export default OTP;
