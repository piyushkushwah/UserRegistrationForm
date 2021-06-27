import React from 'react';
import {useContext} from 'react';
import { UserRegistrationFormContext } from '../../contexts/UserRegistrationContext';
import {basicInfo,genders,maritalStatus,languages} from '../shared/basicInfoFormFields';

export default function BasicInfo() {

    const {setLanguages,getFormData,state} = useContext(UserRegistrationFormContext);

    return (
        <div>
            {
                basicInfo.map(info=>{
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
                <h4>Gender:</h4>
                {
                    genders.map(gender=>{
                        return(
                            <div key={gender.id}>
                                <input className="m-5" type="radio"
                                        onChange={getFormData}
                                        name="gender"
                                        id={gender.name}
                                        checked={state.gender === gender.name || false}
                                        value={gender.name} />
                                <label className="ml-5" htmlFor={gender.name}>{gender.name}</label>
                            </div>
                        )
                    })
                } 
            </div>
            <div className="m-10">
                <h4>Marital Status:</h4>
                {   
                    maritalStatus.map(status=>{
                        return (
                            <div key={status.id+status.name}>
                            <input className="m-5" type="radio"
                                    onChange={getFormData}
                                    name="maritalStatus"
                                    id={status.name}
                                    checked={state.maritalStatus === status.name || false}
                                    value={status.name} />
                            <label className="ml-5" htmlFor={status.name}>{status.name}</label>
                        </div>
                        )
                    })
                }
            </div>
            <div className="m-10">
                <h4>Languages:</h4>
                {
                    languages.map(language=>{
                        return (
                            <div key={language.id}>
                            <input type="checkbox"
                                name={language.name}
                                id={language.name}
                                checked={state.languages.includes(language.name) || false}
                                onChange={setLanguages} />
                                <label className="ml-5" htmlFor={language.name}>{language.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
