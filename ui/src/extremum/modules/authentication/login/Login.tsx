import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";

function Login() {

    const navigate = useNavigate()

    const { keycloak } = useKeycloak()

    useEffect(() => {
        if (localStorage.getItem('token') || keycloak.token){
            navigate('/')
        }
    }, [])
    return (
        <div className="LoginContainer">
            <button onClick={() => {
                keycloak.login()
            }}>
                Login
            </button>
        </div>
    );
}

export default Login;
