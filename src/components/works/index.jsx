import React from 'react'
import './style.css'
// import VektorImg from '../../images/works/Vector1.png'
import cycle from '../../images/works/vektor/Vector1.png'
import bur from '../../images/works/vektor/Vector2.png'
import right from '../../images/works/vektor/Vector3.png'
import Account from '../../images/works/Acc.png'
import Learn from '../../images/works/learn.png'
import Level from '../../images/works/img.png'

export const Works = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="work-info">
                    <p>HOW IT WORKS</p>
                    <span className="practical">Figma Academy is an all-new program focusing on the most practical elements of design</span> <br />
                    <div>
                        <span className="v-collect">
                            <img src={cycle} alt="logo" className="v__item1" ></img>
                            <img src={bur} alt="logo" className="v__item2" ></img>
                            <img src={right} alt="logo" className="v__item3" ></img>
                        </span>
                        <v-p>We'll take you beyond the theory and help you develop the skills you'll use every day as a product designer</v-p>
                    </div>
                </div>
                <div className="part">
                    <div className="learn">
                        <img src={Learn} alt="logo" className="part-logo" /><br />
                        <p className="l-h">Learn through hands-on lessons right inside of Figma</p><br />
                        <p className="l-p">Practice advanced tactics like building scalable variants, using layout templates, mastering interactive components, streamlining your workflow, and more...</p>
                    </div>
                    <div className="level">
                        <img src={Level} alt="logo" className="part-logo" /><br />
                        <p className="lv-h">Level up your skillset and take the next step in your career</p><br />
                        <p className="lv-p">We take you from 0 to 1 in the design process—building out a style system, creating all types of components, organizing your designs, all the way through advanced prototyping.
                        </p>
                    </div>
                    <div className="become">
                        <img src={Account} alt="logo" className="part-logo" /><br />
                        <p className="b-h"><br />
                            Become your engineering team's favorite designer
                        </p><br />
                        <p className="b-p">Figma Academy teaches you how to think like a developer, how to better communicate your designs, and how to set developers up for success.</p>
                    </div>
                </div>
            </div>
            {/* <footer className="vektor"><img src={VektorImg} alt="" /></footer> */}
        </div>
    )
}