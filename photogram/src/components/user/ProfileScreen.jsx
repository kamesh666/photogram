import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import account from '../../img/account.png'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  state = { }
  render() {
    return (
      <div className="">
        <Navbar/>
        <main className='bg-gray-100 bg-opacity-25'>
          <div className="lg:w-8/12 lg:mx-auto mb-8">
            <header className='flex flex-wrap items-center p-4 md:py-8'>
              <div className="md:w-3/12 md:ml-16">
                <img className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1' src={account} alt="" />
              </div>
              {/* profile meta */}
              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className='text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0'>
                    ksmade
                  </h2>
                  {/* badge */}
                  <span className='inline-block text-blue-500 relative mr-6 text-xl transform -translate-y-2' aria-hidden="true">
                  <FontAwesomeIcon className='text-xs absolute inset-x-0 ml-1 mt-px' icon={faCheckCircle}/>
                  </span>
                  <Link className='bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block' to='/follow'>Follow</Link>
                </div>
                <ul className='hidden md:flex space-x-8 mb-4'>
                  <li><span className='font-semibold'>50</span>posts</li>
                  <li><span className='font-semibold'>570</span>followers</li>
                  <li><span  className='font-semibold'>302</span>following</li>
                </ul>
                {/* user meta form */}
                <div class="hidden md:block">
                  <h1 class="font-semibold">Mr Travlerrr...</h1>
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>

              </div>
            </header>
            <div className="px-px md:px-3"></div>
          </div>
        </main>
      </div>
    );
  }
}