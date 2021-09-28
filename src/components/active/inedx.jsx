import React from 'react'
import Rastangle from '../../images/active/Rectangle.png'
import cycle from '../../images/works/vektor/Vector1.png'
import bur from '../../images/works/vektor/Vector2.png'
import right from '../../images/works/vektor/Vector3.png'
import './style.css'

export const Active = ()=> {
    return (
        <div className="active">
            <div className="active__container">
                <div className="active-info">
                    <p>ACTIVE LEARNING</p>
                    <span>Improve the skills you use every day as a product designer</span>
                    <div className="active-bottom-info">
                        <div className="v-collect">
                            <img src={cycle} alt="logo" className="v__item1" ></img>
                            <img src={bur} alt="logo" className="v__item2" ></img>
                            <img src={right} alt="logo" className="v__item3" ></img>
                        </div>
                        <p>Our curriculum walks you through each step of designing a new product from scratch. You'll learn a ton of practical strategies to improve your daily workflow and dive deep into the rabbit hole of Figma and all it has to offer.</p>
                    </div>
                </div>
                <div className="active-cart">
                    <ul className="active-collect">
                        <li className="active-collect-item1"><p>01</p><span>Design-Systems</span></li>
                        <li className="active-collect-item2"><p>02</p><span>Practical-UI</span></li>
                        <li className="active-collect-item3"><p>03</p><span>Responsive</span></li>
                        <li className="active-collect-item4"><p>04</p><span>Handoff</span></li>
                        <li className="active-collect-item5"><p>05</p><span>Prototyping</span></li>
                        <li className="active-collect-item6"><p>06</p><span>Workflow</span></li>
                    </ul>
                </div>
            </div>
            <div className="active__footerImg">
            </div>
            <img src={Rastangle} alt="" className="active-footer-logo" />
        </div>
    )
}