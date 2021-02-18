import React from 'react';
import { GoGitBranch, GoStar } from 'react-icons/go';

import { Content, RepositoryStats } from './style';

const Repository = ({ repo }) => {
  const {
    url,
    name,
    avatar,
    description,
    branch, 
    stars,
  } = repo;

  return(
    <Content href={url}>
      <h4>
        <img src={avatar} alt="Manu"/>
        {name}
      </h4>
      <p>{description}</p>
      <RepositoryStats>
        <div>
          <GoStar/>
          <span><strong>{stars}</strong>stars</span>
        </div>

        <div>
          <GoGitBranch />
          <span><strong>{branch}</strong>branch</span>
        </div>
      </RepositoryStats>
    </Content>
  );
}

export default Repository;