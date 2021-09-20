import React from 'react'
// import {classes} from './style.mudule.css'
import Rastangle from '../../images/active/Restangle.png'

function index() {
    return (
        <div className="active">
        <div className="active__container"></div>
        <div className="active__footerImg">
        <img src={Rastangle} alt="" />
        </div>
        </div>
    )
}

export default index