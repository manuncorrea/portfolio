import styled, { css } from 'styled-components';
import { above, below } from '../../styles/responsive';

import Container from '../Container';

export const Navbar = styled.header`
  position: relative;
  width: 100%;
  height: 10rem;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 6px rgba(0, 0 , 0, .16);
  z-index: 2;
`;

export const Nav = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  img{
    width: 220px;
    height: 85px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  ${below('md', css`
    display: none;
  `)}

  ${({ open }) => open && below('md', css`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background:  rgb(46,41,78, 0.8);
    flex-direction: column;
    justify-content: center;
  `)}
`;

export const Link = styled.a.attrs({
  href: '#'
})`
  position: relative;
  color: ${({ theme }) => theme.titleOne};
  transition: color .3s;

  & + a {
    margin-left: 2em;
  }

  &:hover {
    color: #aaa;
  }

  ${({ active, theme }) => active && css`
    color: ${theme.titleOne};
    font-weight: 700;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -2px;
      background: ${theme.seccundary};
    }
  `}

  /*${({ type, theme }) => type === 'button' && css`
    background: ${theme.accent};
    border: 2px solid ${theme.accent};
    padding: .3em 1em;
    border-radius: 4px;
    color: #fff;
    transition: background .3s, color .3s;

    &:hover {
      background: none;
      color: ${theme.accent};
    }
  `}*/

  ${below('md', css`
    font-size: 2.4rem;

    & + a {
      margin-left: 0;
      margin-top: 2rem;
    }
  `)}
`;

export const NavToggle = styled.button`
  width: 30px;
  height: 20px;
  background: none;
  border: 0;
  position: relative;
  outline: 0;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.accent};
    transition: .2s;

    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background: inherit;
      transition: .2s;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  ${({ open }) => open && css`
    span {
      background: transparent;

      &::before, &::after {
        background: ${({ theme }) => theme.accent};
        top: 8px;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  `}

  ${above('md', css`
    display: none;
  `)}

  ${({ open }) => open && below('md', css`
    position: fixed;
    right: 5%;
  `)}
`;


