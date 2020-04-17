import React, { FC } from 'react'
import styled from 'styled-components'
import { noUserSelectMixin } from 'src/styled/mixins'
import { glitchLoop1, glitchLoop2 } from 'src/styled/animations'

const Slogans = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 0 auto 1.5rem;
  font-family: 'Ubuntu', sans-serif;
  font-size: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  transform: translate3d(-50%, -40%, 0);
  ${noUserSelectMixin()}

  &::before,
&::after {
    position: absolute;
    content: attr(data-slogan);
    top: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
  }

  &::before {
    left: -1px;
    text-shadow: ${({ theme }) => `1px 0 ${theme.colors.sloganRed}`};
  }

  &::after {
    left: 1px;
    text-shadow: ${({ theme }) => `-1px 0 ${theme.colors.sloganBlue}`};
  }

  &:hover::before {
    text-shadow: ${({ theme }) => `4px 0 ${theme.colors.sloganRed}`};
    animation: ${glitchLoop1} 0.8s infinite ease-in-out alternate-reverse;
  }

  &:hover::after {
    text-shadow: ${({ theme }) => `-5px 0 ${theme.colors.sloganBlue}`};
    animation: ${glitchLoop2} 0.8s infinite ease-in-out alternate-reverse;
  }
`

const Slogan: FC = () => {
  return <Slogans data-slogan="HI, YANCEY!">HI, YANCEY!</Slogans>
}

export default Slogan
