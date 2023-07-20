import React from 'react';

const LoadingCube = () => {
  return (
    <div className='container'>
      <div className='cube'>
        <div className='sides'>
          <div className='top'></div>
          <div className='right'></div>
          <div className='bottom'></div>
          <div className='left'></div>
          <div className='front'></div>
          <div className='back'></div>
        </div>
      </div>
      <div className='text'>KuView Loading Metrics...</div>
    </div>
  );
};

export default LoadingCube;
