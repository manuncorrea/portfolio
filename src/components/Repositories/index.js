import React from 'react';
import Repository from './Repository';

import { Content, Wrapper } from './styles';

import database from '../../database.json';

const Repositores = () => {
  return(
    <Content>
      <h2 id="repositorios">Repositorios nos GitHub</h2>
      <Wrapper>
        {database.map(repo => (
          <Repository key={repo.url} repo={repo} />
        ))}
      </Wrapper>
    </Content>
  )
}

export default Repositores;