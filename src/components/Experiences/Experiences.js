import { useState } from "react";
import toggleModal from "../../toggleModal";

const Experiences = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <>
        <div>
            <div className='experiences-container'>
                <img className='world-map' src='https://i.ibb.co/9YdNz47/worldmap.png' alt='world-map'></img>
            </div>
        {/* <div className='modals' onClick={e => setToggle(toggleModal(e))}>
            <div className='modals-content'>

            </div>
        </div> */}
        </div>
        </>
    )
}

export default Experiences

