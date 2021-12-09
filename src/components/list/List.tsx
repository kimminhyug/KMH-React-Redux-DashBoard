import React, {useEffect} from 'react';
import '../../scss/List.scss';
import ListItem from './List-item'
import { RootState } from '../../modules';
import { useSelector, useDispatch  } from 'react-redux';
import { add } from '../../modules/list';



function List(props:any) {
    const items = useSelector((state: RootState) => state.list);
  
    const dispatch = useDispatch(); 
    
    const dispatchInsert = (props:any) => {
      dispatch(add({championId: props.championId, user:props.user}));
    };

    useEffect(()=>{
        setTimeout(() => {
            dispatchInsert({championId:'가렌', user:'눈덩이'});
        }, 2000);
    },[]);

  return (
    <div className="List"> 
      
        {items.map(item => (
            <ListItem championId={item.championId}></ListItem>
        ))}
    </div>
  );
}

export default List;
