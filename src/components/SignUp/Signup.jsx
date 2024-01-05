import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Signup/Signup.css";
import CustomLabel from "../CustomComponents/CustomLabel/CustomLabel";
import CustomInputBox from "../CustomComponents/CustomInputBox/CustomInputBox";
import CustomError from "../CustomComponents/CustomError/CustomError";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import InfoBox from "../InfoBox/InfoBox";
import BackButton from "../Backbutton/BackButton";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [Emailerror, setEmailError] = useState("error");
  const [opterror, setotpError] = useState("error");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const [otpVisible, setOtpVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [countdown, setCountdown] = useState(0);

  let validateEmail = false;
  let validateOtp = false;

  const validateEmailFunc = () => {
    const emailRegex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;

    if (email.trim() === "") {
      setEmailError("Email can not be empty");
    } else {
      if (!emailRegex.test(email)) {
        setEmailError("Email is not valid");
      } else {
        validateEmail=true;
        setEmailError("");
      }
    }
  };

  const handleGenerateOtp = () => {
    if (isButtonDisabled) {
      return;
    }
    validateEmailFunc();
    if (validateEmail) {
      setOtpVisible(true);
      setCountdown(30);
      setTextVisible(true);
      setIsButtonDisabled(true);
      setIsNextButtonDisabled(false);

      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(countdownInterval);
        setIsButtonDisabled(false);
      }, 30000);
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      setTextVisible(false);
    }
  }, [countdown]);

  const submitHandler = (e) => {
    // console.log(isNextButtonDisabled);
    e.preventDefault();
    if (isNextButtonDisabled) {
      return;
    }

    if (otp.trim() === "") {
      setotpError("OTP can not be empty");
    } else {
      if (otp != 123456) {
        setotpError("OTP is not correct");
      } else {
        validateOtp = true;
        setotpError("");
      }
    }
    console.log(validateEmail);
    console.log(validateOtp);
    if ( validateOtp) {
      navigate("/signup/pin");
    }
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="main">
      {/* <div className="backButton-div">
        <div className="backButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            onClick={goBack}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.1497 23.3493L12.5012 25L0 12.5011L12.5012 0L14.1519 1.65072L3.30159 12.5011L14.1497 23.3493Z"
              fill="#011627"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      </div>  */}
            <BackButton />
      <div className="swift-signup-main">
        <div className="swift-signup-main-info">
          <InfoBox />
        </div>
        <div className="swift-signup-main-form">
          <div className="swift-signup-main-form-div">
            <div className="swift-signup-main-form-div-1">
              <div className="swift-signup-main-form-heading">
                <p>
                  <i style={{ fontWeight: 300 }}>swift</i>
                  folios
                </p>
              </div>
              <div className="swift-signup-main-form-email">
                <div className="swift-signup-main-form-label">
                  <CustomLabel labelText="Email" />
                </div>
                <CustomInputBox
                  type="email"
                  value={email}
                  placeholder="abcx@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  classname="swift-signup-main-form-email-input"
                />
                <div className="swift-signup-main-form-error">
                  <CustomError
                    errorText={Emailerror}
                    style={{
                      visibility: Emailerror != "error" ? "visible" : "hidden",
                    }}
                  />
                </div>
              </div>
              <div className="swift-signup-main-form-otp-info">
                <div
                  className="swift-signup-main-form-otp-info-1"
                  onClick={handleGenerateOtp}
                  disabled={isButtonDisabled}
                  style={{
                    cursor: isButtonDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  Generate OTP
                </div>
                <div
                  className="swift-signup-main-form-otp-info-2"
                  style={{ visibility: textVisible ? "visible" : "hidden" }}
                >
                  Wait for {countdown}s to generate again
                </div>
              </div>
              <div className="swift-signup-main-form-otp">
                <div className="swift-signup-main-form-label">
                  <CustomLabel
                    labelText="One Time Password"
                    style={{ visibility: otpVisible ? "visible" : "hidden" }}
                  />
                </div>
                <CustomInputBox
                  type="password"
                  value={otp}
                  placeholder="123456"
                  maxLength="6"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  classname="swift-signup-main-form-otp-input"
                  style={{ visibility: otpVisible ? "visible" : "hidden" }}
                />
                <div className="swift-signup-main-form-error">
                  <CustomError
                    errorText={opterror}
                    style={{
                      visibility: opterror != "error" ? "visible" : "hidden",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="swift-signup-main-form-div-2">
              <CustomButton
                className="swift-signup-main-form-button"
                text="Next"
                onClick={submitHandler}
                disabled={isNextButtonDisabled}
                style={{
                  cursor: isNextButtonDisabled ? "not-allowed" : "default",
                }}
              />
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Signup;
