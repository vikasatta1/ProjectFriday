import React from 'react';
import Login from "../../../components/Login/Login";
import { Route, } from "react-router-dom";

const Routes = () => {
    return (
        <div>

                <Route path={'/login'} element={<Login/>}/>



        </div>
    );
};

export default Routes;