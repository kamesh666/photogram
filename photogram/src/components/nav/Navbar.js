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
        <nav className='border-b px-4 py-2 bg-white'>

					<div className="flex flex-wrap items-center justify-between md:justify-around">
						{/* logo */}
						<h1 className='font-billabong text-4xl'>Photogram</h1>

						<div className="relative hidden sm:block  text-gray-500">
							<input className='search-bar max-w-xs border rounded bg-gray-200 px-4 py-1 text-center outline-none focus:border-gray-400' type="search" placeholder="Search" id="" />
							<FontAwesomeIcon className='top-0 absolute left-0 ml-12 mt-2 cursor-pointer' icon={faSearch}/>
						</div>
						<div className="space-x-5 sm:text-md text-xl">
								<Link className='' to='/signin'><FontAwesomeIcon icon={faHome}/></Link>
								<Link className='' to='/signup'><FontAwesomeIcon icon={faMessage}/></Link>
								<Link className='' to='/signup'><FontAwesomeIcon icon={faPlusSquare} /></Link>
								<Link className='' to='/signup'><FontAwesomeIcon icon={faCompass} /></Link>
								<Link className='' to='/signup'><FontAwesomeIcon icon={faHeart} /></Link>
								<Link className='' to='/profile'><FontAwesomeIcon icon={faCircleUser} /></Link>
								<button onClick={handleLogout}><Link className='' to='/profile'><FontAwesomeIcon icon={faSignOut} /></Link></button>
								
							</div>
					</div>
        </nav>
      </div>
    );
  }

  export default Navbar