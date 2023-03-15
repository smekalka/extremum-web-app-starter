import ExtremumClient from "extremum-sdk";
import config from "../../config.json";

export const useSDK = () => {
    const client = new ExtremumClient(config.url,{defaultAppId:config["app-id"]})
    const currentToken = localStorage.getItem('token')
    console.log(currentToken,"token")
    if (currentToken){
        client.setAuthToken(currentToken)
    }
    return client
}
