import React from 'react'
import { Link } from 'react-router-dom'
import cartDash from '../assets/svgs/cartDash.svg'
import EcomBoxes from '../assets/svgs/EcomBoxes.svg'
import blogboxes from '../assets/svgs/blogboxes.svg'
import RefferFunds from '../assets/svgs/RefferFundBoxes.svg'
import upload from '../assets/svgs/upload.svg'
import downArrow from '../assets/svgs/downArrow.svg'
import MyronImage from '../../public/assets/Section 9.png'
const NavbarAdmin = () => {
    return (
        <div className='relative  min-h-screen flex'>

            <div className='bg-[#262626] w- text-base min-h-screen'>
                {/* <!-- logo --> */}
                <div className='flex flex-col justify-center align-middle text-center'

                >
                    <div className='aspect-square w-40 self-center rounded-full bg-contain bg-blend-normal bg-center'
                        style={{ backgroundImage: "url('../../public/assets/Section 9.png')" }}

                    >
                        {/* Logo */}
                    </div>
                    <p className='text-content-heading '>Myron Evans</p>
                    <p className='text-base'>Admin</p>

                </div>
                <nav className='flex flex-col w-64'>

                    <div className='flex text-center py-7  px-4 w-9/11'>
                        <Link to="/createNewCase" className='flex flex-row'>
                            <img src={cartDash} /><span className='px-2'>Dashboard</span>
                        </Link>
                        <img src={downArrow} className='w-2/11 block' />

                    </div>

                    <div className='flex  py-7  px-4 border-t-black'>
                        <Link to="/createNewCase" className='flex flex-row'>

                            <img src={EcomBoxes} /><span className='px-2'>E-comerce  </span>
                        </Link>
                        <img src={downArrow} />
                    </div>


                    <div className='flex py-7  px-4'>
                        <Link to="/createNewCase" className='flex flex-row'>

                            <img src={blogboxes} /><span className='px-2'>My Blogs </span>
                        </Link>

                        <img src={downArrow} />
                    </div>
                    <div className='flex py-7  px-4'>
                        <Link to="/createNewCase" className='flex flex-row'>

                            <img src={RefferFunds} /><span className='px-2'>Reffer Funds  </span>
                        </Link>

                        <img src={downArrow} />
                    </div>


                </nav>

            </div>
            <div className='bg-sm-primary w-11/12 px-9 py-5 mx-5'>
                <h1 className=' text-section-heading'> Create New case study</h1>
                <p className='text-base'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                <div className='py-4'>
                    <p className='text-base'>Title of Case study</p>
                    <input className='px-2 py-1 my-2 bg-sm-primary w-[100%] border-white focus:outline-none  border-[0.35px] rounded-md' type='text' placeholder='Write title Here' />
                </div>
                <div className='pt-4'>
                    <p className='text-base'>Simple Description</p>
                    <input className='px-2 py-1 my-2 bg-sm-primary w-[100%] border-white focus:outline-none  border-[0.35px] rounded-md' type='text' placeholder='Write description here' />
                </div>
                <div className='flex flex-row '>

                    <div className="flex items-center mb-4 pr-8">
                        <input id="default-checkbox" type="checkbox" value="" className="font-thin w-8 h-8 text-[secondary]  focus:accent-[#8d601d71] bg-gradient" />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="px-3 w-8 h-8 font-thin primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300"> checkbox</label>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <div className='w-5/6'>
                        <p className='self-auto px-2 py-1'>Design</p>
                        <input className='w-[95%] h-14 rounded-xl px-4 bg-primary border-none outline-none text-secondary ' placeholder='Put Design URL' />
                    </div>

                    <div className=' w-5/6 items-start'>
                        <p className='self-auto px-2 py-1'>Development</p>
                        <input className='w-[95%] h-14 rounded-xl px-4 bg-primary border-none outline-none ' placeholder='Put Developement URL' />


                    </div>

                </div>
                <div className='flex flex-col pt-10 px-2'>
                    <div className='text-base'> Upload mockup Image</div>
                    <div className='cursor-pointer flex items-center h-[17rem] justify-center rounded-xl mt-4 bg-[#3F3F3F] border border-white'>
                        <img src={upload} />
                    </div>
                </div>
                <div className='flex flex-col pt-10 px-2'>
                    <div className='text-base'> Upload Design Case Study</div>
                    <div className='cursor-pointer flex items-center h-[17rem] justify-center rounded-xl mt-4 bg-[#3F3F3F] border border-white'>
                        <img src={upload} />
                    </div>
                </div>
                <div className='flex flex-col pt-10 px-2'>
                    <div className='text-base'> Upload Development Case Study </div>
                    <div className='cursor-pointer flex items-center h-[17rem] justify-center rounded-xl mt-4 bg-[#3F3F3F] border border-white'>
                        <img src={upload} />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link className='mt-10'>
                        <div className=" rounded-md bg-gradient text-center w-64 px-3 py-3 font-rubik font-medium"> Preview</div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavbarAdmin