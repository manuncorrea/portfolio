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
        <h2>Portfolio</h2>
        <span></span>
      </div>
      <PortfolioTeste>
        <div>
          <h3>Gobarber</h3>
          <img src={Gobarber} alt=""/>
        </div>

        <div>
          <h3>Happy</h3>
          <img src={Happy} alt=""/>
        </div>

        <div>
          <h3>Quiz ReactJS</h3>
          <img src={Quiz} alt=""/>
        </div>

        <div>
          <h3>Ecoleta</h3>
          <img src={Ecoleta} alt=""/>
        </div>

        <div>
          <h3>Memory Among Us</h3>
          <img src={AmongUs} alt=""/>
        </div>

        <div>
          <h3>GoFinanças</h3>
          <img src={GoFinancas} alt=""/>
        </div>
      </PortfolioTeste>
    </Section>
  );
}

export default Teste;