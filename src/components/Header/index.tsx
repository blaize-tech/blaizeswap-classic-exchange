import { ChainId } from '@uniswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import { RowBetween, RowStart, RowEnd } from '../Row'
import Web3Status from '../Web3Status'
// import VersionSwitch from './VersionSwitch'

const HeaderContainer = styled(RowBetween)`
  margin-bottom: 90px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 50px;
  max-width: 1080px;
  width: 100%;
`

const Title = styled.a`
  transition: opacity 0.3s;
  text-decoration: none;
  margin-right: 20px;
  color: ${({ theme }) => theme.text1};

  &:hover {
    opacity: 0.6;
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const HeaderControls = styled(RowEnd)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    <HeaderContainer>
      <Title href=".">
        BlaizeSwap
      </Title>
      <HeaderControls>
        <RowStart>
          <TestnetWrapper>
            {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
          </TestnetWrapper>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            {account && userEthBalance && (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {userEthBalance?.toSignificant(4)} ETH
              </BalanceText>
            )}
            <Web3Status />
          </AccountElement>
        </RowStart>
        <RowStart>
          {/* <VersionSwitch /> */}
          <Settings />
          <Menu />
        </RowStart>
      </HeaderControls>
    </HeaderContainer>
  )
}
