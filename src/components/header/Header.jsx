import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteElements } from '../../store/slices/elements.slice';
import { setSelected } from '../../store/slices/selected.slice';

export default function Header({data}) {

  const dispatch = useDispatch();

  const icons =  useSelector(state=>state.icons);
  const selected = useSelector(state=>state.selected);
  const elements = useSelector(state=>state.elements);

  
  const [changes,setChanges] = useState({
    previus: 1,
    actual: 1
  });
  let isClose = false;

  const change = (id)=>{
    
    if (!isClose) {
      dispatch(setSelected(id));

      if (id !== changes.actual) {
        setChanges({
          previus: changes.actual,
          actual: id
        });
      };
    };

    isClose = false;
  };
  
  const close = (id)=>{
    const array = elements.filter(element=>element.id !== id);
    
    dispatch(setDeleteElements(array));
    
    let exists = false;
    data.map(item=>{
      if (item.id === changes.previus) {
        exists = true;
      };
    });

    if (id === selected) {
      if (exists) {
        dispatch(setSelected(changes.previus));
      } else {
        let element;
        data.map(item=>{
          if (item.id === id) {
            if (data.indexOf(item)) {
              element = data[data.indexOf(item) - 1];
            } else {
              element = data[data.indexOf(item) + 1];
            };
          };
        });
        dispatch(setSelected(element?.id ? element.id : 0));
      };
    };
    isClose = true;
  };

  useEffect(()=>{
    if (changes.actual !== selected) {
      setChanges({
        previus: changes.actual,
        actual: selected
      });
    };
  },[selected]);

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
