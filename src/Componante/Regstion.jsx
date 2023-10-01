import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontex } from './Home/Authprovider';
import Goglegithub from './Googlegithub/Goglegithub';


const Regstion = () => {

const {createUser}=useContext(Authcontex)
console.log(createUser);


  const [error,seterror]=useState('')
  const handelregstion=(event)=>{
    event.preventDefault()
    const name=event.target.name.value
    const email=event.target.email.value
    const password=event.target.password.value
    
    
if(password.length <6){
seterror('Your paswword must 6 chartrte')
return
}

createUser(email,password)

.then(result=>{
  const loguser=result.user
  console.log(loguser);
})
.catch(error=>{
  console.log(error.massage);
})
  }
    return (
        <Container className="mt-5">
        <h2>Regstion</h2>
        <Form onSubmit={handelregstion}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
            <p>{error}</p>
          </Form.Group>
          
          <Form.Group controlId="formPhotoUrl">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control
            type="text" placeholder="Enter photo URL"
            
            required
          />
        </Form.Group>
  
          <Button variant="primary" type="submit">
            Regstion
          </Button>
          
        </Form>
        <p>Already have an account?<Link to='/login'>Login</Link></p>

     <Goglegithub></Goglegithub>
      </Container>
    );
};

export default Regstion;