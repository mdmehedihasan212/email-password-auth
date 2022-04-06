import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <div>
      {/* <form onSubmit={handleToSubmit}>
        <input onBlur={handleToEmail} type="email" />
        <br />
        <input onBlur={handleToPassword} type="password" />
        <br />
        <input type="submit" value="Sing in" />
      </form> */}
      <div className="registration w-50 mx-auto mt-5">
        <Form onSubmit={handleToSubmit}>
          <h1 className='text-primary'>Please Register!!!</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleToEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handleToPassword} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default App;
