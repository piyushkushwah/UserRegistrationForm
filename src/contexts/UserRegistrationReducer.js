import handleCheckBox from "../components/helpers/handleCheckBox";
import {
  handleFiledValidation,
  handleRemoveValidationArray,
} from "../components/helpers/handleFieldValidation";

const UserRegistrationReducer = (state, action) => {

  const payload = action.payload;

  switch (action.type) {

    case "ADD_DATA_TO_FORM":
      return {
        ...state,
        [payload.tabName]: {
          ...state[payload.tabName],
          [payload.event.target.name]: payload.event.target.value,
        },
      };

    case "ADD_LANGUAGES_TO_STATE":
      return {
        ...state,
        [payload.tabName]: {
          ...state[payload.tabName],
          languages: handleCheckBox(
            payload.event,
            state,
            "languages",
            payload.tabName
          ),
        },
      };

    case "ADD_SKILLS_TO_STATE":
      return {
        ...state,
        [payload.tabName]: {
          ...state[payload.tabName],
          skills: handleCheckBox(
            payload.event,
            state,
            "skills",
            payload.tabName
          ),
        },
      };

    case "ADD_HOBBIES_TO_STATE":
      return {
        ...state,
        [payload.tabName]: {
          ...state[payload.tabName],
          hobbies: handleCheckBox(
            payload.event,
            state,
            "hobbies",
            payload.tabName
          ),
        },
      };

    case "HANDLE_VALIDATION":
      return {
        ...state,
        error: handleFiledValidation(
          state,
          payload.tab.fieldName,
          payload.tab.name,
          payload.tab.message
        ),
      };

    case "HANDLE_REMOVE_VALIDATION_FIELD":
      const filteredData = handleRemoveValidationArray(state, action);
      return {
        ...state,
        error: { ...state.error, [payload.tab.name]: filteredData },
      };

    case "SUBMIT_DATA":
      delete state.printData;
      return {...state,printData:state};

    default:
      return state;
  }
};

export default UserRegistrationReducer;
