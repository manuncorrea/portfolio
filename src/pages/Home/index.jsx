import React from 'react';

import { Content, Section, About, Img } from  './style';

import Portfolio from '../../components/Portfolio';
import Repositories from '../../components/Repositories';

import aboutImg from '../../assets/image/about2.svg';
import Skill from '../../components/Skill';




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
      <Portfolio />
      <Skill />
      <Repositories />
    </Content>
  );
}

export default Home;