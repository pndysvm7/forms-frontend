import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import Alert from '@mui/material/Alert';

function OTPpage() {


    const [otp, setOtp] = useState('');


    const handleOtpChange = (newotp) => setOtp(newotp);





    return (
        <div className="p-5">

            <h4 className="mb-5"> <b>Phone Number </b></h4>
            <h6>We will add you to our community whattsapp and telegram</h6>



            <h6> Enter OTP sent to your mobile number</h6>

            <div className="otpbox">
                <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={4}
                    separator={<span>-</span>}
                    inputStyle="otp-input"
                    isInputNum={true}
                />
            </div>


        </div>
    )
}

export default OTPpage;