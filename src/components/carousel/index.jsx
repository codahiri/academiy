import React from 'react'
import { Carousels, Marks, Title, User } from './style'
import mark from '../../images/carousel/marks.svg'
import user from '../../images/carousel/user.png'
export const Carousel = () => {
  return (
    <Carousels>
      <Marks>
        <img src={mark} alt='mark' />
      </Marks>
      <Title>This is EASILY the most galaxy-brain maneuvering through Figma that I’ve EVER seen. Holy SHIT.</Title>
      <User>
        <img src={user} alt='user' />
        <span>@rvatrout</span>
      </User>
    </Carousels>
  )
}