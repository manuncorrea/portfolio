import React from 'react';
import { GrGithub, GrLinkedin, GrTwitter } from 'react-icons/gr';

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
            <span>
               <GrGithub className="social" />
            </span>
            <span>
              <GrLinkedin className="social"  />
            </span>

            <span>
              <GrTwitter className="social"  />
            </span>
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
