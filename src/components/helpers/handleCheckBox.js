const handleCheckBox = (payload,state,key) => {
    console.log(state[key]);
    if(payload.target.checked){
        return [...state[key],payload.target.name];
    }else{
        return state[key].filter(data => data !== payload.target.name);
    }
}

export default handleCheckBox;