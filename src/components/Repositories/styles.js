import styled, { css } from 'styled-components';
import { above } from '../../styles/responsive';

import Container from '../Container';

export const Content = styled.div`
  background: #fff;
  text-align: center;
  padding: 6rem 0;

  h1{
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled(Container)`
   display: grid;
   grid-gap: 2rem;
   grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  ${above(700, css`
    > a:first-child {
      grid-column: span 2;
    }
  `)}
`;