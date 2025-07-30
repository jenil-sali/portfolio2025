import React from 'react';
import '../componantStyle.css';
import bg from '../../assests/ContentBackground.svg';
import { Link } from 'react-scroll';
import hireMe from '../../assests/hireMe.png';

const Intro = () => {
    return (
        <section className="intro" id='intro'>
            <div className="introContent">
                <spam className="hello">Hello,</spam>
                <spam className="introText">I'm <span className="intoName">Jenil</span> <br /> Software Development <br />Engineer</spam>
                {/* <p className="intoPara">I'm a passionate Software Developer specializing in building scalable <br />web applications and intuitive user experiences.</p> */}
                <Link><button className='btn'><img src={hireMe} alt="" className='btnImg' /> Hire me</button></Link>
            </div>
            <img src={bg} alt="ContentBackground" className="background" />
        </section>
    )
}

export default Intro