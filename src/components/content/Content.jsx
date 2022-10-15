import React from 'react'
import { useSelector } from 'react-redux';
import me from '../../imgs/me.jpeg'

export default function Content() {

  const selected = useSelector(state=>state.selected);
  console.log(selected);

  if (selected === 1) {
    return (
      <div className='aboutCtnt'>
        <div className='header'>
          <p className='import'><span>import</span> <span>React</span> <span>from</span> <span>'react'</span></p>
          <p className='export'><span>export</span> <span>default function</span> <span>Content</span><span>{'() {'}</span></p>
        </div>
        <div className='init'>
          <p><span>return</span> <span>{'('}</span></p>
        </div>
        <div className='card'>
          <div className='imgBx'>
            <p><span>{'<'}</span><span>img</span> <span>src</span><span>=</span><span>{'{'}</span></p>
            <div className='img'>
              <img src={me} alt={'Gerard Matos'}/>
            </div>
            <p><span>{'}'}</span> <span>alt</span><span>=</span><span>{'{ '}</span><span>'Gerard Matos'</span><span>{' }'}</span> <span>{'/>'}</span></p>
          </div>
          <div className='textBx'>
            <div className='title'>
              <h2>
                <span>{'<'}</span><span>h2</span><span>{'>'}</span>
              </h2>
              <h2>
                <span>About Me</span>
              </h2>
              <h2>
                <span>{'</'}</span><span>h2</span><span>{'>'}</span>
              </h2>
            </div>
            <div className='ctnt'>
              <p>
                <span>{'<'}</span><span>p</span><span>{'>'}</span>
              </p>
              <p>Hello, my name is Gerard Matos, I am a Front-End and Back-End web developer, I have been developing websites and web systems for more than a year on my own and I also currently work in a service company called <a href='https://dacartelecom.com/' target={'_blank'}>Dacartelecom</a>, I started studying on my own but I had more growth in my career when I entered <a href='https://www.academlo.com/' target={'_blank'}>Academlo</a>, an academy in which I graduated as a Front-End developer and Back-End developer.</p>
              <p>
                <span>{'</'}</span><span>p</span><span>{'>'}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='end'>
          <p><span>{')'}</span></p>
        </div>
      </div>
    )
  } else if (selected === 2) {
    return (
      <div className='frontEndCtnt'>FrontEnd</div>
    )
  } else if (selected === 3) {
    return (
      <div className='backEndCtnt'>BackEnd</div>
    )
  } else if (selected === 4) {
    return (
      <div className='skillsCtnt'>Skills</div>
    )
  } else if (selected === 5) {
    return (
      <div className='contactCtnt'>Contact</div>
    )
  }
}
