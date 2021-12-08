import React, {useState} from 'react';
import '../scss/profile.scss';


function SelectBox({onChange}:any) {
  return (
    <input onChange={onChange} className="selectBox form-control form-control-light" type="text" placeholder="Search" ></input>
  );
}

export default SelectBox;
