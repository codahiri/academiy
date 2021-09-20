import styled from 'styled-components'

export const FooterSec = styled.div`
  width: 100%;
  height: 868px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 340px;
`
export const Title = styled.div`
  font-size: 64px;
  line-height: 68px;
  text-align: center;
  color: #090B37;
  margin: 25px 0;
`
export const Commit = styled.div`
  font-size: 21px;
  line-height: 32px;
  text-align: center;
  color: #51526A;
  margin: 28px 0 66px;
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
  width: 70%;
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
export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 184px;
  padding: 0 16px;
`
export const Box = styled.div`
  width: 60px;
  height: 60px;
  background: #EBECF4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 35px;
    color: #090B37;
    transition: all 0.3s linear;
    cursor: pointer;
    :hover{
      transform: scale(1.2);
    }
  }
  margin: 120px 0 22px;
`
export const Creator = styled.div`
  font-size: 22px;
  line-height: 32px;
  color: #3C2B84;
  a{
    text-decoration: dotted;
  }
`