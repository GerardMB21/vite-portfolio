import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/content/Content';
import Element from '../components/element/Element';
import Header from '../components/header/Header';
import Text from '../components/text/Text'
import sections from '../jsons/sections.json';
import { setToggleSlice } from '../store/slices/toggle.slice';

function Home() {

  const dispatch = useDispatch();

  const finish = useSelector(state=>state.finish);
  const elements = useSelector(state=>state.elements);
  const toggleSlice = useSelector(state=>state.toggle);

  const [mark,setMark] = useState({
    two: false,
    trhee: false,
  });
  const [toggle,setToggle] = useState(false);

  const scrollRef = useRef();

  useEffect(()=>{
    scrollRef?.current?.scrollIntoView({behavior: 'smooth'})
  },[]);

  useEffect(()=>{
    if (finish.one === false && finish.one !== undefined) {
      setTimeout(() => {
        setMark({
          two: true,
          trhee: false
        });
      }, 1000);
    };

    if (finish.two === false && finish.two !== undefined) {
      setTimeout(() => {
        setMark({
          two: true,
          trhee: true
        });
      }, 1000);
    }
  },[finish]);

  useEffect(()=>{
    setToggle(toggleSlice);
  },[toggleSlice]);

  return (
    <div className={ finish.end ? 'home active' : 'home' }>
      {
        finish.end ? 
        <div className='navTop'>
          <p>Portfolio-Gerard</p>
          <p onClick={()=>dispatch(setToggleSlice(!toggle))}>Menu {
            toggle ?
            <ion-icon name="close-outline"></ion-icon> :
            <ion-icon name="menu-outline"></ion-icon>
            }</p>
        </div> :
        <></>
      }
      <div className='homeCtn' ref={scrollRef}>
        {
          finish.end ?
          <>
            <div className='mainBx'>
              <Header data={elements}/>
              <div className='contentBx'>
                <Content />
              </div>
            </div>
            <div className={toggle ? 'navRight active' : 'navRight'}>
              {
                sections.map(section=>(
                  <Element key={section.id} element={section}/>
                ))
              }
            </div>
          </> :
          <>
            <Text letters={'cd browser '} item={'one'}/>
            {
              mark.two ?
              <Text letters={'cd Portfolio-Gerard '} init={'>browser'} item={'two'}/> :
              <></>
            }
            {
              mark.trhee ?
              <Text letters={'code . '} init={'>Portfolio-Gerard'} item={'trhee'} end={true}/> :
              <></>
            }
          </>
        }
      </div>
    </div>
  )
}

export default Home