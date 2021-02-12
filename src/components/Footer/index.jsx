import React, { Link } from 'react';
import { GrGithub, GrLinkedin, GrTwitter } from 'react-icons/gr';

import { Content, Section, Social, Rodape} from './style';

const Footer = () => {
  return(
    <>
      <Content>
        <Section>
          <div className="title">
            <h1>Contato</h1>
          </div>
          <Social>
            <span>
              <a target="_blank" href="https://github.com/manuncorrea">
               <GrGithub className="social" />
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.linkedin.com/in/emanuele-correa-0372b2117/">
                <GrLinkedin className="social"  />
              </a>
            </span>

            <span>
            <a target="_blank" href="https://twitter.com/Manuncorrea">
              <GrTwitter className="social"  />
            </a>
            </span>
          </Social>
        </Section>
      </Content>
      <Rodape>
        <span>Copyright © 2021 </span>
      </Rodape>
    </>
    
  );
}

export default Footer;