import React from 'react'
import { Container, LinkInput, Logo, Nav, Link, Input } from './style'
import logo from '../../images/navbar/logo.svg'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logo} alt='Logo' />
        </Logo>

        <LinkInput>
          <Link href='/'>Join the list <ArrowRight /> </Link>
          <Input placeholder='Your@email.com' />
        </LinkInput>
      </Nav>
    </Container>
  )
}
