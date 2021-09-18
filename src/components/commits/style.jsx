import styled from "styled-components";
import Vector from '../../images/commits/vector.png';
// import { ReactComponent as Vector } from "../../images/commits/vector2.svg";

// const Icon = styled(Vector)`
//   width: 100%;
// `

export const CommitSec = styled.div`
  width: 100%;
  height: 712px;
  background-image: url(${Vector});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  width: 700px;
  height: 544px;
  border: 2px solid #090B37;
  box-sizing: border-box;
  border-radius: 18px;
  background: rgb(226,226,250);
  background: radial-gradient(circle, rgba(226,226,250,1) 0%, rgba(229,239,255,1) 100%);
  padding: 50px 83px 66px 66px;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UserMore = styled.div`
  display: flex;
  align-items: end;
  position: relative;
`
export const Btn = styled.img`
  /* width: 81px;
  height: 33px;
  background: #fff;
  border: 2px solid #090B37;
  box-sizing: border-box;
  box-shadow: 1px 1px 0px #090B37;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer; */

  position: absolute;
  bottom: 0;
  right: -82px;
  cursor: pointer;
  transition: all 0.3s linear;
  :active{
    transform: scale(0.8);
  }
`
export const Twit = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    color: #000;
    width: 35px;
    cursor: pointer;
    transition: all 0.3s linear;
    :hover{
      transform: scale(1.2);
    }
  }
` 
export const Center = styled.div`
  .one{
    font-size: 20px;
    line-height: 24px;
    color: #3C2B84;
    margin: 24px 0 14px;
  }
  ul{
    font-size: 18px;
    line-height: 26px;
    color: #333333;
    li{
      list-style: none;
      margin-bottom: 15px;
    }
  }
`
export const Bottom = styled.div`
  width: 210px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #090B37;
`