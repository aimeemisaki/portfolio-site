
import React from 'react';
import linkedinLogo from '../../assets/linkedinLogo.png';
import githubLogo from '../../assets/githubIcon.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='portrait-container'>
                <img 
                className='portrait'
                alt='portrait'
                src='https://i.ibb.co/HgB5Kgj/resume-portrait.jpg'
                />
            </div>
        <div className='home-text-container'>
        <div className='horizontal pb-8 gap-x-4 self-center sm:self-start'>
                    <a href='https://www.linkedin.com/in/aimee-misaki'>
                        <img src={linkedinLogo} alt='Linked In Link' className='link-logos' />
                    </a>
                    <a href='https://github.com/aimeemisaki'>
                        <img src={githubLogo} alt='Github Link' className='link-logos' />
                    </a>
            </div>
            <div className='home-header header-text'>
                <h1>HI, SALUT, こんにちは、HALLO, I'M AIMEE,<br/>
                AND I'M A POLYGLOT FULL-STACK SOFTWARE ENGINEER.</h1>
            </div>
            <div className=''>
                <p className='home-text'>
                <i>Passionate to help others and understand their needs, I became a full stack software engineer, so I could build code that leads to positive, tangible results for all end-users.</i><br/>
                </p>
                <p className='home-text'> Using my communication skills and stragetic analysis capabilities, I strive to optimize web development both in front and back end and work efficiently with my team.</p>
                <p>In my past lives, I worked in social services, assisting refugees to find shelter and employment in Paris, as well as in environmental research, analyzing sustainability projects for the European Union in Berlin, and was an Artist Manager, Educator and Community Leader in Tokyo and New York.</p>
            </div>
        </div>
    </div>
    )
}

export default Home