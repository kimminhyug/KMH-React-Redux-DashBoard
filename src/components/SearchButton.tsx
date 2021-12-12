import React, {useState} from 'react';
import '../scss/profile.scss';


function SearchButton({onSubmit, text}:any) {
  const handleSubmit = (e:any) => {
    console.log(onSubmit)
    onSubmit(e);
  }
  return (
    <button onClick={handleSubmit}>{text}</button>
  );
}

export default SearchButton;
