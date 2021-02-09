import React from 'react';
import { Section, About, Img } from  './style';

import aboutImg from '../../assets/image/about2.svg';


const Home = () => {
  return(
    <>
      <Section>
        <About>
          <h1>
            Emanuele <br/>Correa 
          </h1>
          <h3>Web Developer</h3>
          <p>Formada em Ciências da computação</p>
          <button>Saiba Mais</button>
        </About>
        <Img>
          <img src={aboutImg} alt="Sobre"/>
        </Img>
      </Section>

      
    </>
  );
}

export default Home;