const handleFiledValidation = (state, fieldName, tabName, message) => {
  if (state.error && state.error[tabName]) {
    const filter = state.error[tabName].filter(
      (tab) => tab.fieldName === fieldName
    )[0] ? true : false;

    if (!filter) {
      return {
        ...state.error,
        [tabName]: [...state.error[tabName], { fieldName, message }],
      };
    } else {
      if (state.error && state.error[tabName])
        state.error[tabName][
          state.error[tabName].findIndex((ele) => ele.fieldName === fieldName)
        ].message = message;
      return { ...state.error, [tabName]: state.error[tabName] };
    }
  } else {
    return { ...state.error, [tabName]: [{ fieldName, message }] };
  }
};

const handleRemoveValidationArray = (state, action) => {
  return state.error[action.payload.tab.name]?.filter(
    (ele) => ele.fieldName !== action.payload.tab.fieldName
  );
};

export { handleFiledValidation, handleRemoveValidationArray };
