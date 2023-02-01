import { useState } from "react";
import toggleModal from "../../data-and-functions/toggleModal";
import City from "./City";
import Paris from './Paris'

const Experiences = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <>
        <div>
            <div className='experiences-container'>
                <img className='world-map' src='https://i.ibb.co/9YdNz47/worldmap.png' alt='world-map'></img>
            </div>
            <Paris />
            
        </div>
        </>
    )
}

export default Experiences

