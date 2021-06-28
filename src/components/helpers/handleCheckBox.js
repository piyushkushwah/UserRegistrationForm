const handleCheckBox = (payload, state, key, tabName) => {
  const iterate = state[tabName]? state[tabName][key] === undefined? []: state[tabName][key]: [];
  if (payload.target.checked) {
    return [...iterate, payload.target.name];
  } else {
    return state[tabName][key].filter((data) => data !== payload.target.name);
  }
};

export default handleCheckBox;
