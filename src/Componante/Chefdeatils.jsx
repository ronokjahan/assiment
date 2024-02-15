import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Chefdeatils = ({chefs}) => {
    
    
    const{chef_picture,chef_name,view_recipes_button,years_of_experience,number_of_recipes,likes,id}=chefs
   
    return (
     
           <Card  className='container text-center col-2 ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <div className="d-flex justify-content-between">
        <small className="text-body-secondary"><h4>Recipes: {number_of_recipes} </h4> </small>
        <h4>Likes: {likes}</h4>

      </div>
        <Link to={`chefs/${id}`} ><Button variant="primary">{view_recipes_button}</Button></Link>
      </Card.Body>
      {/* <Outlet></Outlet> */}
    </Card>
    
     
    );
};

export default Chefdeatils;