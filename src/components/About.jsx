import React from 'react';
import { useState } from 'react';
import AboutCard from './AboutCard';

function About(props) {
  const cardText = [
    'Seamlessly and automatically installed on your computer by logging into the browser app',
    'KuView provides you with a customized interactive dashboard to monitor your cluster',
    'Utilize Prometheus and Grafana to scrape metric-monitoring data for your Minikube cluster',
    'Built with Test-Driven Development in mind',
    'Back end routes were built out using the Model-View-Controller design pattern using Node and Express',
    'Data is securely stored via Bcrypt encryption'
  ];

  const boxes = [];
  for (let i = 0; i < cardText.length; i++) {
    boxes.push(<AboutCard cardText={cardText[i]}/>);
  }

  return (
    <div className='about-page'>
      <div className='about-intro'>
        <div>
          {/* <h1>KuView</h1> */}
        </div>
        <div>
          <h1>Monitor your Kubernetes Cluster, right here in your browser.</h1>
        </div>
        <div>
          Here at KuView, we have created an app for visualizing and providing real-time metric monitoring for your Kubernetes cluster.
        </div>
      </div>
      <div className='about-grid'>
        {boxes}
      </div>
    </div>
    
  );
}

export default About;
