import React from 'react';

import { Section, PortfolioTeste } from './styles';

import Gobarber from '../../assets/image/gobarber.png';
import Happy from '../../assets/image/bae70600-11fe-11eb-8d7d-d7cf6c81529f.png';
import Quiz from '../../assets/image/quiz.png';
import AmongUs from '../../assets/image/amongus.png';
import Ecoleta from '../../assets/image/e.png';
import GoFinancas from '../../assets/image/goFinancas.png';

const Teste = () => {
  return(
    <Section>
      <div className="title">
        <h2>Projetos</h2>
        <span></span>
      </div>
      <PortfolioTeste>
        <div>
          <h3>Gobarber</h3>
          <a href="https://memory-among-us.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={Gobarber} alt=""/>
          </a>
        </div>

        <div>
          <h3>Happy</h3>
          <a href="https://happy-amber.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={Happy} alt=""/>
          </a>
        </div>

        <div>
          <h3>Quiz ReactJS</h3>
          <a href="https://aluraquiz-base-eight-topaz.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={Quiz} alt=""/>
          </a>
        </div>

        <div>
          <h3>Ecoleta</h3>
          <a href="https://memory-among-us.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={Ecoleta} alt=""/>
          </a>
        </div>

        <div>
          <h3>Memory Among Us</h3>
          <a href="https://memory-among-us.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={AmongUs} alt=""/>
          </a>
        </div>

        <div>
          <h3>GoFinanças</h3>
          <a href="https://go-financas.vercel.app/"  target="_blank" rel="noreferrer">
            <img src={GoFinancas} alt=""/>
          </a>
        </div>
      </PortfolioTeste>
    </Section>
  );
}

export default Teste;