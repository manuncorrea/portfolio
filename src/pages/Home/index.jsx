import React from 'react';
import { Content, Section, About, Img } from  './style';

import Repositories from '../../components/Repositories';
import aboutImg from '../../assets/image/about2.svg';
import Portifolio from '../../components/Portifolio';


const Home = () => {
  return(
    <Content>
      <Section>
        <About>
          <h1>
            Emanuele <br/>Correa 
          </h1>
          <h3>Web Developer</h3>
          <p>Formada em Ciências da computação</p>
          <button>Saiba mais</button>
        </About>
        <Img>
          <img src={aboutImg} alt="Sobre"/>
        </Img>
      </Section>
      <Portifolio />
      <Repositories />
    </Content>
  );
}

export default Home;