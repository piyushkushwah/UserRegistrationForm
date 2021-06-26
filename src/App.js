import './App.css';
import UserRegistrationFormProvider from './contexts/UserRegistrationContext';
import UserRegistration from './components/user-registration/user-registration';

function App() {
  return (
    <div className="App">
      <UserRegistrationFormProvider>
        <UserRegistration/>
      </UserRegistrationFormProvider>
    </div>
  );
}

export default App;
