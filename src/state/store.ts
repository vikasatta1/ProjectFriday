import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import {PasswordRecoveryReducer} from "./passwordRecovery-reducer";
import {ProfileReducer} from "./profile-reducer";
import {RegistrationReducer} from "./registration-reducer";


const rootReducer = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecovery:PasswordRecoveryReducer,
    profileReducer:ProfileReducer,
    registration:RegistrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;


