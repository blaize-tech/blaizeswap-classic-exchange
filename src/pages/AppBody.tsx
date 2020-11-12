import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg1};
  margin-right: auto;
  margin-left: auto;
  max-width: 990px;
  position: relative;
  z-index: 1;
  padding: 50px 40px 80px;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 30px 20px 50px;
  `};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
