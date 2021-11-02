import React, {useState} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Form } from './components/Form';


const App: React.FC = () => {
  const [ press, setPress ] = useState<boolean>(false);
  const [ success, setSuccess ] = useState<boolean>(false);
  const [ closeSuccessMessage, setCloseSuccessMessage ] = useState<boolean>(false);
  
  return (
    <div className="form-wrapper">
      {!success ? (
        <>
        <Button press={press} setPress={setPress} />
        <Form press={press} setSuccess={setSuccess} />
        </>
      ) : (
        <div className={`success ${closeSuccessMessage ? 'close' : ''}`}>
          <button className="close-successMessage" onClick={() => setCloseSuccessMessage(true)}>x</button>
          <span>Congratulations, you are successfully registered</span>
        </div>
      )}
    </div>
  );
}

export default App;
