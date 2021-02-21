import React from 'react';
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa'

import { Content, Section, Social, Rodape} from './style';

const Footer = () => {
  return(
    <>
      <Content>
        <Section>
          <div className="title">
            <h1>Contato</h1>
            <span id="underline"></span>
          </div>
          <Social>
            <a href="https://github.com/manuncorrea" target="_blank" rel="noreferrer">
            <span>
               <GrGithub className="social" />
            </span>
            </a>
            <a href="https://www.linkedin.com/in/emanuele-correa-0372b2117/" target="_blank" rel="noreferrer">
              <span>
                <GrLinkedin className="social"  />
              </span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5531998724272"target="_blank" rel="noreferrer">
              <span>
                <FaWhatsapp className="social"  />
              </span>
            </a>
            
          </Social>
        </Section>
      </Content>
      <Rodape>
        <span className="footer">Copyright © 2021 </span>
      </Rodape>
    </>
    
  );
}

export default Footer;
