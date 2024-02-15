import React, { useContext } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontex } from './Home/Authprovider';
import Goglegithub from './Googlegithub/Goglegithub';

const Login = () => {
  const {signIn}=useContext(Authcontex)
  
  const loginhande=(event)=>{

    
    event.preventDefault()
    const email=event.target.email.value
    const password=event.target.password.value
    console.log(email,password);
    
    signIn(email,password)
   
    .then(result=>{
      const logins=result.user
      // Form.reset()
      console.log(logins);
    })
    .catch(erro=>{
      console.log(erro.massage);
    })


  }
    return (
        <Container className="mt-5">
        <h2>Login</h2>
        <Form onSubmit={loginhande}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
          </Form.Group>
  
        <div className='items-center'>
        <Button className=' mt-4' variant="primary" type="submit">
            Login
          </Button>
        </div>
        </Form>
        <p>Don.t have a account?<Link to='/regstion'>Regstion</Link></p>
        <Goglegithub></Goglegithub>
      </Container>
    );
};

export default Login;