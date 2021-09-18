import React from 'react'
import { CommitSec, Card, Top, Twit, UserMore, Btn, Center, Bottom } from './style'
import user from '../../images/commits/user.png'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import redd from '../../images/commits/redd.png'

export const Commits = () => {
  return (
    <CommitSec>
      <Card>
        <Top>
          <UserMore>
            <img src={user} alt='user' />
            <Btn src={redd} alt='redd' />
          </UserMore>
          <Twit>
            <Twitter />
          </Twit>
        </Top>
        <Center>
          <p className='one'>Meet the creator</p>
          <ul>
            <li>Hi! My name is Michael Riddering. I’ve been designing products every day for the past decade. Currently, I’m the founding designer at Maven—a new platform for cohort-based courses.</li>
            <li>I love to teach, so I also spend time mentoring others as a design advisor for Shift Nudge—a course specializing in UI design.</li>
          </ul>
        </Center>
        <Bottom>Trusted by 3,000+ designers</Bottom>
      </Card>
    </CommitSec>
  )
}
