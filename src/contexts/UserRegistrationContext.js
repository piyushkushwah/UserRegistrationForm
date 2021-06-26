import React,{useReducer} from 'react';
import HandleCheckBoxState from '../components/helpers/handleCheckBoxState';
import UserRegistrationReducer from './UserRegistrationReducer';
export const UserRegistrationFormContext = React.createContext({});

export default function UserRegistrationFormProvider({children}) {

    const [state,dispatch] = useReducer(UserRegistrationReducer,{})
    const{getCheckBoxValue} = HandleCheckBoxState();

    const setLanguages = () => {

    }

    return (
        <UserRegistrationFormContext.Provider value={getCheckBoxValue}>
            {children}
        </UserRegistrationFormContext.Provider>
    )
}
