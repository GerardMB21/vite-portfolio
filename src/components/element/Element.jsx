import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAgreeElements } from '../../store/slices/elements.slice';
import { setSelected } from '../../store/slices/selected.slice';
import { setToggleSlice } from '../../store/slices/toggle.slice';

export default function Element({element}) {

  const dispatch = useDispatch();

  const elements = useSelector(state=>state.elements);
  const icons = useSelector(state=>state.icons);

  const [active,setActive] = useState(true);

  const agree = (element)=>{

    if (!element.binder) {
      let validate = true
      elements.map(item=>{
        if (item.id === element.id) {
          validate = false;
        };
      });
  
      if (validate) {
        dispatch(setAgreeElements(element));
        dispatch(setSelected(element.id));
      } else {
        dispatch(setSelected(element.id));
      };

      dispatch(setToggleSlice(false));
    };
  };

  const changeBinder = ()=>{
    setActive(!active);
  };

  return (
    <div className='elementBx'>
      <div className={ element.binder ? 'binderBx' : 'element' }>
        <div className='title' onClick={()=>{
          changeBinder()
          agree(element);
        }}>
          <span>{element.binder ? active ? icons.binder.active : icons.binder.inherit : icons[element.icon]}</span>
          <p>{element.binder ? element.binder : element.name}</p>
        </div>
        {
          element.binder ?
          <div className={active ? 'elements active' : 'elements'}>
            {
              element.projects.map(item=>(
                <div className='element' key={item.id} onClick={()=>agree(item)}>
                  <span>{icons[item.icon]}</span>
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div> :
          <></>
        }
      </div>
    </div>
  )
}
