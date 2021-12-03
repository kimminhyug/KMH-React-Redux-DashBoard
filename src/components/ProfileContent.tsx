import React, {useState} from 'react';
import '../scss/profile.scss';


function ProfileContent(props:any) {
  
  return (
    
    <span className="Name"> 
 
    {props.name}
    </span>
  );
}

export default ProfileContent;
