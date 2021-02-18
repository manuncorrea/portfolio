import React from 'react';
import { Section, Content } from './styles';

const Skill = () => {
  return(
    <Section>
        <div className="title">
          <h2>Skill</h2>
          <span></span>
        </div>
      <Content>
        <div className="content-skill">
          <span>Tenho Experiencia:</span>
          <div className="skill">
            <img src="https://xesque.rocketseat.dev/platform/tech/bootstrap.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/react-native.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/css3.sv" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/html5.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/css3.svg" alt=""/>
          </div>
        </div>

        <div className="content-skill">
          <span>Estou estudando:</span>
          <div className="skill">
            <img src="https://xesque.rocketseat.dev/platform/tech/nextjs.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/node.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/postgresql.svg" alt=""/>
          </div>
        </div>

        <div className="content-skill">
          <span>Tenho Interesse:</span>
          <div className="skill">
            <img src="https://xesque.rocketseat.dev/platform/tech/angularjs.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/vuejs.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/flutter.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/python.svg" alt=""/>
            <img src="https://xesque.rocketseat.dev/platform/tech/mongodb.svg" alt=""/>
          </div>
        </div>
      </Content>
    </Section>
  );
}

export default Skill;