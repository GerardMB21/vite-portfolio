import React, { useEffect, useState } from 'react'

function Text() {

  const first = `>cd browser `;
  const second = `>cd Portfolio-Gerard `;
  const trhee = `>code . `;

  const [firstText,setFirstText] = useState('');
  const [secondText,setSecondText] = useState('');
  const [trheeText,setTrheeText] = useState('');

  const [secondActive,setSecondActive] = useState(false);
  const [trheeActive,setTrheeActive] = useState(false);

  useEffect(()=>{
    let i = 0;
    let e = 0;
    let a = 0;

    function typing(){
      if (i<first.length) {
        setFirstText(first.slice(0,i));
        i++;
        setTimeout(typing,100);
      };

      i === first.length ? setSecondActive(true) : setSecondActive(false);
    };

    typing();

    function typingTwo(){
      if (e<second.length) {
        setSecondText(second.slice(0,e));
        e++;
        setTimeout(typingTwo,100);
      };

      e === second.length ? setTrheeActive(true) : setTrheeActive(false);
    };

    setTimeout(typingTwo, 1500);

    function typingTrhee(){
      if (a<trhee.length) {
        setTrheeText(trhee.slice(0,a));
        a++;
        setTimeout(typingTrhee,100);
      };
    };

    setTimeout(typingTrhee, 4000);
  },[]);

  return (
    <div className='text'>
      <p>
        <span>{`${'>'}`}</span>
        {`${navigator.platform}${firstText}`}
        {
          secondActive ?
          <></> :
          <span className='blink'>_</span>
        }
      </p>
      {
        secondActive ?
        <p>
          <span>{`${'>'}`}</span>
          {`${navigator.platform}>browser${secondText}`}
          {
            trheeActive ?
            <></> :
            <span className='blink'>_</span>
          }
        </p> :
        <></>
      }
      {
        trheeActive ?
        <p>
          <span>{`${'>'}`}</span>
          {`${navigator.platform}>browser>Portfolio-Gerard${trheeText}`}
          <span className='blink'>_</span>
        </p> :
        <></>
      }
    </div>
  )
}

export default Text