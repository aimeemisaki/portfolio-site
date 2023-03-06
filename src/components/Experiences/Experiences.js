import { useState } from "react";
import toggleModal from "../../data-and-functions/toggleModal";
import City from "./City";
import Paris from './Paris'
import worldMap from '../../assets/worldMap.png'
import resume from '../../assets/resume.pdf'
import Modal from 'react-bootstrap/Modal';

const Experiences = () => {

    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='experiences' onClick={e => setToggle(toggleModal(e))}>
            <div>
                <button onClick={() => setToggle(toggleModal())}>
                    RESUME
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div>
                    <iframe src={resume} title='resume' frameborder="0" width="100%" height="400px"> 
                    </iframe>
                    </div>
                    </Modal.Body>
            </Modal>
            <div className='experiences-container'>
                <img className='world-map' src={worldMap} alt='world-map'></img>
            </div>
            <Paris />
            
        </div>
        </>
    )
}

export default Experiences

