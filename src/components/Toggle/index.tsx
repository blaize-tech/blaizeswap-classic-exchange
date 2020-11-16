import React from 'react'
import styled from 'styled-components'

const ToggleElement = styled.span<{ isActive?: boolean }>`
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme, isActive }) =>
    (isActive ? theme.primary2 : 'transparent')};
  letter-spacing: 0.5px;
  font-size: 14px;
  flex-grow: 1;
  padding: 12px;
  color: ${({ theme, isActive }) => (isActive ? theme.text1 : theme.text7)};
`

const StyledToggle = styled.button<{
  isActive?: boolean;
  activeElement?: boolean
}>`
  background-color: ${({ theme }) => theme.primary3};
  display: flex;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
`

export interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
}

export default function Toggle({ id, isActive, toggle }: ToggleProps) {
  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement isActive={isActive}>
        On
      </ToggleElement>
      <ToggleElement isActive={!isActive}>
        Off
      </ToggleElement>
    </StyledToggle>
  )
}
