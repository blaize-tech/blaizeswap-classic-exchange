import React, { useCallback, useState } from 'react'
import { HelpCircle as Question } from 'react-feather'
import styled from 'styled-components'
import Tooltip from '../Tooltip'

const QuestionIcon = styled(Question)`
  transition: opacity 0.3s;
  display: block;
  cursor: help;
  color: ${({ theme }) => theme.text6};

  :hover,
  :focus {
    opacity: 0.6;
  }
`

export default function QuestionHelper({ text }: { text: string }) {
  const [show, setShow] = useState<boolean>(false)

  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])

  return (
    <Tooltip text={text} show={show}>
      <QuestionIcon
        onMouseLeave={close}
        onMouseEnter={open}
        onClick={open}
        size={16}
      />
    </Tooltip>
  )
}
