import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

// import { childInsert } from '../modules/list';
import List from '../components/list/List';


function ListContainer () {
  return (
    <List></List>
  );
};

export default ListContainer;
