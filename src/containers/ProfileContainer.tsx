import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';


import Profile from '../components/Profile';


function ProfileContainer (props:any) {
  return (
    <Profile url={props.url}></Profile>
  );
};

export default ProfileContainer;
