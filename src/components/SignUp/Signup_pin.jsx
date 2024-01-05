import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Signup/Signup_pin.css";
import CustomLabel from "../CustomComponents/CustomLabel/CustomLabel";
import CustomInputBox from "../CustomComponents/CustomInputBox/CustomInputBox";
import CustomError from "../CustomComponents/CustomError/CustomError";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import InfoBox from "../InfoBox/InfoBox";
import BackButton from "../Backbutton/BackButton";

const Signup_pin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinError, setPinError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if(pin.length != 4){
      setPinError("PIN must be 4 digit");
    }
    else{
      if (pin != confirmPin) {
        setPinError("PIN does not match");
      } else {
        setPinError("");
        navigate("/signup/status");
      }
    }
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="main">
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
              <div className="swift-signup-main-form-pin">
                <div className="swift-signup-main-form-label">
                  <CustomLabel labelText="PIN" />
                </div>
                <CustomInputBox
                  type="password"
                  value={pin}
                  placeholder="1234"
                  maxLength="4"
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  classname="swift-signup-main-form-pin-input"
                />
              </div>
              <div className="swift-signup-main-form-pin">
                <div className="swift-signup-main-form-label">
                  <CustomLabel labelText=" Confirm PIN" />
                </div>
                <CustomInputBox
                  type="password"
                  value={confirmPin}
                  placeholder="1234"
                  maxLength="4"
                  onChange={(e) => {
                    setConfirmPin(e.target.value);
                  }}
                  classname="swift-signup-main-form-pin-input"
                />
                <div className="swift-signup-main-form-error">
                  <CustomError errorText={pinError} />
                </div>
              </div>
            </div>
            <div className="swift-signup-main-form-div-2">
              <CustomButton
                className="swift-signup-main-form-button"
                text="Next"
                onClick={submitHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup_pin;
