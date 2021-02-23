import React from 'react';
import { Section, Content } from './styles';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const Skill = () => {
  return(
    <Section>
        <div id ="skill" className="title">
          <h2>Skill</h2>
          <span></span>
        </div>
      <Content>
        <div className="content-skill">
          <span>Tenho Experiencia:</span>
          <div className="skill">
            <Tippy content="Bootstrap">
              <img src="https://xesque.rocketseat.dev/platform/tech/bootstrap.svg" alt=""/>
            </Tippy>
            <Tippy content="ReactJs">
              <img src="https://xesque.rocketseat.dev/platform/tech/react-native.svg" alt=""/>
            </Tippy>
            <Tippy content="JavaScript">
              <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt=""/>
            </Tippy>
            <Tippy content="HTML5">
            <img src="https://xesque.rocketseat.dev/platform/tech/html5.svg" alt=""/>
            </Tippy>
            <Tippy content="CSS3">
            <img src="https://xesque.rocketseat.dev/platform/tech/css3.svg" alt=""/>
            </Tippy>
            
          </div>
        </div>

        <div className="content-skill">
          <span>Estou estudando:</span>
          <div className="skill">
            <Tippy content="NextJs">
              <img src="https://xesque.rocketseat.dev/platform/tech/nextjs.svg" alt=""/>
            </Tippy>
            <Tippy content="Node">
             <img src="https://xesque.rocketseat.dev/platform/tech/node.svg" alt=""/>
            </Tippy>
            <Tippy content="TypeScript">
              <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt=""/>
            </Tippy>
            <Tippy content="PostgreSQL">
              <img src="https://xesque.rocketseat.dev/platform/tech/postgresql.svg" alt=""/>
            </Tippy>
          </div>
        </div>

        <div className="content-skill">
          <span>Tenho Interesse:</span>
          <div className="skill">
            <Tippy content="AngularJS">
              <img src="https://xesque.rocketseat.dev/platform/tech/angularjs.svg" alt=""/>
            </Tippy>
            <Tippy content="VueJs">
              <img src="https://xesque.rocketseat.dev/platform/tech/vuejs.svg" alt=""/>
            </Tippy>
            <Tippy content="Flutter">
             <img src="https://xesque.rocketseat.dev/platform/tech/flutter.svg" alt=""/>
            </Tippy>
            <Tippy content="Python">
              <img src="https://xesque.rocketseat.dev/platform/tech/python.svg" alt=""/>
            </Tippy>
            <Tippy content="MongoDB">
              <img src="https://xesque.rocketseat.dev/platform/tech/mongodb.svg" alt=""/>
            </Tippy>
          </div>
        </div>
      </Content>
    </Section>
  );
}

export default Skill;