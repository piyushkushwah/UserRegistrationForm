import React,{useContext} from 'react';
import { UserRegistrationFormContext } from '../../contexts/UserRegistrationContext';
import { degree, educationDetails, skills } from '../shared/educationalDetailsFormField';

export default function EducationalDetails() {

    const {setSkills,getFormData,state} = useContext(UserRegistrationFormContext);

    return (
        <div>
            {
              educationDetails.map(info=>{
                return(
                    <div key={info.id}>
                        <label htmlFor={info.name}>{info.label}</label>
                        <input className="form-control" onChange={getFormData} 
                                type={info.type}
                                name={info.name} 
                                id={info.name} value={state[info.name] || ''}/>
                    </div>
                )
              })  
            }
            <div className="m-10">
                <h4>Degree:</h4>
                {
                    degree.map(data=>{
                        return(
                            <div className="m-5" key={data.id}>
                                <input  type="radio"
                                        onChange={getFormData}
                                        name="degree"
                                        id={data.name}
                                        checked={state.degree === data.name || false}
                                        value={data.name} />
                                <label className="ml-5" htmlFor={data.name}>{data.name}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="m-10">
                <h4>Skills:</h4>
                {
                    skills.map(skill=>{
                        return (
                            <div className="m-5" key={skill.id}>
                                <input type="checkbox"
                                    name={skill.name}
                                    id={skill.name}
                                    checked={state.skills.includes(skill.name) || false}
                                    onChange={setSkills} />
                                <label className="ml-5" htmlFor={skill.name}>{skill.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
