import styled from 'styled-components'

// export const Container = styled.div`
//   width: 1152px;
//   margin: 0 auto;
// `
export const Nav = styled.div`
  width: 100%;
  height: 80px;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  width: 180px;
  height: 72px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 15px;
  }
`

export const LinkInput = styled.div`
  width: 543px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Link = styled.a`
  font-size: 20px;
  line-height: 24px;
  color: #090B37;
  text-decoration: none;
  svg{
    width: 15px;
  }
`
export const Input = styled.input`
  height: 56px;
  width: 400px;
  background: #FFFFFF;
  border: 2px solid #090B37;
  box-sizing: border-box;
  box-shadow: 1px 1px 0px #090B37;
  border-radius: 200px;
  padding: 15px 54px 15px 21px;
  outline: none;
  ::placeholder{
    font-size: 17px;
    line-height: 26px;
    text-decoration-line: underline;
    color: #A0A0A0;
  }
`