import React from 'react';

const AboutCard = (props) => {
  console.log('prop in AboutCard', props);
  const gif = <img src={props.gif} className='gifImgTag'/>
  const text = <p>{props.cardText}</p>
  let name = {}
  if(props.textLocation === 'left'){
    name.textAlign = 'right'
  }else{
    name.textAlign = 'left'
  }
  return (
    <div className='about-card-div'>
      <div style={name}>
        {props.textLocation === 'left' ? text : gif}
      </div>
      <div style={name}>
        {props.textLocation === 'left' ? gif : text}
      </div>
    </div>
  );
};

export default AboutCard;