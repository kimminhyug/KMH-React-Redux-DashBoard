import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';


import ProfileAuth from '../components/ProfileAuth';


function ProfileAuthContainer (props:any) {
  return (
    <ProfileAuth name={props.name}></ProfileAuth>
  );
};

export default ProfileAuthContainer;
