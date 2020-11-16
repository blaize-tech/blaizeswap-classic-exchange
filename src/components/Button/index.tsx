import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { RowBetween } from '../Row'
import { ChevronDown } from 'react-feather'
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components'

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  transition: background-color 0.3s;

  text-transform: uppercase;
  letter-spacing: 0.3em;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0'};
  font-weight: 700;
  line-height: 1;
  text-align: center;
  font-size: 14px;
  min-width: ${({ width }) => (width ? width : 'auto')};
  outline: none;
  padding: ${({ padding }) => (padding ? padding : '18px')};
  border: none;
  cursor: pointer;
  color: white;

  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.primaryText1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && transparentize(0.25, theme.primary1)};
  }

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && transparentize(0.1, theme.primary1)};
  }

  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && transparentize(0.25, theme.primary1)};
    background-color: ${({ theme, disabled }) => !disabled && transparentize(0.2, theme.primary1)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.primary3};
    color: ${({ theme }) => theme.primaryText3};
  }
`

export const ButtonLight = styled(Base)`
  background-color: ${({ theme }) => theme.primary2};
  color: ${({ theme }) => theme.primaryText2};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary2)};
  }

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.primary2)};
  }

  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary2)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.2, theme.primary2)};
  }

  &:disabled {
    color: ${({ theme }) => theme.primaryText3};
  }
`

export const ButtonGray = styled(Base)`
  background-color: ${({ theme }) => theme.primary2};
  color: ${({ theme }) => theme.primaryText2};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary2)};
  }

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.primary2)};
  }

  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary2)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.2, theme.primary2)};
  }

  &:disabled {
    color: ${({ theme }) => theme.primaryText3};
  }
`

export const ButtonSecondary = styled(Base)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.primaryText1};
  font-size: 16px;
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    background-color: ${({ theme }) => theme.primary4};
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary4};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    background-color: ${({ theme }) => theme.primary4};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.primary5};
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonOutlined = styled(Base)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: transparent;
  color: ${({ theme }) => theme.text1};

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg4};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  background-color: ${({ theme }) => theme.primary4};
  color: ${({ theme }) => theme.primaryText4};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary4)};
  }

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.primary4)};
  }

  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.25, theme.primary4)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.2, theme.primary4)};
  }

  &:disabled {
    color: ${({ theme }) => theme.primaryText3};
  }
`

const ButtonConfirmedStyle = styled(Base)`
  background-color: ${({ theme }) => lighten(0.5, theme.green1)};
  color: ${({ theme }) => theme.green1};
  border: 1px solid ${({ theme }) => theme.green1};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
  }
`

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}

export function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  )
}

export function ButtonDropdownLight({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlined>
  )
}

export function ButtonRadio({ active, ...rest }: { active?: boolean } & ButtonProps) {
  if (!active) {
    return <ButtonWhite {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}
