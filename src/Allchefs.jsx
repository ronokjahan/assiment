import React from 'react';

const Allchefs = ({all}) => {
    const{chef_picture,chef_name,view_recipes_button,years_of_experience,number_of_recipes,likes,id ,chef_bio   }=all
    return (
        <div className='d-flex justify-content-between p-5'>
          <img src={chef_picture} alt="" />
          
            <div>
            <h1>{chef_name}</h1>
            <p>{chef_bio}</p>
            <h4> {likes}</h4>
           <div className='d-flex justify-content-evenly '>
           <h4> Likes: {number_of_recipes}</h4>
            <h5> Year:{years_of_experience}</h5>
           </div>
            </div>
         
        </div>
    );
};

export default Allchefs;