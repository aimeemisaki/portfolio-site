import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faBars,
	faX,
} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    function toggleNav() {
        setToggle(prevState => !prevState)
    }
	return (
		<div className='navbar horizontal justify-between items-center p-3'>
            <div>
                <NavLink to='/'>
                    <h2 className='nav-title'>
                        AIMEE MISAKi
                    </h2>
                </NavLink>
            </div>
            <div className='hidden space-x-4 sm:flex'>
                <NavLink className='nav-link' to ='/experiences'>
                    <p>WORK EXPERIENCES</p>
                </NavLink>
                <NavLink className='nav-link' to='/projects'>
                    <p>PROJECTS</p>
                </NavLink>
                <NavLink className='nav-link' to='/about'>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink className='nav-link' to='contact'>
                    <p>CONTACT</p>
                </NavLink>
            </div>
            <div className='space-x-4 sm:hidden' onClick={toggleNav}>
				<FontAwesomeIcon className='text-white text-3xl' icon={faBars} />
			</div>
            {toggle && (
				<div className='menu text-white sm:hidden'>
					<FontAwesomeIcon
						icon={faX}
						className='absolute top-4 right-4'
						onClick={toggleNav}
					/>
					<ul className='text-2xl space-y-4'>
								<li onClick={toggleNav}>
									<NavLink to='/projects' className='hover-nav-small'>
                                        PROJECTS
									</NavLink>
								</li>
								<li onClick={toggleNav}>
									<NavLink to='/experiences' className='hover-nav-small'>
										WORK EXPERIENCES
									</NavLink>
								</li>
								<li onClick={toggleNav}>
									<NavLink to='/contact' className='hover-nav-small'>
										CONTACT
									</NavLink>
								</li>
						<li onCllick={toggleNav}>
							<NavLink to='/about' className='hover-nav-small'>
								ABOUT
							</NavLink>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar