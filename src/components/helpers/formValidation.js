import {
  HANDLE_VALIDATION,
  HANDLE_REMOVE_VALIDATION_FIELD,
} from "../../contexts/actionType";

const userRegistrationFormValidation = (name, value, dispatch, tabName) => {
  let hasError = false;

  switch (name) {
    case "firstName":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "*First Name is required",
          HANDLE_VALIDATION
        );
        hasError = true;
        return true;
      } else if (value.length <= 1) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "First Name must have 2 character.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "First Name must have 2 character.",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "lastName":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Last Name is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (value.length <= 1) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Last Name must have 2 character.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "age":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Age is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (value < 18 || value <= -1) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Age must be grater than and equal to 18",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "email":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Email is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Enter valid email address.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "dob":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "DOB is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "gender":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Gender is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "languages":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Languages is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;
    case "maritalStatus":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Marital status is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "collegeName":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "College Name is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (value.length <= 1) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "College Name must have 2 character.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "First Name must have 2 character.",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "collegeAddress":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "College address is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (value.length <= 1) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "College address must have 2 character.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "pinCode":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Pincode is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else if (value.length !== 6) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Pincode must have 6 numbers.",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "courseName":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "College name is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "degree":
      if (value === "") {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Degree is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "skills":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Skills is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "employerName":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Employer name is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "dateOfJoining":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Date of joining is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "location":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Location is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "jobType":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Job type is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "employmentStatus":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Employment status is required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    case "hobbies":
      if (value.length === 0) {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "Hobbies are required",
          HANDLE_VALIDATION
        );
        hasError = true;
      } else {
        handleDispatch(
          name,
          dispatch,
          tabName,
          "",
          HANDLE_REMOVE_VALIDATION_FIELD
        );
        hasError = false;
      }
      break;

    default:
        break;
  }
  return hasError;
};

const handleDispatch = (name, dispatch, tabName, message = "", type) => {
  dispatch({
    type: type,
    payload: {
      tab: {
        name: tabName,
        fieldName: name,
        message: message,
      },
    },
  });
};

export { userRegistrationFormValidation };
