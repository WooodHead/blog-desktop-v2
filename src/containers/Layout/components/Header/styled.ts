import styled from 'styled-components'
import {
  flexMixin,
  transitionMixin,
  backgroundMixin,
  animationMixin,
} from 'src/styled/mixins'
import { wrench } from 'src/styled/animations'

export const NavBar = styled.nav`
  box-sizing: border-box;
  position: fixed;
  ${flexMixin('space-between')}
  width:100%;
  padding: 0 2.4rem;
  font-family: 'Ubuntu', sans-serif;
  background: ${({ theme }) => theme.background.primary};
  opacity: 0.95;
  box-shadow: 0 1px 40px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  ${transitionMixin('background', 250, 'linear')};

  &.hideNavBarBackground {
    background: transparent;
    box-shadow: none;
  }

  &:hover {
    background: ${({ theme }) => theme.background.primary};
    box-shadow: 0 1px 40px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
    ${transitionMixin('background', 250, 'linear')};
  }
`

export const NavBarItem = styled.div`
  ${flexMixin('flex-start')}
  margin-right: 28.5rem;

  a {
    position: relative;
    ${flexMixin()}
    margin-left: 1.6rem;
    padding: 0 0.2rem;
    height: ${({ theme }) => theme.headerHeight};
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text.primary};
    ${transitionMixin('color')}

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.4rem;
      background: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('width')}
    }

    svg {
      margin-right: 0.5rem;
      width: 1.1rem;
      height: 1.1rem;
      fill: ${({ theme }) => theme.text.primary};
      ${transitionMixin('fill')}
    }

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
      ${transitionMixin('color')}

      &::after {
        width: 100%;
      }

      svg {
        fill: ${({ theme }) => theme.colors.orange};
        ${transitionMixin('fill')}
        ${animationMixin(wrench, 2000, 'ease', 'infinite')}
      }
    }
  }
`

export const Logo = styled.a`
  width: 14.67rem;
  height: 2.93rem;
  background: url('data:image/png;base64,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');
  cursor: pointer;
  ${backgroundMixin()}
`
