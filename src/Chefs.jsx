import React from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Allchefs from './Allchefs';

const Chefs = () => {
    const{id}=useParams()
    const allchefs=useLoaderData()
    return (
        <div>
            
            {
                allchefs.map(ch=><Allchefs  all={ch}></Allchefs>)
            }
         
        </div>
    );
};

export default Chefs;