import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';


import ProfileContent from '../components/ProfileContent';


function ProfileContainer (props:any) {
  return (
    <ProfileContent name={props.name}></ProfileContent>
  );
};

export default ProfileContainer;
