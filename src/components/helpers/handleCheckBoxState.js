import {useState} from "react";

export default function HandleCheckBoxState(){

    const [selectedlanguages,setSelectedLanguages] = useState([]);
    const [selectedHobbies,setSelectedHobbies] = useState([]);
    const [selectedSkills,setSelectedSkills] = useState([]);

    const updateCheckBoxState = (updateState,stateData,event) =>{
        
        const checked = event.target.checked;
        const name = event.target.name;

        if(checked){
            updateState([...stateData,name]);
        }else{
            const filteredData = stateData.filter(data => data !== name);
            updateState(filteredData);
        }

    }

    const getCheckBoxValue = (event,check_box_action) => {
        switch(check_box_action){
            case 'languages':
                updateCheckBoxState(setSelectedLanguages,selectedlanguages,event);
                return;
            case 'hobbies':
                updateCheckBoxState(setSelectedHobbies,selectedHobbies,event);
                return;
            case 'skills':
                updateCheckBoxState(setSelectedSkills,selectedSkills,event);
                return;
            default:
                return 0;
        }
    }

    return {selectedHobbies,selectedlanguages,selectedSkills,getCheckBoxValue}
}