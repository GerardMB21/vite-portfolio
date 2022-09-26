import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteElements } from '../../store/slices/elements.slice';
import { setSelected } from '../../store/slices/selected.slice';

export default function Header({data}) {

  const dispatch = useDispatch();

  const icons =  useSelector(state=>state.icons);
  const selected = useSelector(state=>state.selected);
  const elements = useSelector(state=>state.elements);

  const header = document.querySelector(".header");

  let isClose = false

  const change = (id)=>{
    let index = -1;
    
    for (let i = 0; i < header.childNodes.length; i++) {
      index ++
      if (id === parseInt(header.childNodes[i].id)) {
        break 
      };
    };
    console.log(index);
    // header.scrollLeft += index * 175;

    if (!isClose) {
      dispatch(setSelected(id));
    };
    isClose = false;
  };
  
  const close = (id)=>{
    const array = elements.filter(element=>element.id !== id);
    const newSelected = array[0] ? array[0].id : 0;
    dispatch(setDeleteElements(array));
    dispatch(setSelected(newSelected));
    isClose = true;
  };

  return (
    <div className='header'>
      {
        data.map(section=>(
        <div className={ section.id === selected ? 'title active' : 'title' } id={section.id} onClick={()=>change(section.id)} key={section.id}>
          <div className='name'>
            {icons[section.icon]}
            <p>{section.name}</p>
          </div>
          <div className='toggle' onClick={()=>close(section.id)}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div className='blur'></div>
        </div>
        ))
      }
    </div>
  )
}
