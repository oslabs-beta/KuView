import React from 'react';
import { ContactCard } from './ContactCard';
import Yeung from "../Images/Yeung.PNG";
import Esposito from "../Images/Esposito.PNG";
import Rennie from "../Images/Rennie.PNG";
import Dao from "../Images/Dao.PNG";
import Kirksey from "../Images/Kirksey.PNG"

function Contact() {

  return (
    <div>
      <div className="Contact">
        <h1 className="header">The Team</h1>
        <ContactCard
          imgSource={Dao}
          imgAlt="Picture"
          name="Richard Dao"
          linkedin="https://www.linkedin.com/in/rdao"
          github="https://github.com/daorichard"
        />
        <ContactCard 
          imgSource={Esposito}
          imgAlt="Picture"
          name="Eric Esposito"
          linkedin="https://www.linkedin.com/in/eric-andre-esposito"
          github="https://github.com/Ericesposito"
        />
        <ContactCard 
          imgSource={Kirksey}
          imgAlt="Picture"
          name="Cameron Kirksey"
          linkedin="https://www.linkedin.com/in/cameronkirksey/"
          github="https://github.com/CameronKirksey21"
        />
        <ContactCard 
          imgSource={Rennie}
          imgAlt="Picture"
          name="Eric Rennie"
          linkedin="https://www.linkedin.com/in/ericmrennie/"
          github="https://github.com/ericmrennie"
        />
        <ContactCard 
          imgSource={Yeung}
          imgAlt="Picture"
          name="Jason Yeung"
          linkedin="https://www.linkedin.com/in/jason-yeung-yat-shun/"
          github="https://github.com/JasonY000"
        />
      </div>
    </div>
  )
}

export default Contact;

