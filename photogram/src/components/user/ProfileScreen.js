import React, { } from 'react'
import Navbar from '../nav/Navbar';
import account from '../../img/account.png'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faThLarge, faUser, faSquare, faHeart, faComment} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import bg from '../../img/bg1.avif'

const Profile = ()=> {

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
              <div class="md:hidden text-sm my-2">
                <h1 class="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </header>

            {/* posts */}
            <div className="px-px md:px-3">
              {/*user following for mobile only */}
              <ul className='flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm'>
                <li className=""><span className='font-semibold text-gray-800 block'>136</span>posts</li>
                <li className=""><span className='font-semibold text-gray-800 block'>136</span>followers</li>
                <li className=""><span className='font-semibold text-gray-800 block'>136</span>following</li>
              </ul>

              {/* photogram features */}
              <ul className='flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t'>
                <li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700'>
                  <Link className='inline-block p-3 uppercase' to='/posts'>
                    <FontAwesomeIcon className='text-xl md:text-xs pr-1' icon={faThLarge}/>
                    post
                  </Link>
                </li>
                <li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700'>
                  <Link className='inline-block p-3 uppercase' to='/posts'>
                    <FontAwesomeIcon className='text-xl md:text-xs pr-1' icon={faUser}/>
                    tagged
                  </Link>
                </li>
              </ul>

               {/*flexbox grid  */}
               <div class="flex flex-wrap -mx-px md:-mx-3">

                {/* column */}
                <div class="w-1/3 p-px md:px-3">

                  {/* post 1 */}
                  <Link to='/'>
                    <article className='post bg-gray-100 text-white relative pb-full md:mb-6'>
                      {/* post image */}
                    <img src={bg} alt="" />

                    <FontAwesomeIcon className='absolute right-0 top-0 m-1' icon={faSquare}/>

                    {/* overlay */}
                    <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
                      <div className="flex justify-center items-center space-x-4 h-full">
                      <span class="p-2">
                        <FontAwesomeIcon icon={faHeart}/>
                        234
                      </span>
                      <span class="p-2">
                        <FontAwesomeIcon icon={faComment}/>
                        234
                      </span>
                      </div>
                    </div>
                  </article>
                </Link>
                </div>
               </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  export default Profile;