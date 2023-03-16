import Buckets from "../../components/buckets/Buckets";
import Login from "../../extremum/modules/authentication/login/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }:{ children:any }) => {


    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />;
    }
    return children;
};

const AppRouter = () => {
    const routes = [{
        path: "/",
        element: <ProtectedRoute><Buckets/></ProtectedRoute>
    },{
        path: "/login",
        element:<Login />
    }]

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map( args =>
                        <Route {...args}  />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
