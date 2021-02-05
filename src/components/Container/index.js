import styled, { css } from 'styled-components';
import { below } from '../../styles/responsive';

export default styled.div`
  width: 1200px;
  margin: 0 auto;

  ${below('lg', css`
    width: 90%;
  `)}
`;
