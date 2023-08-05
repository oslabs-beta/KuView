import React from 'react';

const AboutCard = (props) => {
  console.log('prop in AboutCard', props);
  return (
    <div className='iframe-container'>
      <iframe
        title='myIframe'
        src={`http://localhost:3000/d/${props.cookie}/kuview-tech-demo?orgId=1&refresh=5s`}
        key='fullDashboard'
      ></iframe>
    </div>
  );
};

export default Iframe;