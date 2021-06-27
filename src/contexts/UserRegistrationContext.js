import React,{useReducer} from 'react';
import { ADD_DATA_TO_FORM, ADD_LANGUAGES_TO_STATE,ADD_HOBBIES_TO_STATE, ADD_SKILLS_TO_STATE, SUBMIT_DATA } from './actionType';
import UserRegistrationReducer from './UserRegistrationReducer';
export const UserRegistrationFormContext = React.createContext({});

export default function UserRegistrationFormProvider({children}) {

    const [state,dispatch] = useReducer(UserRegistrationReducer,{"firstname":"dd","lastname":"dd","age":"11","email":"kushwahpiyush5@gmail.com","dob":"2021-06-03","gender":"Female","maritalStatus":"Unmarried","collegeName":"JNCT","collegeAddress":"Bhopal","pinCode":"461223","courseName":"test","degree":"Undergraduate","employerName":"CodeCraft","dateOfJoining":"2021-06-08","location":"Bangalore","jobType":"Part Time","employmentStatus":"Ongoing","languages":["Hindi","English"],"skills":["Node.js","Javascript","Python","React.js","Angular 8+"],"hobbies":["Reading","Movies","Sports","Music"]})

    const setLanguages = (event) => dispatch({type:ADD_LANGUAGES_TO_STATE,payload:event});
    const setSkills = (event) => dispatch({type:ADD_SKILLS_TO_STATE,payload:event})
    const setHobbies = (event) => dispatch({type:ADD_HOBBIES_TO_STATE,payload:event})

    const submitForm = () => {
        dispatch({type:SUBMIT_DATA})
    };
   
    const getFormData = (event) => { 
        dispatch({type:ADD_DATA_TO_FORM,payload:event})
    }

    return (
        <UserRegistrationFormContext.Provider 
        value={{submitForm,getFormData,state,setLanguages,setSkills,setHobbies}}>
            {children}
        </UserRegistrationFormContext.Provider>
    )
}
