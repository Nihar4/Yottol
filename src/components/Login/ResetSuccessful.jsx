import React, { useEffect, useState } from "react";
import "../../css/Login/ResetSuccessful.css";
import CustomInput from "../CustomComponents/CustomInput/CustomInput";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import CustomError from "../CustomComponents/CustomError/CustomError";
import Info from "../CustomComponents/Info";
import { Link, useNavigate } from "react-router-dom";

const ResetSuccessful = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="swift-main">
      <Info />
      <div className="swift-main-form">
        <div className="swift-main-form-div-1">
          <div className="swift-main-loginform-heading">
            <p>
              <i style={{ fontWeight: 300 }}>swift</i>
              folios
            </p>
          </div>
          <div className="swift-main-form-svg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.3961 18.6868C34.0063 19.297 34.0063 20.2863 33.3961 20.8965L22.9795 31.3131C22.3693 31.9233 21.3801 31.9233 20.7698 31.3131L16.6031 27.1465C15.993 26.5362 15.993 25.5471 16.6031 24.9369C17.2133 24.3267 18.2027 24.3267 18.8129 24.9369L21.8747 27.9985L31.1865 18.6868C31.7968 18.0766 32.7859 18.0766 33.3961 18.6868Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.8807 2.60417H25.1199C29.9291 2.60415 33.6978 2.60413 36.6385 2.99948C39.6482 3.40415 42.0235 4.24861 43.8876 6.1128C46.362 8.58723 47.0495 11.975 47.2795 16.5889C47.3224 17.4508 46.6585 18.1843 45.7966 18.2272C44.9347 18.2702 44.2012 17.6063 44.1582 16.7445C43.9326 12.2189 43.2607 9.90532 41.6778 8.32251C40.491 7.13571 38.8853 6.45469 36.222 6.09661C33.5137 5.73248 29.9549 5.72917 25.0003 5.72917C20.0457 5.72917 16.4869 5.73248 13.7786 6.09661C11.1153 6.45469 9.5096 7.13571 8.32283 8.32251C7.13603 9.50928 6.45501 11.1149 6.09693 13.7783C5.73281 16.4866 5.72949 20.0454 5.72949 25C5.72949 29.9546 5.73281 33.5133 6.09693 36.2217C6.45501 38.885 7.13603 40.4906 8.32283 41.6775C9.5096 42.8644 11.1153 43.5454 13.7786 43.9033C16.4869 44.2675 20.0457 44.2708 25.0003 44.2708C29.9549 44.2708 33.5137 44.2675 36.222 43.9033C38.8853 43.5454 40.491 42.8644 41.6778 41.6775C42.8647 40.4906 43.5457 38.885 43.9037 36.2217C44.2678 33.5133 44.2712 29.9546 44.2712 25C44.2712 24.1371 44.9707 23.4375 45.8337 23.4375C46.6966 23.4375 47.3962 24.1371 47.3962 25V25.1196C47.3962 29.9288 47.3962 33.6975 47.001 36.6381C46.5962 39.6479 45.7518 42.0231 43.8876 43.8873C42.0235 45.7515 39.6482 46.5958 36.6385 47.0006C33.6978 47.3958 29.9291 47.3958 25.1199 47.3958H24.8807C20.0716 47.3958 16.3028 47.3958 13.3622 47.0006C10.3523 46.5958 7.97731 45.7515 6.11312 43.8873C4.24893 42.0231 3.40447 39.6479 2.9998 36.6381C2.60445 33.6975 2.60447 29.9288 2.60449 25.1196V24.8804C2.60447 20.0713 2.60445 16.3025 2.9998 13.3619C3.40447 10.352 4.24893 7.97698 6.11312 6.1128C7.97731 4.24861 10.3523 3.40415 13.3622 2.99948C16.3028 2.60413 20.0716 2.60415 24.8807 2.60417Z"
                  fill="black"
                />
              </svg>
            </div>
            <p>PIN reset has been successful</p>
          </div>
        </div>
        {/* <button onClick={handleBackClick}>Go Back</button> */}
        <Link to="/login">
          <CustomButton text="Login Again" className="swift-main-form-btn" />
        </Link>
      </div>
    </div>
  );
};

export default ResetSuccessful;
