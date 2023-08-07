import React from 'react';
import { useState } from 'react';
import AboutCard from './AboutCard';

import installgif from '../gifs/install.gif'
import customizegif from '../gifs/customize.gif'
import registergif from '../gifs/register.gif'
function About(props) {
  const cardText = [
    ['Create a KuView account to monitor your Minikube cluster data', registergif],
    ['Seamlessly and automatically installed on your computer by logging into the browser app', installgif],
    ['KuView provides you with a customized interactive dashboard to monitor your cluster', customizegif]
  ];

  const boxes = [];
  for (let i = 0; i < cardText.length; i++) {
    let direction;
    i % 2 === 0 ? direction = 'left' : direction = 'right'
    boxes.push(<AboutCard cardText={cardText[i][0]} gif={cardText[i][1]} textLocation={direction} />);
  }

  return (
    <div className='about-page'>
      <div className='about-intro'>
        <div>
          <h1>Monitor your Kubernetes Cluster, right here in your browser.</h1>
        </div>
        <div>
          Here at KuView, we have created an app for visualizing and providing real-time metric monitoring for your Kubernetes cluster.
        </div>
      </div>
      <div className='about-boxes'>
        {boxes}
      </div>
    </div>
    
  );
}

export default About;
