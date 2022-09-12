import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './nav.css'
import {UserAuth} from '../../context/AuthContext'

// font awrsome icon
import {faSearch, faHome, faSignOut} from'@fortawesome/free-solid-svg-icons'
import {faMessage, faHeart, faPlusSquare, faCompass, faCircleUser} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navbar = () => {
	
	const {logout} = UserAuth();
	const navigate = useNavigate();
  
	const handleLogout = async() => {
	  try 
	  {
		await logout();
		navigate('/signin');
	  }
	  catch(e) {
		console.log(e.message);
	  }
	  
	}

    return(
      <div className="font-sans">
        <nav className='border-b px-4 py-2 bg-gray-200'>

					<div className="flex flex-wrap items-center justify-between md:justify-around">
						{/* logo */}
						<h1 className='font-billabong text-4xl'>Photogram</h1>

						<div className="relative hidden sm:block  text-gray-500">
							<input className='search-bar max-w-xs border rounded bg-white px-4 py-1 text-center outline-none focus:border-gray-400' type="search" placeholder="Search" id="" />
							<FontAwesomeIcon className='top-0 absolute left-0 ml-12 mt-2 cursor-pointer' icon={faSearch}/>
						</div>
						
					</div>
        			</nav>
						<div className='w-full'>
						<section className='block border-t fixed inset-x-0 bottom-0 z-10 bg-gray-200 shadow'>
							<div className="flex justify-center space-x-10 p-4 sm:text-md text-xl">
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center  pr-5' to='/'><FontAwesomeIcon icon={faHome}/></Link>
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center  pr-5' to='/signup'><FontAwesomeIcon icon={faMessage}/></Link>
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center   pr-5' to='/signup'><FontAwesomeIcon icon={faPlusSquare} /></Link>
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center   pr-5' to='/signup'><FontAwesomeIcon icon={faCompass} /></Link>
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center   pr-5' to='/signup'><FontAwesomeIcon icon={faHeart} /></Link>
								<div className='antialiased flex justify-center'>
								<Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center   pr-5' to='/profile'><FontAwesomeIcon icon={faCircleUser} /></Link>
								</div>
								<button onClick={handleLogout}><Link className='focus:text-teal-500 hover:text-blue-700 justify-center inline-block text-center  pr-5' to='/profile'><FontAwesomeIcon icon={faSignOut} /></Link></button>
								
							</div>
						</section>
						</div>
     				 </div>
    );
  }

  export default Navbar
