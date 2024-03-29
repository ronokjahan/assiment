import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Chefdeatils from './Chefdeatils';




const Chef = () => {
    const [chefs,setchefs]=useState([])
    useEffect(()=>{
        
        fetch('https://assiment10-server-j8u1.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setchefs(data))
        .catch(erro=>console.error(erro))
           
        
    },[])
    return (
        <div className=''>
           
          <div className='md:grid grid-cols-4 gap-3'>
          {
                chefs.map(c=><Chefdeatils 
                chefs={c}
                
                ></Chefdeatils>)
            }
            
          </div>
          
        
        </div>
    );
};

export default Chef;
