import React, { useEffect, useState } from "react";
import "../../css/Login/Pin.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../Backbutton/BackButton";
import InfoBox from "../InfoBox/InfoBox";

const Pin = () => {
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
  const [pinerror, setPinError] = useState("error");

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (formValues["pin"] && formValues["pin"] == "1234") {
      setPinError();
      navigate("/");
    } else {
      setPinError("Pin is not Correct");
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
              labelText="Pin"
              type="number"
              classname="swift-login-form-pin-input"
              name="pin"
              placeholder="1234"
              onInputChange={handleInputChange}
              style1={style1}
            />
            <div className="swift-login-form-error">
              <CustomError
                errorText={pinerror}
                style={{
                  visibility: pinerror != "error" ? "visible" : "hidden",
                }}
              />
              <Link to="/reset">
                <button className="swift-login-form-generate">Reset PIN</button>
              </Link>
            </div>
          </div>

          <CustomButton
            text="Login"
            className="swift-login-form-btn"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Pin;
