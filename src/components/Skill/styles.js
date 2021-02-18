import styled from 'styled-components';
import Container from '../Container';

export const Section = styled.section`
  background: ${({ theme }) => theme.primary};
  height: 300px;

  .title{
    color: #fff;
    text-align: center;
    padding: 3.5rem;
    letter-spacing: .1rem;
    font-weight: 400;

    span{
      content: '';
      border-top: 2px solid ${({ theme }) => theme.accent};
      width: 40px;
      display: block;
      margin-bottom: 8px;
      margin: 0 auto;
    }
  }

  @media( max-width: 690px){
    height: 400px;
  }
`;

export const Content = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media( max-width: 690px) {
    display: flex;
    flex-direction: column;
    text-align: justify;
  }

  .content-skill{
    text-align: center;
  }

  span{
    color: #f5f5f5;
  }

  .skill{
    margin-top: 2rem;
  }

  .skill + .skill::after{
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1px;
    height: 80%;
    background-color: #f6e;
  }

  img{
    margin-left: -12px;
    transition: transform .2s, box-shadow .2s;
    &:hover {
      transform: translateY(-6px);
    }
  }
`;