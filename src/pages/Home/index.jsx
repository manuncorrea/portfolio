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
          <a href="https://www.linkedin.com/in/emanuele-correa-0372b2117/" target="_blank" rel="noreferrer">
            <button>
              Saiba mais
            </button>
          </a>
          
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