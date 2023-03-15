import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Buckets from "../components/buckets/Buckets";
import Login from "../extremum/modules/authentication/login/Login";

export const ProtectedRoute = ({ children }:{ children:any }) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />;
    }
    return children;
};

function Router() {
    const routes = [{
        path: "/",
        element:<ProtectedRoute><Buckets/></ProtectedRoute>
    },{
        path: "/login",
        element:<Login />
    }]

    return (<BrowserRouter>
        <Routes>
            {
                routes.map( args =>
                    <Route {...args}  />
                )
            }
        </Routes>
    </BrowserRouter>)
}

// Добавьте ваш код ниже
function App() {

    return (
        <Router />
    )
}

export default App;
