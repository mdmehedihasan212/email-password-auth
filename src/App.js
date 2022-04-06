import './App.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');


  const handleToEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleToPassword = (event) => {
    setPassword(event.target.value);
  }

  const handleToSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('Password should contain at lest one special character')
      return;
    }

    setValidated(true);
    setError('')

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
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
        <Form noValidate validated={validated} onSubmit={handleToSubmit}>
          <h1 className='text-primary'>Please Register!!!</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleToEmail} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please choose a Email.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email and password with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handleToPassword} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please choose a Password.
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group> */}
          <p className='text-danger'>{error}</p>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default App;
