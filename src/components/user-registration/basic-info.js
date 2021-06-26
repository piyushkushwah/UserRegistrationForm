import {useContext} from 'react';
import { UserRegistrationFormContext } from '../../contexts/UserRegistrationContext';

const languages = [
    {id:0,name:'Hindi'},
    {id:1,name:'English'},
    {id:2,name:'Spanish'}
];

export default function BasicInfo() {

    const getCheckBoxValue = useContext(UserRegistrationFormContext);

    return (
        <div>
            {languages.map(language=>{
                return (
                    <>
                    <label>test</label>
                    <input key={language.id}
                     type="checkbox"
                     name={language.name}
                      id={language.id}
                       onChange={(event)=>getCheckBoxValue(event,'languages')} />
                    </>
                )
            })}
        </div>
    )
}
