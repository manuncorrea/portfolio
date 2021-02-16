import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { below } from '../../styles/responsive';
import Container from '../../components/Container';

export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: 600px) {
    Content {
      flex: 100%;
      max-width: 100%;
    }
}
`;


export const Section = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${below('lg', css `
    padding: 8rem 0;
  `)}
  
  ${below(710, css`
    max-width: 100%;
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

  img{
    max-width: 700px;
  }

  @media screen and (max-width: 881px) and (min-width: 773px){
    img{
      width: 500px;
    }
  }

  @media ( max-width: 412px) {
    img{
      width: 350px;
      height: 600px;
    }
  }

  ${below('lg', css`
    margin-bottom: 20rem;
    height: 200px;

    img{
      max-width: 600px;
      max-height: 350px;
    }
  `)}

  ${below('md', css`
    margin-bottom: 20rem;
    height: 180px;

    img{
      max-width: 450px;
      max-height: 350px;
    }

  `)}

  ${below(710, css`
    order: -1;
    margin-bottom: 20rem;
  `)}

`;

