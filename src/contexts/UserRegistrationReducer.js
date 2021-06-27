import handleCheckBox from "../components/helpers/handleCheckBox";

const UserRegistrationReducer = (state,action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_DATA_TO_FORM':
            return {...state,[action.payload.target.name]:action.payload.target.value}
        case 'ADD_LANGUAGES_TO_STATE':
            return {...state,languages:handleCheckBox(action.payload,state,'languages')}
        case 'ADD_SKILLS_TO_STATE':
            return {...state,skills: handleCheckBox(action.payload,state,'skills')}
        case 'ADD_HOBBIES_TO_STATE':
            return {...state,hobbies:handleCheckBox(action.payload,state,'hobbies')}
        case 'SUBMIT_DATA':
            return {...state,printData:{...state}};
        default:
            return state;
    }
}

export default UserRegistrationReducer;

