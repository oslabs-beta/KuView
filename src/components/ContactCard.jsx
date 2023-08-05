import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const ContactCard = ({
    imgSource,
    imgAlt,
    name,
    linkedin,
    github,
}) => {

    const newStyle = {};

    if (name === 'Cameron Kirksey' || 'Eric Rennie' || 'Richard Dao') {
        newStyle.marginTop = '4.5%';
    }

    return (
        
        <div className='card-container'>
            <img src={imgSource}
            alt={imgAlt} 
            className="card-img"/>

            <div className="name-and-social">

                <h2 className='name'>{name}</h2>
    
                <div class='social-container' style={newStyle}>

                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className='component-1'>
                        <FontAwesomeIcon className="fa-cog" icon={faLinkedin} size ="3x" />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className='component-2'>
                        <FontAwesomeIcon className="fa-cog" icon={faGithub} size ="3x" />
                    </a>

                </div>

            </div>

        </div>
    )
}