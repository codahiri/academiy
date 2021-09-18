import styled from "styled-components";
import HeaderLogo from '../../images/header/header.png'
import Bg from '../../images/header/vector.png'

export const Body = styled.div`
  width: 100%;
  height: 964px;
  background-image: url(${Bg});
  background-position: bottom;
  background-size: cover;
`

export const Headers = styled.div`
  width: 1152px;
  height: 900px;
  background-image: url(${HeaderLogo});
  background-size: cover;
  background-position: center;
  margin: 55px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 217px;
  padding-right: 217px;
`
export const Title = styled.div`
  font-size: 64px;
  line-height: 68px;
  text-align: center;
  color: #090B37;
`
export const Desc = styled.div`
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #3C2B84;
  margin: 28px 0 34px;
`
export const InputBox = styled.div`
  height: 80px;
  width: 640px;
  background: #FFFFFF;
  border: 2px solid #090B37;
  box-sizing: border-box;
  box-shadow: 1px 1px 0px #090B37;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 8px 27px 38px;
`
export const Input = styled.input`
  font-size: 17px;
  line-height: 26px;
  text-decoration-line: underline;
  color: #A0A0A0;
  border: none;
  outline: none;
`
export const ArrowBox = styled.div`
  width: 120px;
  height: 64px;
  background: #090B37;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  :active{
    transform: scale(0.8);
  }
  svg{
    width: 24px;
    color: #fff;
  }
`
export const Commit = styled.div`
  width: 608px;
  display: flex;
  padding-left: 15px;
  p{
    font-size: 17px;
    line-height: 26px;
    color: #3C2B84;
    padding: 23px 0 0 15px;
  }
`