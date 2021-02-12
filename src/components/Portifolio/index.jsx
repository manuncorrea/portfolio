import React from 'react';

import gobarber from '../../assets/image/gobarber.png';
import quiz from '../../assets/image/quiz.png';
import { SectionPortifolio, Content } from './style';

const Portifolio = () => {
  return(
    <SectionPortifolio>
      <div className="title">
        <h2>Portfolio</h2>
      </div>
        <Content>
          <div className="single-img"><img src={quiz} alt=""/></div>
          <div className="single-img"><img src={gobarber} alt=""/></div>
          <div className="single-img"><img src={quiz} alt=""/></div>
          <div className="single-img"><img src={gobarber} alt=""/></div>
          <div className="single-img"><img src={quiz} alt=""/></div>
          <div className="single-img"><img src={gobarber} alt=""/></div>
        </Content>
    </SectionPortifolio>
  );
}

export default Portifolio;