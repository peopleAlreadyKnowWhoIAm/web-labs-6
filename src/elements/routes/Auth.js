import AuthContext from "data/AuthContext";
import { useState } from "react";

/*

obj user = {
    name: string,
    password: string,
    email: string
}

*/

const credentialKey = 'credential';

function saveUser(user) {
    localStorage.setItem(credentialKey, JSON.stringify(user));
}

function loadUser() {
    let buf = localStorage.getItem(credentialKey);
    if(buf === null) {
        return null;
    }
    return JSON.parse(buf);
}

function confirmLogin(user) {
    const userSaved = loadUser();
    let res = user.email === userSaved.email && user.password === userSaved.password;
    if(res) {
        sessionStorage.setItem('loggedIn', true);
        return true;
    }
    return false;
}

function checkLogginStatus(){
    return JSON.parse(sessionStorage.getItem('loggedIn'));
}


export const userStatusMap = {
    singout: 0,
    notRegistered: 1,
    loggedIn: 2
}


function discoverStatus(){
    if(checkLogginStatus){
        return userStatusMap.loggedIn;
    } else if(loadUser() === null){
        return userStatusMap.notRegistered;
    }
    return userStatusMap.singout;
}

export default function AuthProvider({ children }) {
    const [userStatus, setUserStatus] = useState(discoverStatus);

    const registerUser = (user) => {
        saveUser(user);
        setUserStatus(userStatusMap.loggedIn);
    }

    const checkLogin = (login) => {
        if(confirmLogin(login)){
            setUserStatus(userStatusMap.loggedIn);
            return true;
        } else {
            return false;
        }
    }

    return <AuthContext.Provider value={{
        status: userStatus,
        registerUser,
        checkLogin
    }}>
        {children}
    </AuthContext.Provider>
}
