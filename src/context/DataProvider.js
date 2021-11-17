import React, { createContext, useState, useContext } from 'react';
import axios from "axios";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const DataContext = createContext();
export function useData() {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useData must be used within an DataProvider');
    }

    return context;

}

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    let ubd = AuthService.getCurrentUser();
    const defaultUserDetails = { ...ubd.userBankDetails, documents: ubd.documents };
    defaultUserDetails.loanDetails = {
        type: '',
        loanAmount: '',
        duration: ''
    };
    defaultUserDetails.educationalDetails = {
        collegeName: "",
        entranceExamName: "",
        examMarks: "",
        expectedFee: "",
        percent10: "",
        percent12: ""
    };

    const [userDetails, setUserDetails] = useState(defaultUserDetails);

    function signup(fname, lname, email, password) {
        return AuthService.register(fname, lname, email, password);
    }

    function login(email, password) {
        return AuthService.login(email, password);
    }

    function logout() {
        return AuthService.logout();
    }

    const getConnectedBanks = (phno) => {
        axios.post(
            "http://localhost:8080/api/user/getConnectedBanks",
            { phoneNum: phno },
            { headers: authHeader() }
        ).then(response => {
            console.log(response.data.userDetails.connectedBankAccounts);
            setUserDetails({ ...userDetails, connectedBankAccounts: response.data.userDetails.connectedBankAccounts })
        }).catch(err => {
            console.log(err);
        })
    }

    const getBankDetails = (id, handleNext) => {
        axios.post(
            "http://localhost:8080/api/user/getBankDetails",
            { id: id },
            { headers: authHeader() }
        ).then(response => {
            console.log(response.data.userDetails);
            let selectedBank = userDetails.connectedBankAccounts.find(t => t.id === id)
            setUserDetails({ ...userDetails, ...response.data.userDetails, selectedBank })
            handleNext()
        })
    };

    return (
        <DataContext.Provider value={{ data, login, signup, logout, userDetails, setUserDetails, getConnectedBanks, getBankDetails }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider