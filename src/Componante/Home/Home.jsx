import React, { useContext } from 'react';
import './Home.css'
import { Authcontex } from './Authprovider';
import Chef from '../Chef';



const Home = () => {
    
   const {userr}=useContext(Authcontex)
   console.log(userr);
    return (
        <div className='home  ' >
         <div>
        <h4>Satisfy Your Cravings</h4>
        <h1>Delicious Foods With Wonderful Eating</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio.</p>
         </div>
          <Chef></Chef>
        </div>
    );
};

export default Home;