import React, { useState } from 'react'
// import './style2.css'

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';

import './newstyles.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';


import SchoolIcon from '@mui/icons-material/School';

import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { useData } from './context/DataProvider';
import Alert from '@mui/material/Alert';
const names = [
    "Study Abroad Loan",
    "Undergraduate Education Loan (India)",
];


function Step1(props) {
    const { userDetails, setUserDetails } = useState("");
    const [resume, setresume] = useState("");
    const [college, setcollege] = useState("");
    const [yoe, setyoe] = useState("");


    const [parentdata, setparentdata] = useState({
        resume, yoe, college

    })


    React.useEffect(() => {
        const timeOutId = setTimeout(() => setparentdata({ resume, yoe, college }), 500);
        return () => clearTimeout(timeOutId);
    }, [parentdata]);

    React.useEffect(() => {
        const timeOutId = setTimeout(() => setresume(resume), 1);
        return () => clearTimeout(timeOutId);
    }, [resume]);

    React.useEffect(() => {
        const timeOutId = setTimeout(() => setyoe(yoe), 1);
        return () => clearTimeout(timeOutId);
    }, [yoe]);

    React.useEffect(() => {
        const timeOutId = setTimeout(() => setparentdata(college), 1);
        return () => clearTimeout(timeOutId);
    }, [college]);



    const [message, setMessage] = useState("");


    const Input = styled('input')({
        display: 'none',
    });

















    return (
        <div className="p-2 " >

            {message !== "" && <div style={{ width: "100%", padding: '2rem 2rem 0' }}><Alert severity="error">{message}</Alert></div>}


            <div className="textbox mb-5 ">




                <TextField
                    sx={{ width: '100%', paddingRight: '2rem' }}
                    id="filled-basic" label="Enter College Name" variant="filled"
                    InputProps={{ disableUnderline: true }} type="text"
                    value={college} onChange={e => { const t = (e.target.value); setcollege(e.target.value); setparentdata({ resume, yoe, college }); props.parentCallback({ resume, yoe, college: t }); }}
                >  </TextField>
            </div>

            <div className="flex justify-center" >
                <FormControl component="fieldset" className="p-5" >

                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" className=""  >
                        <div className=" ">
                            <FormControlLabel value="internship" control={<Radio />} label="Internship Preparation" className="pr-10" />
                            <FormControlLabel value="fte" control={<Radio />} label="FTE preparation" className="pl-10" />
                        </div>
                    </RadioGroup>
                </FormControl>
            </div>

            <div className="textbox mb-5 ">
                <TextField
                    sx={{ width: '100%', paddingRight: '2rem' }}
                    id="filled-basic" label="Year of Experience" variant="filled"
                    InputProps={{ disableUnderline: true }} type="number"
                    value={yoe} onChange={e => { const p = (e.target.value); setyoe(e.target.value); setparentdata({ resume, yoe, college }); props.parentCallback({ resume, yoe: p, college }) }}
                />
            </div>

            {/* <div className="textbox mb-5 ">
                <TextField
                    sx={{ width: '60%', paddingRight: '2rem' }}
                    id="filled-basic" label="" variant="filled"
                    InputProps={{ disableUnderline: true }} type="file"
                    value={resume} onChange={e => { const r = (e.target.value); setresume(e.target.value); setparentdata({ resume, yoe, college }); props.parentCallback({ resume: r, yoe, college }) }}
                />
                <label htmlFor="contained-button-file">
                    <Button btn variant="contained" color="success" className="bg-success" onChange={e => { setresume(e.target.value); setparentdata({ resume, yoe, college }); props.parentCallback(parentdata) }}  >
                        Upload Resume
                    </Button>
                </label>
            </div> */}










            {/* <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />

                <Fab
                    color="secondary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <AddIcon /> Upload photo
                </Fab>
                <br />
                <br />

                <Fab color="primary" size="small" component="span" aria-label="add">
                    <AddIcon />
                </Fab>
            </label>; */}


            <div className="textbox mb-5 ">

                <label htmlFor="upload-photo">

                    <input
                        value={resume}
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={e => { const r = (e.target.value); setresume(e.target.value); setparentdata({ resume, yoe, college }); props.parentCallback({ resume: r, yoe, college }) }}
                    />
                    <Button color="" variant="contained" component="span">
                        {(resume === "" || resume === undefined) ? 'Upload Resume ' : resume}
                        <span className="ml-5"> <UploadFileIcon /> </span>
                    </Button>



                </label>

            </div>




            {/* <input accept="image/*" type="file"
                onChange={this.handleChange('photo')}
                style={{ display: 'none' }}
                id="icon-button-file" />


            <label htmlFor="icon-button-file">
                <Button variant="raised" color="default" component="span">
                    Upload <FileUpload />
                </Button>
            </label>


            <span className={classes.filename}>
                {this.state.photo ? this.state.photo.name : ''}
            </span> */}




































        </div >
    )


}

export default Step1