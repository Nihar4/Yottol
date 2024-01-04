import React, { useEffect, useState } from "react";
import "../../css/Login/Reset.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import Info from "../CustomComponents/Info";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const [formValues, setFormValues] = useState({});

  const [otperror, setOtpError] = useState("error");
  const [pinerror, setPinError] = useState("error");
  const [confirmpinerror, setConfirmPinError] = useState("error");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true);

  const [otpVisible, setOtpVisible] = useState(false);
  const [pinVisible, setPinVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleGenerateOtp = () => {
    setOtpVisible(true);
    setCountdown(30);
    setTextVisible(true);
    setIsButtonDisabled(true);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setIsButtonDisabled(false);
    }, 30000);
  };

  const handleValidate = () => {
    if (formValues["otp"] && formValues["otp"].length == 6) {
      if (formValues["otp"] === "123456") {
        setOtpError();
        setPinVisible(true);
        setIsButtonDisabled(true);
        setTextVisible(false);
        setIsResetButtonDisabled(false);
      } else {
        setOtpError("OTP is not correct");
      }
    } else {
      setOtpError("OTP should be 6 length");
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      setTextVisible(false);
    }
  }, [countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isResetButtonDisabled) return;
    if (formValues["pin"] && formValues["pin"].length == 4) {
      setPinError();
      if (formValues["confirmpin"] && formValues["confirmpin"].length == 4) {
        setConfirmPinError();
        if (formValues["confirmpin"] != formValues["pin"]) {
          setConfirmPinError("PIN does not match with above input");
        } else {
          navigate("/resetsuccessful");
        }
      } else {
        setConfirmPinError("PIN should be atleast 4 digits");
      }
    } else {
      setPinError("PIN should be atleast 4 digits");
    }

    console.log(formValues);
  };

  return (
    <div className="swift-main">
      <Info />
      <div className="swift-main-form">
        <div className="swift-main-form-div-1">
          <div className="swift-main-form-heading">
            <p>
              <i style={{ fontWeight: 300 }}>swift</i>
              folios
            </p>
          </div>
          <div className="swift-main-form-reset">
            <p>Reset PIN</p>
          </div>
          <div className="swift-main-form-otp">
            <button
              className="swift-main-form-generate"
              onClick={handleGenerateOtp}
              disabled={isButtonDisabled}
              style={{ cursor: isButtonDisabled ? "not-allowed" : "pointer" }}
            >
              Generate OTP
            </button>
            <p
              className="swift-main-form-wait"
              style={{ visibility: textVisible ? "visible" : "hidden" }}
            >
              Wait for {countdown}s to generate again
            </p>
          </div>
          <CustomInput
            labelText="One Time Password"
            type="number"
            classname="swift-main-form-otp-input"
            name="otp"
            placeholder="123456"
            maxLength="6"
            errormsg="OTP should be atleast 6 digits "
            onInputChange={handleInputChange}
            style={{ visibility: otpVisible ? "visible" : "hidden" }}
          />
          <CustomError
            errorText={otperror}
            style={{ visibility: otperror != "error" ? "visible" : "hidden" }}
          />
          <CustomButton
            text="Validate"
            style={{
              width: "90px",
              padding: "10px 20px",
              margin: "10px 0px",
              fontSize: "14px",
              letterSpacing: "-0.7px",
              visibility: otpVisible ? "visible" : "hidden",
            }}
            onClick={handleValidate}
          />
          <CustomInput
            labelText="PIN"
            type="number"
            name="pin"
            classname="swift-main-form-pin-input"
            placeholder="1235"
            maxLength="4"
            errormsg="PIN should be atleast 4 digits"
            onInputChange={handleInputChange}
            style={{ visibility: pinVisible ? "visible" : "hidden" }}
          />
          <CustomError
            errorText={pinerror}
            style={{ visibility: pinerror != "error" ? "visible" : "hidden" }}
          />
          <CustomInput
            labelText="Confirm PIN"
            type="number"
            name="confirmpin"
            classname="swift-main-form-confirmpin-input"
            placeholder="1235"
            maxLength="4"
            errormsg="PIN should be atleast 4 digits"
            onInputChange={handleInputChange}
            style={{
              marginTop: "9px",
              visibility: pinVisible ? "visible" : "hidden",
            }}
          />
          <CustomError
            errorText={confirmpinerror}
            style={{
              visibility: confirmpinerror != "error" ? "visible" : "hidden",
            }}
          />
        </div>
        {/* <button onClick={handleBackClick}>Go Back</button> */}
        <CustomButton
          text="Reset"
          className="swift-main-form-btn"
          onClick={handleSubmit}
          disabled={isResetButtonDisabled}
          style={{ cursor: isResetButtonDisabled ? "not-allowed" : "default" }}
        />
      </div>
    </div>
  );
};

export default Reset;
