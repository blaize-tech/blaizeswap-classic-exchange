import React, { useRef } from 'react'
import { Code, MoreHorizontal, X } from 'react-feather'
import styled from 'styled-components'
import { ButtonPrimary } from '../../components/Button'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'
import { useTranslation } from 'react-i18next'

import { ExternalLink } from '../../theme'

const MenuContainer = styled.div`
  position: relative;
`
const MenuList = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  min-width: 200px;
  max-width: 320px;
  position: absolute;
  padding: 20px;
  z-index: 100;
  top: calc(100% + 1rem);

  ${({ theme }) => theme.mediaWidth.bigLaptop`
    background-color: ${({ theme }) => theme.primary1};
    right: 0;
  `};

  ${({ theme }) => theme.mediaFromWidth.bigLaptop`
    max-width: 200px;
    left: 100%;
    top: -20px;
  `};
`

const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const MenuLink = styled(ExternalLink)`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  line-height: 1;
  font-size: 14px;
  max-width: 100%;
  display: block;
  color: ${({ theme }) => theme.primaryText1};

  ${({ theme }) => theme.mediaFromWidth.bigLaptop`
    color: ${({ theme }) => theme.text1};
  `};

  :hover {
    color: ${({ theme }) => theme.red1};
  }

  > svg {
    vertical-align: middle;
    margin-right: 8px;
    display: inline-block;
  }

  > span {
    vertical-align: middle;
    display: inline-block;
  }
`

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const [open, toggle] = useToggle(false)
  const { t } = useTranslation()

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <MenuContainer ref={node as any}>
      <ButtonPrimary padding="7px" onClick={toggle}>
        {open ? (
          <X />
        ) : (
          <MoreHorizontal />
        )}
      </ButtonPrimary>
      {open && (
        <MenuList>
          <MenuItem>
            <MenuLink
              id="link"
              href="https://github.com/jiro-ono/sushiswap-classic-interface"
            >
              <Code size={14} />
              <span>{t('code')}</span>
            </MenuLink>
          </MenuItem>
        </MenuList>
      )}
    </MenuContainer>
  )
}
