import React from 'react';

const AboutCard = (props) => {
  console.log('prop in AboutCard', props);


  return (
    <div className='about-card-div'>
      {props.cardText}
    </div>
  );
};

export default AboutCard;