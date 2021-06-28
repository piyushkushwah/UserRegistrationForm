import React, { useReducer } from "react";
import { userRegistrationFormValidation } from "../components/helpers/formValidation";
import {
  ADD_DATA_TO_FORM,
  ADD_LANGUAGES_TO_STATE,
  ADD_HOBBIES_TO_STATE,
  ADD_SKILLS_TO_STATE,
  SUBMIT_DATA,
} from "./actionType";
import UserRegistrationReducer from "./UserRegistrationReducer";
import userRegistrationJSON from '../assets/json/userRegistration.json';


export const UserRegistrationFormContext = React.createContext({});

export default function UserRegistrationFormProvider({ children }) {
  const [state, dispatch] = useReducer(UserRegistrationReducer, userRegistrationJSON);

  const setLanguages = (event, tabName) =>
    dispatch({ type: ADD_LANGUAGES_TO_STATE, payload: { event, tabName } });
  const setSkills = (event, tabName) =>
    dispatch({ type: ADD_SKILLS_TO_STATE, payload: { event, tabName } });
  const setHobbies = (event, tabName) =>
    dispatch({ type: ADD_HOBBIES_TO_STATE, payload: { event, tabName } });


  const submitForm = () => {

    let hasError = false;

    for (const parentKey in state) {
        if(parentKey !== 'error' && parentKey !== 'printData'){
            for (const childKey in state[parentKey]) {
                hasError = userRegistrationFormValidation(childKey,state[parentKey][childKey],dispatch,parentKey);
            }
        }
    }

    if(hasError)return;
    dispatch({ type: SUBMIT_DATA });
  };

  const getFormData = (event, tabName) => {
    dispatch({ type: ADD_DATA_TO_FORM, payload: { event, tabName } });
    userRegistrationFormValidation(event.target.name,event.target.value, dispatch, tabName);
  };

  return (
    <UserRegistrationFormContext.Provider
      value={{
        submitForm,
        getFormData,
        state,
        setLanguages,
        setSkills,
        setHobbies,
        dispatch
      }}
    >
      {children}
    </UserRegistrationFormContext.Provider>
  );
}
