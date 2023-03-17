import client from "../sdk";
import {useEffect} from "react";
import {useKeycloak} from "@react-keycloak/web";

export const useSDK = () => {
    const currentToken = localStorage.getItem('token')

    const {keycloak} = useKeycloak()

    if (currentToken){
        client.setAuthToken(currentToken)
    }

    useEffect(()=>{
        console.log("Update token",keycloak.idToken)

        if (keycloak.token){
            client.setAuthToken(keycloak.token)
        }
    },[keycloak.token])

    return client
}
