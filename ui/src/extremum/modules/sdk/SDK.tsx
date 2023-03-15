import React, {FC, ReactNode, useState} from 'react';
import ExtremumClient from "extremum-sdk";
import config from '../../../config.json';

interface ISDKProps {
    children(client:ExtremumClient): ReactNode;
}

const SDK:FC<ISDKProps> = ({children}) => {

    const [data,setData] = useState()

    const client = new ExtremumClient(config.url,{defaultAppId:config["app-id"]})
    const currentToken = localStorage.getItem('token')
    console.log(currentToken,"token")
    if (currentToken){
        client.setAuthToken(currentToken)
    }


    return (
        <div>
            {children(client)}
        </div>
    );
};

export default SDK;
