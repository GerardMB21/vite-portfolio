import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Element from '../components/element/Element';
import Header from '../components/header/Header';
import Text from '../components/text/Text'
import sections from '../jsons/sections.json';

function Home() {

  const finish = useSelector(state=>state.finish);
  const elements = useSelector(state=>state.elements);

  const [mark,setMark] = useState({
    two: false,
    trhee: false,
  });

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

  return (
    <div className={ finish.end ? 'home active' : 'home' }>
      <div className='homeCtn' ref={scrollRef}>
        {
          finish.end ?
          <>
            <div className='mainBx'>
              <Header data={elements}/>
              <div className='contentBx'></div>
            </div>
            <div className='navRight'>
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