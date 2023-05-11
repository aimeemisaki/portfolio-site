/* eslint-disable no-unused-vars */
import { useState } from 'react';
import worldMap from '../../assets/worldMap.png'
import Modal from 'react-bootstrap/Modal';
import resume from '../../assets/resume.pdf'

const Experiences = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='experiences'>
            <div className='resume-button-container'>
                <button onClick={handleShow} className='link-button resume-button'>
                    RESUME
                </button>
            </div>
            <div className='experiences-container'>
                <img className='world-map' src={worldMap} alt='world-map'></img>
            </div>
            <Modal 
            show={show} 
            onHide={handleClose} 
            className='resume-modal'> 
                <div>
                    <iframe src={resume} title='resume' frameborder="0" width="100%" height="800px" className="resume-file"> 
                        </iframe>
                </div>
            </Modal>
        </div>
        </>
    )
}

export default Experiences

