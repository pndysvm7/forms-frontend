import * as React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const steps = ['Personal Details', 'Verification ', 'Slots'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [personaldata, setPersonalData] = React.useState("")

    const [personal, setpersonal] = React.useState({ resume: "", yoe: "", college: "" });
    const [phonenumber, setphonenumber] = React.useState({ phone: "", otp: "" });

    const [message, setMessage] = React.useState("");
    const [isOTPpage, setisOTPpage] = React.useState(false);

    var pagetag = <Step1 />;




    function handleCallback1(child1Data) {
        setpersonal(child1Data);
        console.log(child1Data);
        console.log("hii")

    }

    function handleCallback2(child2Data) {
        setphonenumber(child2Data);
        console.log(child2Data);
        console.log("hii")

    }

    // function handleCallback3(child1Data) {
    //     setpersonal(child1Data);
    //     console.log(child1Data);
    //     console.log("hii")

    // }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (activeStep === 0) {
            if (personal.college === "" || personal.yoe === "" || personal.resume === "") {
                setMessage("Please fill all the fields before continuing")
                return;
            }
        }

        if (activeStep === 1) {
            if (phonenumber.phone !== undefined && phonenumber.phone !== '' && isOTPpage === false && phonenumber.phone.length === 10) {
                console.log("yes we are good");
                setMessage("")
                setisOTPpage(true);
                return;

            }
            if (phonenumber.phone === undefined && isOTPpage === false) {
                setMessage("Please fill valid phone number before continuing");
                return;

            }
            if (phonenumber.phone !== undefined && phonenumber.phone === '' && isOTPpage === false) {
                setMessage("Please fill valid phone number before continuing");
                return;
            }
            if (phonenumber.phone !== undefined && phonenumber.phone.length < 10 && isOTPpage === false) {
                setMessage("Please fill valid phone number before continuing");
                return;
            }
            if (phonenumber.otp === undefined) {
                setMessage("Please fill valid OTP before continuing");
                return;
            }
            if (isOTPpage === true && phonenumber.otp !== "" && phonenumber.otp.length < 4) {
                setMessage("Please fill valid OTP before continuing");
                return;

            }
            else if (isOTPpage === true && phonenumber.otp !== "") {
                console.log("good otp", phonenumber.otp)
                setMessage("");
            }
            else {
                setMessage("Please fill valid phone number before continuing");
                return;

            }
        }
        let newSkipped = skipped;

        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setMessage("");



        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    var btnname = "Continue";

    if (activeStep === 0) {
        pagetag = <Step1 parentCallback={handleCallback1} />;
    }
    else if (activeStep === 1) {
        pagetag = <Step2 isotp={isOTPpage} parentCallback={handleCallback2} />;
        btnname = "Send OTP";
        console.log()
    }
    else {
        pagetag = <Step3 />;

    }



    return (
        <Box className="ml-80 mr-80 p-10 ">
            <Stepper activeStep={activeStep} className="p-5 mb-10" >
                {
                    steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        // if (isStepOptional(index)) {
                        //     labelProps.optional = (
                        //         <Typography variant="caption"></Typography>
                        //     );
                        // }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>


            <div className="container mr-10 ml-20 ">
                {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}
                {activeStep === steps.length ? (

                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>

                            {pagetag}

                        </Typography>
                        <Box className="p-10 ml-10 mr-20" sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>

                                </Button>
                            )}





                            <Button size="large" variant="contained" onClick={handleNext} className=" mb-20 ">
                                {activeStep === steps.length - 1 ? 'Finish' : (activeStep === 1 && isOTPpage === false) ? "Send OTP" : (activeStep === 1 && isOTPpage === true) ? 'Verify' : 'Continue'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}


            </div>




        </ Box>
    );
}
