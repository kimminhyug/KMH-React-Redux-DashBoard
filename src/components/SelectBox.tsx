import React, {useState} from 'react';
import '../scss/profile.scss';


function SelectBox({onChange}:any) {
  console.log(onChange)
  // props.onChange(1);

  return (
    <input onChange={onChange(1)} className="selectBox form-control form-control-light" type="text" placeholder="Search" ></input>
  );
}

export default SelectBox;
