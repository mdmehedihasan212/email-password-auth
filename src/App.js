import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  return (
    <div className='app-container'>
      <h1>Start Email Password Authentication</h1>
    </div>
  );
}

export default App;
