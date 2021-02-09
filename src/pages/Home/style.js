import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { below } from '../../styles/responsive';
import Container from '../../components/Container';


export const Section = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${below('lg', css `
    padding: 8rem 0;
  `)}
  ${below(710, css`
    flex-direction: column;
    padding: 6rem 0;
  `)}
`;

export const About = styled.div`
 
  h1{
    font-size: 54px;
    letter-spacing: -2px;
    font-weight: 700;
  }

  h3{
    font-size: 36px;
    font-weight: 400;
  }

  p{
    font-size: 18px;
    font-weight: lighter;
    color: ${({ theme }) => theme.text};
  }

  button{
    margin-top: 15px;
    width: 159px;
    height: 50px;
    background: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 50px;
    transition: 0.8s;

    color: #fff;
    font-weight: bold;

    &:hover{
      background: ${shade(0.3, '#673AB7')};
    }
  }
`;

export const Img = styled.div`
  margin-top: 10rem;

  ${below('lg', css`
    margin-bottom: 20rem;
    height: 200px;
  `)}

  ${below('md', css`
    margin-bottom: 20rem;
    height: 180px;
  `)}

  ${below(710, css`
    order: -1;
    margin-bottom: 20rem;
  `)}

`;

export const Portifolio = styled.div`
  background: ${({ theme }) => theme.primary};
  margin-top: 10rem;
  width: 100%;
  height: auto;
`;

export const SectionPortifolio = styled(Container)``;