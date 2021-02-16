import styled from "styled-components";
import Container from '../Container';

export const SectionPortifolio = styled.div`
  width: 100%;
  height: 750px;
  margin-top: 50px;
  background: ${({ theme }) => theme.seccundary};

  @media (max-width: 367px) {
    height: 800px;
  }

  img{
    transition: transform .2s, box-shadow .2s;

    &:hover {
    transform: translateY(-4px);
    }
  }

  @media (max-width: 367px){
    img{
      width: 400px;
    }
  }

  @media (max-width: 412px) {
    img{
      width: 150px;
      height: 150px;
    }
  }
 
  .title{
    text-align: center;
    color: #fff;
    padding: 3.5rem;
    font-weight: 400;
  }

`;

export const Content = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .single-img{
    padding: 0 10px 20px;
  }
`;


/* .content{
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.primary};
    height: auto;
  }

  img{
    margin-top: 15px;
    margin-right: 10px;
    margin-bottom: 3.8rem;
    transition: transform .2s, box-shadow .2s;

    &:hover {
    transform: translateY(-4px);
    }
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }*/

