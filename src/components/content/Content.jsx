import React from 'react'
import { useSelector } from 'react-redux';
import me from '../../imgs/me.jpeg'
import skills from '../../jsons/skills.json';

export default function Content() {

  const selected = useSelector(state=>state.selected);
  const icons = useSelector(state=>state.icons);

  if (selected === 1) {
    return (
      <div className='aboutCtnt'>
        <div className='header'>
          <p className='import'><span className='green_text'>import</span> <span className='purple_text'>React</span> <span className='ligthyellow_text'>from</span> <span className='orange_text'>'react'</span></p>
          <p className='export'><span className='green_text'>export</span> <span className='ligthyellow_text'>default function</span> <span className='ligthblue_text'>About_Me</span><span className='yellow_text'>{'() {'}</span></p>
        </div>
        <div className='init left_2_rem'>
          <p><span className='ligthyellow_text'>return</span> <span className='blue_text'>{'('}</span></p>
        </div>
        <div className='card left_2_rem'>
          <div className='imgBx'>
            <p><span className='ligthblue_text'>{'<'}</span><span className='green_text'>img</span> <span className='ligthyellow_text'>src</span><span>=</span><span className='yellow_text'>{'{'}</span></p>
            <div className='img'>
              <img src={me} alt={'Gerard Matos'}/>
            </div>
            <p><span className='yellow_text'>{'}'}</span> <span className='ligthyellow_text'>alt</span><span>=</span><span className='yellow_text'>{'{ '}</span><span className='orange_text'>'Gerard Matos'</span><span className='yellow_text'>{' }'}</span> <span className='ligthblue_text'>{'/>'}</span></p>
          </div>
          <div className='textBx'>
            <div className='title'>
              <h2>
                <span className='ligthblue_text'>{'<'}</span><span className='green_text'>h2</span><span className='ligthblue_text'>{'>'}</span>
              </h2>
              <h2>
                <span>About Me</span>
              </h2>
              <h2>
                <span className='ligthblue_text'>{'</'}</span><span className='green_text'>h2</span><span className='ligthblue_text'>{'>'}</span>
              </h2>
            </div>
            <div className='ctnt'>
              <p>
                <span className='ligthblue_text'>{'<'}</span><span className='green_text'>p</span><span className='ligthblue_text'>{'>'}</span>
              </p>
              <p className='left_2_rem'>Hello, my name is Gerard Matos, I am a Front-End and Back-End web developer, I have been developing websites and web systems for more than a year on my own and I also currently work in a service company called <a href='https://dacartelecom.com/' target={'_blank'} className='purple_text'>Dacartelecom</a>, I started studying on my own but I had more growth in my career when I entered <a href='https://www.academlo.com/' target={'_blank'} className='purple_text'>Academlo</a>, an academy in which I graduated as a Front-End developer and Back-End developer.</p>
              <p>
                <span className='ligthblue_text'>{'</'}</span><span className='green_text'>p</span><span className='ligthblue_text'>{'>'}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='end left_2_rem'>
          <p><span className='blue_text'>{')'}</span></p>
        </div>
        <div className='header'>
          <p><span className='yellow_text'>{'}'}</span></p>
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
      <div className='skillsCtnt'>
        <div className='header'>
          <p>
            <span className='ligthblue_text'>{'<!'}</span><span className='green_text'>DOCTYPE</span> <i className='ligthyellow_text'>html</i><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p>
            <span className='ligthblue_text'>{'<'}</span><span className='green_text'>html</span> <i className='ligthyellow_text'>lang</i><span>=</span><span className='orange_text'>"en"</span><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p className='left_2_rem'>
            <span className='ligthblue_text'>{'<'}</span><span className='green_text'>head</span><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p className='left_4_rem'>
            <span className='ligthblue_text'>{'<'}</span><span className='green_text'>title</span><span className='ligthblue_text'>{'>'}</span> <span>Skills</span> <span className='ligthblue_text'>{'</'}</span><span className='green_text'>title</span><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p className='left_2_rem'>
            <span className='ligthblue_text'>{'</'}</span><span className='green_text'>head</span><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p className='left_2_rem'>
            <span className='ligthblue_text'>{'<'}</span><span className='green_text'>body</span><span className='ligthblue_text'>{'>'}</span>
          </p>
        </div>
        <div className='card left_4_rem'>
          <div className='box'>
            {
              skills.map(item=>(
                <span key={item.id} style={{
                  transform: `rotateY(calc(${item.id} * 51deg)) translateZ(250px)`
                }}>
                  {/* <img src='https://images.pexels.com/photos/8600666/pexels-photo-8600666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img'/> */}
                  {icons[item.icon]}
                </span>
              ))
            }
          </div>
        </div>
        <div className='header'>
          <p className='left_2_rem'>
            <span className='ligthblue_text'>{'<'}</span><span className='green_text'>body</span><span className='ligthblue_text'>{'>'}</span>
          </p>
          <p>
            <span className='ligthblue_text'>{'</'}</span><span className='green_text'>html</span><span className='ligthblue_text'>{'>'}</span>
          </p>
        </div>
      </div>
    )
  } else if (selected === 5) {
    return (
      <div className='contactCtnt'>Contact</div>
    )
  }
}
