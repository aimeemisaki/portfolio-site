import {useState, useRef} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
    faArrowLeft,
    faCircle
} from '@fortawesome/free-solid-svg-icons'

function Projects () {
	const [currentPage, setCurrentPage] = useState('invite')
	const navigate = useNavigate()
	const pageIndex = useRef(0)

	// State for navigation tabs
	const pages = {
		0: {
			title: 'project1',
			icon: faCircle,
		},
		1: {
			title: 'project2',
			icon: faCircle,
		},
		2: {
			title: 'project3',
			icon: faCircle,
		},
		3: {
			title: 'project4',
			icon: faCircle,
		},
	}

    function slideHandler(direction) {
		direction === 'right'
			? pageIndex.current < 3 && pageIndex.current++
			: pageIndex.current > 0 && pageIndex.current--

		navigate(pages[pageIndex.current].title)
		setCurrentPage(pages[pageIndex.current].title)
	}

	function generateTabs() {
		const tabArray = []
		for (const key in pages) {
			tabArray.push(
				<li
					className={
						'h-20 w-32 bg-red-800/90 shadow-2xl shadow-slate-800 text-white border-r border-black rounded-t-2xl grid items-center' +
						(pages[key].title === currentPage ? ' bg-white' : ' hover:bg-white')
					}
					key={key}
				>
					<Link
						to={pages[key].title}
						className={
							(pages[key].title === currentPage && ' text-red-800/90') +
							' text-center no-underline hover:text-red-800/90'
						}
						onClick={() => {
							setCurrentPage(pages[key].title)
							pageIndex.current = key
						}}
					>
						<div>
							<FontAwesomeIcon icon={pages[key].icon} />
						</div>
						<div>{pages[key].title}</div>
					</Link>
				</li>
			)
		}
		return tabArray
	}

    return (
        <div className='grid-centered'>
			
				{/* <div className='h-full w-full max-w-[1200px] relative flex justify-center items-center'> */}
					<p>hey</p>
					{/* {pageIndex.current !== 0 && (
						<button id='left-btn' onClick={() => slideHandler('left')}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
					)}
					{pageIndex.current !== 3 && (
						<button id='right-btn' onClick={() => slideHandler('right')}>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					)} */}
				{/* </div> */}
			{/* <ul className='w-full h-12 flex-centered fixed left-0 bottom-0'>{generateTabs()}</ul> */}
		</div>
    )
}

export default Projects