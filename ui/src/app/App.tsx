import React from 'react';
import {ReactKeycloakProvider} from '@react-keycloak/web'
import keycloak from '../extremum/keycloak'
import AppRouter from "./routes/AppRouter";
import {AuthClientError, AuthClientEvent, AuthClientTokens} from "@react-keycloak/core/lib/types";



function App() {

    // Обработка получения keycloak токена,
    // мы не рекомендуем использовать localstorage для хранения токена
    const onTokensHandler = (tokens: AuthClientTokens)  => {
        if (tokens.token){
            localStorage.setItem("token",tokens.token)
        }
    }

    const onEventHandler = (eventType: AuthClientEvent, error?: AuthClientError) =>{
        if (eventType === "onAuthSuccess" ){
        //    Обработка успешной авторизации и тп
        }
    }

    return (
        <ReactKeycloakProvider onEvent={onEventHandler} onTokens={onTokensHandler} authClient={keycloak}>
            <AppRouter/>
        </ReactKeycloakProvider>
    )
}

export default App;
