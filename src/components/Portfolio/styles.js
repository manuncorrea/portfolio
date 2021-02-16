import styled from 'styled-components';
import Container from '../Container';

export const Section = styled.section`
  width: 100%;
  height: 700px;
  background: ${({ theme }) => theme.seccundary};
  margin-top: 9rem;

  .title{
    text-align: center;
    color: #fff;
    padding: 3.5rem;
    letter-spacing: .1rem;
    font-weight: 400;

    span{
      content: '';
      border-top: 2px solid ${({ theme }) => theme.accent};
      width: 70px;
      display: block;
      margin-bottom: 8px;
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    height: 950px;
  }

  @media (max-width: 663px) {
    height: 1700px;
  }
`;

export const PortfolioTeste = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 663px){
    display: flex;
    flex-direction: column;
    align-items: center;

  }


  div{
    width: 280px;
    height: 210px;
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 5px;
    background: #fff;
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;

    &:hover {
      transform: translateY(-4px);
      
    }

    h3{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.primary };
      color: #fff;
    }

    img{
      width: 100%;
      height: 100%;
    }
  }
`;
