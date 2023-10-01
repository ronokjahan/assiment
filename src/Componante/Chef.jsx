import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Chefdeatils from './Chefdeatils';




const Chef = () => {
    const [chefs,setchefs]=useState([])
    useEffect(()=>{
        
        fetch('http://localhost:3000/chef')
        .then(res=>res.json())
        .then(data=>setchefs(data))
        .catch(erro=>console.error(erro))
           
        
    },[])
    return (
        <div>
            <h1>chef{chefs.length}</h1>,
            {
                chefs.map(c=><Chefdeatils 
                chefs={c}
                
                ></Chefdeatils>)
            }
            
          
        
        </div>
    );
};

export default Chef;