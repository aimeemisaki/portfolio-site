import { useState } from "react";
import toggleModal from "../../data-and-functions/toggleModal";
import City from "./City";
import Paris from './Paris'
import worldMap from '../../assets/worldMap.png'
import resume from '../../assets/resume.pdf'
import Modal from 'react-bootstrap/Modal';

const Experiences = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='experiences'>
            <div className='resume-button-container'>
                <button onClick={handleShow} className='link-button'>
                    RESUME
                </button>
            </div>
            <div className='experiences-container'>
                <img className='world-map' src={worldMap} alt='world-map'></img>
            </div>
                    <Modal show={show} onHide={handleClose}> 
                        <div>
                            <iframe src={resume} title='resume' frameborder="0" width="100%" height="800px" className="resume-file"> 
                             </iframe>
                        </div>
                    </Modal>
            
            <Paris />
            
        </div>
        </>
    )
}

export default Experiences

