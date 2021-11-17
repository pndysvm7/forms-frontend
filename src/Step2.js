
import React, { useState, Component } from 'react'

import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import './newstyles.css'


import Alert from '@mui/material/Alert';
// import "./styles.css";

const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: "grey",
        height: "50vh",
        textAlign: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));


// import './style2.css'



function Step2(props) {
    const classes = useStyles();
    const theme = useTheme();


    const { userDetails, setUserDetails, getConnectedBanks } = useState("");
    const [phone, setphone] = useState("");
    const [phno, setPhno] = useState("");
    const [otpp, setotpp] = useState("");

    if (props.isotp === false) {
        return (
            <div className="p-5">
                <h4 className="mb-5"> <b>Phone Number </b></h4>
                <h6>We will add you to our community whattsapp and telegram</h6>

                <div className="textbox">
                    {/* <TextField sx={{ width: '10%', paddingRight: '2rem' }} label="Code" id="filled-basic" value="+91" variant="filled" InputProps={{ disableUnderline: true }} /> */}
                    <TextField
                        sx={{ width: '100%' }} id="filled-basic"
                        label="Please enter your mobile number" variant="filled"
                        InputProps={{ disableUnderline: true }} type="number" maxLength="10" minLength="10"
                        value={phno} onChange={e => { const t = (e.target.value); setPhno(e.target.value); props.parentCallback({ phone: t }) }} />
                </div>


            </div>
        )

    }
    else {
        const handleOtpChange = (otp) => { setotpp(otp); props.parentCallback({ otp: otp }) };
        // return (
        //     <div className="p-5">

        //         <h4 className="mb-5 ml-4"> <b>Enter OTP </b></h4>
        //         <h6 className="ml-5">We will add you to our community whattsapp and telegram</h6>

        //         <h6 className="ml-5"> Enter OTP sent to your mobile number</h6>

        //         <div className="otpbox">
        //             <OtpInput
        //                 value={otpp}
        //                 onChange={handleOtpChange}
        //                 numInputs={4}
        //                 separator={<span>-</span>}
        //                 inputStyle="otp-input"
        //                 isInputNum={true}
        //             />
        //         </div>


        //     </div>






        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid
                        container
                        style={{ backgroundColor: "white" }}
                        className={classes.grid}
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item container justify="center">
                            <Grid item container alignItems="center" direction="column">
                                <Grid item>
                                    <Avatar className={classes.avatar}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Verification Code
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Paper elevation={0}>
                                <Typography variant="h6">
                                    Please enter the verification code sent to your mobile
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justify="center"
                            alignItems="center"
                            direction="column"
                        >
                            <Grid item spacing={3} justify="center">
                                <OtpInput
                                    separator={
                                        <span>
                                            <strong>.</strong>
                                        </span>
                                    }
                                    inputStyle={{
                                        width: "3rem",
                                        height: "3rem",
                                        margin: "0 1rem",
                                        fontSize: "2rem",
                                        borderRadius: 4,
                                        border: "1px solid rgba(0,0,0,0.3)"
                                    }}

                                    value={otpp}
                                    onChange={handleOtpChange}
                                    numInputs={4}
                                    separator={<span>-</span>}
                                    inputStyle="otp-input"
                                    isInputNum={true}




                                />
                            </Grid>

                            <Button size="small">
                                Resend OTP
                            </Button>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        );




    }



}

export default Step2;
