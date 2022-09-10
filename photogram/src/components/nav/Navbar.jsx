import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

// font awrsome icon
import {faSearch} from'@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
  state= {}
  render() {
    return(
      <div className="font-sans">
        <nav className='border-b px-4 py-2 bg-white'>

					<div className="flex flex-wrap items-center justify-between md:justify-around">
						{/* logo */}
						<h1 className='font-billabong text-4xl'>Photogram</h1>

						<div className="relative hidden sm:block  text-gray-500">
							<input className='search-bar max-w-xs border rounded bg-gray-200 px-4 text-center outline-none focus:border-gray-400' type="search" placeholder="Search" id="" />
							<FontAwesomeIcon className='top-0 left-0 ml-12 mt-1 cursor-pointer' icon={faSearch}/>
						</div>
						<div className="space-x-4">
								<Link className='inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded' to='/signin'>Log In</Link>
								<Link className='inline-block text-blue-500 text-sm font-semibold' to='/signup'>Sign In</Link>
							</div>
					</div>
        </nav>
      </div>
    );
  }
}

