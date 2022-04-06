import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const handleToEmail = (event) => {
    console.log(event.target.value);
  }

  const handleToPassword = (event) => {
    console.log(event.target.value);
  }

  const handleToSubmit = (event) => {
    console.log('form submit');
    event.preventDefault();
  }

  return (
    <div className='app-container'>
      <h1>Start Email Password Authentication</h1>
      <form onSubmit={handleToSubmit}>
        <input onChange={handleToEmail} type="email" />
        <br />
        <input onChange={handleToPassword} type="password" />
        <br />
        <input type="submit" value="Sing in" />
      </form>
    </div >
  );
}

export default App;
