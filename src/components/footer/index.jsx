import React from 'react'
import { Commit, FooterSec, Title, InputBox , Input, ArrowBox, Socials, Box, Creator} from './style'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Link } from '@styled-icons/boxicons-regular/Link'

export const Footer = () => {
  return (
    <FooterSec>
      <Title>Get notified when enrollment opens again</Title>
      <Commit>
        Currently there are ~500 designers learning together in Figma.
        Enter your email below if you'd like to join them <span role='img' aria-label>👇</span>
      </Commit>

      <InputBox>
        <Input />
        <ArrowBox>
          <ArrowRight />
        </ArrowBox>
      </InputBox>

      <Socials>
        <Box>
          <Twitter />
        </Box>
        <Box>
          <Link />
        </Box>
      </Socials>

      <Creator>Created by <a href="https://github.com/codahiri">CodaHiri</a> </Creator>
    </FooterSec>
  )
}
