import AuthContext from "data/AuthContext";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userStatusMap } from "./Auth";

export default function RequiredAuth({children}){
    const {status} = useContext(AuthContext);

    if(status !== userStatusMap.loggedIn){
        if(status === userStatusMap.notRegistered){
            return <Navigate to="/login/sign"/>;
        } else {
            return <Navigate to="/login"/>;
        }
    }
    return children;

}