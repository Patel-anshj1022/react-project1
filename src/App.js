import './App.css';
import FormComponent from './components/formComponent';
import LogInComponent from './components/LogInComponent';
import { useState } from 'react';

function App() {
  const [formState, setFormState] = useState("register"); 
   const handleForm = (e) => {
    const btnName = e.target.value
    setFormState(btnName)
    console.log(formState)
  }
  return (
    <div>
      <button value="register"  onClick={handleForm}>REGISTER</button>
      <button onClick={handleForm} >LOGIN</button>
      { formState === "register" ? <FormComponent/> : <LogInComponent/> }
      
                  
    </div>
  );
}

export default App;