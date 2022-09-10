import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Signup extends Component {
    state = {  } 
    render() { 
        return (
           <div className="">
                <section className='h-full gradient-form bg-gray-200 md:h-screen'>
                    <div className="container py-12 px-6 h-full">
                        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div className="xl:w-10/12">
                                <div className="block bg-white shadow-lg rounded-lg">
                                    <div class="lg:flex lg:flex-wrap g-0">
                                        <div className="lg:w-6/12 px-4 md:px-0">
                                            <div className="md:p-12 md:mx-6">
                                                <div className="text-center">
                                                    <h1 className='font-cupla text-[4rem]'>Photogram</h1>
                                                    <h4 class="text-md font-sans text-gray-400 mt-1 mb-12 pb-1">Sign up to see photos <br/> and videos from your friends.</h4>
                                                </div>
                                                <form action="" method="post">
                                                    <p className='mb-4 font-secular '>Welcome back</p>
                                                    <div class="mb-4">
                                                        <input 
                                                        type="email"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Email address"
                                                         />
                                                    </div>
                                                    <div class="mb-4">
                                                        <input 
                                                        type="text"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Fullname"
                                                         />
                                                    </div>
                                                    <div class="mb-4">
                                                        <input 
                                                        type="text"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username"
                                                         />
                                                    </div>
                                                    <div class="mb-4">
                                                        <input 
                                                        type="password"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="password"
                                                         />
                                                    </div>
                                                    {/* signup button */}
                                                    <div className="space-y-4 text-center pt-1 mb-12 pb-1">
                                                        <button className='inline-block px-6 py-2.5 hover:text-white font-medium text-xs leading-tight uppercase text-black rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3' type='button' data-mdb-ripple="true" data-mdb-ripple-color="light"
                                                        >Sign up</button>
                                                        <div class="flex items-center justify-between pb-6">
                                                        <p class="mb-0 mr-2">Already have an account?</p>
                                                        <button className='inline-block px-6 py-2  text-black 
                                                        hover:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out ' type='button' data-mdb-ripple="true" data-mdb-ripple-color="light"
                                                        ><Link to='/signin'>Sign in</Link></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                            <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                                            <p class="text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.
                                            </p>
                                            <p className='text-sm text-white  mt-20'>© 2022 <h6 className='font-cupla text-2xl'>Photogram</h6> from kamade</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           </div>
        );
    }
}
 
export default Signup;