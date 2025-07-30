import React from 'react';
import '../../components/componantStyle.css';
import UiUx from '../../assests/Ui_Ux_Design.jpg';
import WebD from '../../assests/WebDesign.svg';
import SoftDev from '../../assests/softwareDevelopment.svg';

const About = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me and What I Do.</span>
            <span className="skillDiscription">
                A passionate and dedicated Software Developer with over 1 year of hands-on experience in crafting scalable and efficient software solutions. I specialize in building robust web applications using modern programming languages, frameworks, and development tools. With a strong foundation in software engineering principles, I thrive in solving complex problems, optimizing performance, and delivering clean, maintainable code. I’m also well-versed in Agile methodologies, allowing me to collaborate effectively in fast-paced team environments and adapt quickly to evolving project requirements.
            </span>
            <div className="skillsContainer">
                <div className="jenilColumn">
                    <h2 className="jenilTitle">Who is JENIL?</h2>
                    <ul className="jenilList">
                        <li><strong>J</strong> – Just makes things work</li>
                        <li><strong>E</strong> – Engineer of scalable systems</li>
                        <li><strong>N</strong> – Navigating code with clarity</li>
                        <li><strong>I</strong> – Innovating through clean architecture</li>
                        <li><strong>L</strong> – Lover of logic and user experience</li>
                    </ul>
                </div>

                <div className="skillsContent">

                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={UiUx} alt="UI/UX Design" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>UI / UX Design</h2>
                                <p>I focus on creating intuitive and user-centered designs that enhance the overall user experience...</p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={WebD} alt="Web Design" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>Web Design & Development</h2>
                                <p>I design modern, responsive websites that are not only visually appealing but also optimized...</p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={SoftDev} alt="Software Developer" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>Software Developer</h2>
                                <p>As a software developer, I build robust and scalable applications using clean, efficient code...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About