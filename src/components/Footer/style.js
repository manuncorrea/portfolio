import styled from 'styled-components';
import Container from '../Container';

export const Content = styled.div`
  width: 100%;
  height: 290px;
  background: ${({ theme }) => theme.primary};
`;

export const Section = styled(Container)`
  .title{
    text-align: center;
    color: #fff;
    padding: 3.5rem;
  }

  span#underline{
      content: '';
      border-top: 2px solid ${({ theme }) => theme.accent};
      width: 70px;
      display: block;
      margin-bottom: 8px;
      margin: 0 auto;
    }
  
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    margin-left: 10px;

    cursor: pointer;

    &:hover{
      background: ${({ theme }) => theme.seccundary}
    }
  }

  .social{
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.primary};

    &:hover{
      color: #fff;
    }

  }
`;

 export const Rodape = styled.div`
  background: ${({ theme }) => theme.seccundary};

  .footer{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f1f1;
    font-weight: 300;
  }
`;
