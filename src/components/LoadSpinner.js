import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function LoadSpinner() {
  return (
    <Spinner>
        <Ring />
    </Spinner>
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
`

const Ring = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid ${props => props.theme.main};
      border-color: ${props => props.theme.main} transparent ${props => props.theme.main} transparent;
      animation: ${rotate} 1.2s linear infinite;
  }
`