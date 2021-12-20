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
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;