/* eslint-disable no-unused-vars */
import { Carousel } from 'react-bootstrap';
import destinationizerImg from '../../assets/destinationizerImg.png';
import meetneatImg from '../../assets/meetneatImg.png';
import momnspotImg from '../../assets/momnspotImg.png';
import carmafloresPortfolio from '../../assets/camafloresPortfolio.mp4'

function Projects () {

    return (
        <div className='projects-container centered'>
			<Carousel fade>
                <Carousel.Item>
                    <div className='project-container'>
                        <img
                        className='project'
                        src={meetneatImg}
                        alt="first project"
                        />
                    </div>
                    <div className='github-live-container'>
                        <a href='https://github.com/Venus-she-s-got-it/meet-n-eat-backend'>
                            <button className='link-button'>
                                BACKEND GITHUB
                            </button>
                        </a>
                        <a href='https://github.com/Venus-she-s-got-it/meet-n-eat-frontend'>
                            <button className='link-button'>
                                FRONTTEND GIHUB
                            </button>
                            </a>
                        <a href='https://meetneat.tk/'>
                            <button className='link-button'>
                                LIVE
                            </button>
                        </a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='project-container'>
                        <img
                        className='project'
                        src={destinationizerImg}
                        alt="second project"
                        />
                    </div>
                    <div className='links-container'>
                        <div className='github-live-container'>
                            <a href='https://github.com/aimeemisaki/destinationizer'>
                                <button className='link-button'>
                                    GIHUB
                                </button>
                            </a>
                            <a href='https://destinationizer.netlify.app/'>
                                <button className='link-button'>
                                    LIVE
                                </button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='project-container'>
                        <video
                        className='project'
                        alt="third project"
                        autoplay muted loop
                        >
                            <source 
                            src={carmafloresPortfolio} 
                            type="video/mp4" />
                        </video>
                    </div>
                    <div className='links-container'>
                        <div className='github-live-container'>
                            <a href='https://github.com/aimeemisaki/carmaflores.github.io'>
                                <button className='link-button'>
                                    GIHUB
                                </button>
                            </a>
                            <a href='https://carmaflores.com/'>
                                <button className='link-button'>
                                    LIVE
                                </button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='links-container'>
                        <div className='project-container'>
                            <img
                            className='project'
                            src={momnspotImg}
                            alt="fourth project"
                            />
                        </div>
                        <div className='github-live-container'>
                            <a href='https://github.com/aimeemisaki/mom_n_spot'>
                                <button className='link-button'>
                                    GIHUB
                                </button>
                            </a>
                            <a href='https://mom-n-spot.herokuapp.com/'>
                                <button className='link-button'>
                                    LIVE
                                </button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
        </Carousel>
	</div>
    )
}

export default Projects