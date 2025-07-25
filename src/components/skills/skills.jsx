import React from 'react';
import '../../components/componantStyle.css';
import UiUx from '../../assests/Ui_Ux_Design.jpg';
import WebD from '../../assests/WebDesign.svg';
import SoftDev from '../../assests/softwareDevelopment.svg';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">
                What I Do.
            </span>
            <span className="skillDiscription">
                A passionate Software Developer with 1+ years of experience in designing,developing, and maintaining scalable software solutions. Proficient in modernprogramming languages, frameworks, and tools, with strong problem-solvingskills and Agile methodologies.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UiUx} alt="UI/UX Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI / UX Design</h2>
                        <p>I focus on creating intuitive and user-centered designs that enhance the overall user experience. From wireframes to prototypes, I ensure that every element serves a purpose and delivers a smooth interaction.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebD} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I design modern, responsive websites that are not only visually appealing but also optimized for performance and accessibility across all devices and screen sizes.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={SoftDev} alt="Software Developer" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Developer</h2>
                        <p>As a software developer, I build robust and scalable applications using clean, efficient code. I enjoy turning complex problems into practical, working solutions that add real value.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills