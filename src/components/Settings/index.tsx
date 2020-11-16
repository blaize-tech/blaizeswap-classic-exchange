import React, { useRef, useState } from 'react'
import { Settings, X } from 'react-feather'
import styled from 'styled-components'
import { ButtonPrimary } from '../Button'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import {
  useUserSlippageTolerance,
  useExpertModeManager,
  useUserDeadline,
  useDarkModeManager
} from '../../state/user/hooks'
import TransactionSettings from '../TransactionSettings'
import { RowBetween, RowStart } from '../Row'
import QuestionHelper from '../QuestionHelper'
import Toggle from '../Toggle'
import { AutoColumn } from '../Column'
import { ButtonError } from '../Button'
import { useSettingsMenuOpen, useToggleSettingsMenu } from '../../state/application/hooks'
import { Text } from 'rebass'
import Modal from '../Modal'
import { useTranslation } from 'react-i18next'

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const MenuContainer = styled.div`
  position: relative;
`

const ExpertModeIcon = styled.span`
  font-size: 14px;
  position: absolute;
  bottom: 4px;
  right: 0px;
`

const MenuDropDown = styled.div`
  background-color: ${({ theme }) => theme.primary1};
  min-width: 200px;
  max-width: 250px;
  position: absolute;
  padding: 20px;
  z-index: 100;
  right: 0;
  top: calc(100% + 1rem);

  ${({ theme }) => theme.mediaFromWidth.phone`
    max-width: none;
    width: 420px;
  `};
`

const MenuDropDownHeader = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryText1};
`

const MenuDropDownText = styled.p`
  letter-spacing: 0.5px;
  margin-bottom: 0;
  margin-right: 6px;
  margin-top: 0;
  line-height: 22px;
  font-size: 14px;
  color: ${({ theme }) => theme.text6};
`

const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.bg3};
`

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 20px;
`

export default function SettingsTab() {
  const node = useRef<HTMLDivElement>()
  const open = useSettingsMenuOpen()
  const toggle = useToggleSettingsMenu()
  const { t } = useTranslation()

  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()

  const [deadline, setDeadline] = useUserDeadline()

  const [expertMode, toggleExpertMode] = useExpertModeManager()

  const [darkMode, toggleDarkMode] = useDarkModeManager()

  // show confirmation view before turning on
  const [showConfirmation, setShowConfirmation] = useState(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <MenuContainer ref={node as any}>
      <Modal isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxHeight={100}>
        <ModalContentWrapper>
          <AutoColumn gap="lg">
            <RowBetween style={{ padding: '0 2rem' }}>
              <div />
              <Text fontWeight={500} fontSize={20}>
              {t('areYouSure')}
              </Text>
              <StyledCloseIcon onClick={() => setShowConfirmation(false)} />
            </RowBetween>
            <Break />
            <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
              <Text fontWeight={500} fontSize={20}>
              {t('expertModeTips1')}
              </Text>
              <Text fontWeight={600} fontSize={20}>
              {t('expertModeTips2')}
              </Text>
              <ButtonError
                error={true}
                padding={'12px'}
                onClick={() => {
                  if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === 'confirm') {
                    toggleExpertMode()
                    setShowConfirmation(false)
                  }
                }}
              >
                <Text fontSize={20} fontWeight={500} id="confirm-expert-mode">
                {t('turnOnExpertMode')}
                </Text>
              </ButtonError>
            </AutoColumn>
          </AutoColumn>
        </ModalContentWrapper>
      </Modal>
      <ButtonPrimary padding="7px" onClick={toggle}>
        {open ? (
          <X />
        ) : (
          <Settings />
        )}
        {expertMode && (
          <ExpertModeIcon role="img" aria-label="wizard-icon">
            🧙
          </ExpertModeIcon>
        )}
      </ButtonPrimary>
      {open && (
        <MenuDropDown>
          <MenuDropDownHeader>
            {t('transactionSettings')}
          </MenuDropDownHeader>
          <TransactionSettings
            rawSlippage={userSlippageTolerance}
            setRawSlippage={setUserslippageTolerance}
            deadline={deadline}
            setDeadline={setDeadline}
          />
          <MenuDropDownHeader>
            {t('interfaceSettings')}
          </MenuDropDownHeader>
          <RowBetween style={{ marginBottom: 10 }}>
            <RowStart style={{ marginRight: 6 }}>
              <MenuDropDownText>
                {t('toggleExpertMode')}
              </MenuDropDownText>
              <QuestionHelper text="Bypasses confirmation modals and allows high slippage trades. Use at your own risk." />
            </RowStart>
            <Toggle
              id="toggle-expert-mode-button"
              isActive={expertMode}
              toggle={
                expertMode
                  ? () => {
                      toggleExpertMode()
                      setShowConfirmation(false)
                    }
                  : () => {
                      toggle()
                      setShowConfirmation(true)
                    }
              }
            />
          </RowBetween>
          <RowBetween>
            <MenuDropDownText>
              {t('toggleDarkMode')}
            </MenuDropDownText>
            <Toggle isActive={darkMode} toggle={toggleDarkMode} />
          </RowBetween>
        </MenuDropDown>
      )}
    </MenuContainer>
  )
}
