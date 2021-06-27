import React, { useContext } from 'react';
import { UserRegistrationFormContext } from '../../contexts/UserRegistrationContext';
import { employmentStatus, hobbies, jobType, workDetails } from '../shared/workDetailsFormFields';

export default function WorkDetails() {

    const {setHobbies,getFormData,state} = useContext(UserRegistrationFormContext);

    return (
        <div>
            {
                 workDetails.map(info=>{
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
                <h4>Job Type:</h4>
                {
                    jobType.map(data=>{
                        return(
                            <div key={data.id}>
                                <input className="m-5" type="radio"
                                        onChange={getFormData}
                                        name="jobType"
                                        id={data.name}
                                        checked={state.jobType === data.name || false}
                                        value={data.name} />
                                <label className="ml-5" htmlFor={data.name}>{data.name}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="m-10">
                <h4>Employment Status:</h4>
                {
                    employmentStatus.map(data=>{
                        return(
                            <div className="m-5" key={data.id}>
                                <input type="radio"
                                        onChange={getFormData}
                                        name="employmentStatus"
                                        id={data.name}
                                        checked={state.employmentStatus === data.name || false}
                                        value={data.name} />
                                <label className="ml-5" htmlFor={data.name}>{data.name}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="m-10">
                <h4>Hobbies:</h4>
                {
                    hobbies.map(hobbie=>{
                        return (
                            <div className="m-5" key={hobbie.id}>
                                <input type="checkbox"
                                name={hobbie.name}
                                id={hobbie.name}
                                checked={state.hobbies.includes(hobbie.name) || false}
                                onChange={setHobbies} />
                                <label className="" htmlFor={hobbie.name}>{hobbie.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
