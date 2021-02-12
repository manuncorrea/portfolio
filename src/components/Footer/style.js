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
  }

  .social{
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.primary};
  }
`;
 export const Rodape = styled.div`
  background: ${({ theme }) => theme.seccundary};

  span{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #f1f1f1;
    font-weight: 300;
  }
`;