import React, { useEffect, useState } from "react";
import "../../css/Login/Login.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import InfoBox from "../InfoBox/InfoBox";
import { useNavigate } from "react-router-dom";
import BackButton from "../Backbutton/BackButton";

const Login = () => {
  const navigate = useNavigate();

  const style1={
    fontSize: "12px",
    border: "1.5px solid #011627",
    borderRadius: "49px",
    backgroundColor: "transparent",
    padding: "20px 16px",
    display: "block",
    marginBottom: "2px",
    marginTop: "2px",
    marginLeft: "-19px",
    // height: "50px",
    flexshrink: "0",
    letterSpacing: "-0.8px",
    fontStyle: "normal",
    fontWeigth:"400",
  }

  const [formValues, setFormValues] = useState({});

  const [otperror, setOtpError] = useState("error");
  const [emailerror, setEmailError] = useState("error");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const [otpVisible, setOtpVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const ValidateEmail = () => {
    const email = formValues["email"];
    const validEmails = [
      "user1@gmail.com",
      "user2@gmail.com",
      "user3@gmail.com",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Enter Valid Email";
    }

    if (!validEmails.includes(email)) {
      return "Email does not exist";
    }
  };

  const handleGenerateOtp = () => {
    const error = ValidateEmail();
    if (!error) {
      setEmailError();
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
    } else {
      setEmailError(error);
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      setTextVisible(false);
    }
  }, [countdown]);

  const handleSubmit = (e) => {
    if (isNextButtonDisabled) return;
    if (formValues["otp"] && formValues["otp"].length == 6) {
      if (formValues["otp"] == "123456") navigate("/pin");
      else setOtpError("OTP is not correct");
    } else {
      setOtpError("OTP should be 6 length");
    }

    console.log(formValues);
  };

  return (
    <div className="swift-login-main">
      <BackButton />
      <div className="swift-login">
        <div className="swift-signup-main-info">
          <InfoBox />
        </div>
        <div className="swift-login-form">
          <div className="swift-login-form-div-1">
            <div className="swift-login-loginform-heading">
              <p>
                <i style={{ fontWeight: 300 }}>swift</i>
                folios
              </p>
            </div>

            <CustomInput
              labelText="Email"
              type="email"
              classname="swift-login-form-email-input"
              name="email"
              placeholder="abc@gmail.com"
              onInputChange={handleInputChange}
              style1={style1}
            />
            <CustomError
              errorText={emailerror}
              style={{
                visibility: emailerror != "error" ? "visible" : "hidden",
              }}
            />

            <div className="swift-login-loginform-otp">
              <button
                className="swift-login-form-generate"
                onClick={handleGenerateOtp}
                disabled={isButtonDisabled}
                style={{ cursor: isButtonDisabled ? "not-allowed" : "pointer" }}
              >
                Generate OTP
              </button>
              <p
                className="swift-login-form-wait"
                style={{ visibility: textVisible ? "visible" : "hidden" }}
              >
                Wait for {countdown}s to generate again
              </p>
            </div>

            <CustomInput
              labelText="One Time Password"
              type="number"
              classname="swift-login-form-otp-input"
              name="otp"
              placeholder="123456"
              maxLength="6"
              errormsg="OTP should be atleast 6 digits "
              onInputChange={handleInputChange}
              style={{ visibility: otpVisible ? "visible" : "hidden" }}
              style1={style1}
            />
            <CustomError
              errorText={otperror}
              style={{ visibility: otperror != "error" ? "visible" : "hidden" }}
            />
          </div>

          <CustomButton
            text="Next"
            className="swift-login-form-btn"
            onClick={handleSubmit}
            disabled={isNextButtonDisabled}
            style={{ cursor: isNextButtonDisabled ? "not-allowed" : "default" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
