import { useState } from "react";
import toggleModal from "../../data-and-functions/toggleModal";

function Paris() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='paris'>
        <div className='paris-container' onClick={e => setToggle(toggleModal(e))}>
            <h1>Paris, France</h1>
        </div>
        {toggle && (
            <div className='modals'>
                <div className='modals-content'>
                    <p>hello</p>
                </div>
            </div>
        )}
        </div>
    )
}

export default Paris