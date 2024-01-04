import React, { useState } from "react";
import "../../css/Login/Login.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import Info from "../CustomComponents/Info";

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState("");
  const [otperror, setOtpError] = useState("");

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues["pin"] != formValues["confirmpin"] &&
      formValues["confirmpin"].length == 4
    )
      setError("error");
    else setError("");
    console.log(formValues);
  };
  const handleValidate = (e) => {
    e.preventDefault();
    // if (formValues["otp"].length == 6 && formValues["otp"] == "123456")
    //   setOtpError("error");
    // else setOtpError("");
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
            <p className="swift-main-form-generate">Generate OTP</p>
            <p className="swift-main-form-wait">
              Wait for 30s to generate again
            </p>
          </div>
          <CustomInput
            labelText="One Time Password"
            type="number"
            name="otp"
            placeholder="123456"
            maxLength="6"
            errormsg="OTP should be atleast 6 digits "
            onInputChange={handleInputChange}
          />
          {otperror && <CustomError errorText="OTP is not correct" />}
          <CustomButton
            text="Validate"
            style={{
              width: "90px",
              padding: "10px 20px",
              margin: "10px 0px",
              fontSize: "14px",
              letterSpacing: "-0.7px",
            }}
            onClick={handleValidate}
          />
          <CustomInput
            labelText="PIN"
            type="number"
            name="pin"
            placeholder="1235"
            maxLength="4"
            errormsg="PIN should be atleast 4 digits"
            onInputChange={handleInputChange}
          />
          <CustomInput
            labelText="Confirm PIN"
            type="number"
            name="confirmpin"
            placeholder="1235"
            maxLength="4"
            errormsg="PIN should be atleast 4 digits"
            onInputChange={handleInputChange}
            style={{
              marginTop: "9px",
            }}
          />
          {error && (
            <CustomError errorText="PIN does not match with above input" />
          )}
        </div>
        <CustomButton
          text="Reset"
          className="swift-main-form-reset-btn"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
