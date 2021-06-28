import './App.css';
import  { UserRegistrationFormContext } from './contexts/UserRegistrationContext';
import UserRegistration from './components/user-registration/user-registration';
import { useContext } from 'react';

function App() {

  const {state} = useContext(UserRegistrationFormContext);
  
  return (
    <div className="App">
        <UserRegistration/>
      {
        state.printData?
          <div className="App-print-state">
            {
              <code>{JSON.stringify(state.printData)}</code>
            }
          </div>
        :null
      }
    </div>
  );
}

export default App;
