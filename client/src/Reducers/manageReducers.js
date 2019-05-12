import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import contactsReducer from './contactsReducer'
import authReducer from './authReducer';    
    

const rootReducer = combineReducers({
    usersReducer,
    contactsReducer,
    authReducer
});

export default rootReducer;

