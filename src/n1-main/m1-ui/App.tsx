import React from 'react';
import './App.css';
import {HashRouter, Route,Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../state/store";
import Header from "./header/Header";
import Navbar from "./header/Navbar";

import Login from "../../components/Login/Login";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <>
                        <Header/>
                        <Navbar/>
                        <Routes>
                        <Route path={'/login'} element={<Login/>}/>

                        </Routes>
                    </>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
