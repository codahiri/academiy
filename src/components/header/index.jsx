import React from 'react'
import { Body, Headers, Title, Desc, InputBox, Input, ArrowBox, Commit } from './style'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import HeaderLine from '../../images/header/header-line.png'

export const Header = () => {
  return (
    <Body>
      <Headers>
        <Title>Ready to become a better product designer?</Title>
        <Desc>Learn advanced design tactics with hands-on lessons delivered directly inside of Figma</Desc>
        <InputBox>
          <Input placeholder='Your@email.com' />
          <ArrowBox>
            <ArrowRight />
          </ArrowBox>
        </InputBox>
        <Commit>
          <img src={HeaderLine} alt='line' />
          <p>Get notified when enrollment opens again.</p>
        </Commit>
      </Headers>
    </Body>
  )
}
