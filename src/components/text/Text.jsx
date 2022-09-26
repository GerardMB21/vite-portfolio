import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFinish } from '../../store/slices/finish.slice';

function Text({letters,init = '',item,end = false}) {

  const dispatch = useDispatch();

  const finish = useSelector(state=>state.finish);

  const [text,setText] = useState('');
  const [blink,setBlink] = useState(true);
  useEffect(()=>{
    let i = 0;

    function typing(){
      setBlink(false);
      if (i<letters.length) {
        dispatch(setFinish({
          [item]: true
        }));
        setText(letters.slice(0,i));
        i++;
        setTimeout(typing,100);
      };

      if (i === letters.length) {
        dispatch(setFinish({
          [item]: false,
          end: false
        }));
        setBlink(true);

        if (end) {
          setTimeout(() => {
            dispatch(setFinish({
              end: true
            }));
          }, 1000);
        };
      };
    };

    typing();
  },[]);

  return (
    <div className='text'>
      <p>
        {`${navigator.platform}${init}>${text}`}
        {
          finish[item] || end ?
          <span className={ blink ? 'blink' : '' }>_</span> :
          <></>
        }
      </p>
    </div>
  )
}

export default Text