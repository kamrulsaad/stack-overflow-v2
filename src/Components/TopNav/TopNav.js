import React from 'react'

const TopNav = () => {

    return (
        <div className='flex h-16 items-center gap-x-2 border-b border-slate-50'>
            <img className='w-4 ml-8 cursor-pointer' src="assets/menu.svg" alt="" />
            <div className='w-full flex justify-between items-center'>
                <form className='flex gap-2'>
                    <input name='query' placeholder='Search' className='ml-4 w-80 border border-slate-200 rounded-full p-2 pl-10 text-sm focus:outline-none' style={{ background: "url('assets/search.svg') no-repeat", backgroundSize: "15px", backgroundPosition: "center left 10px" }} type="text" />
                    <button className='bg-secondary text-white px-2 rounded' type='submit'>Search <img className='inline-flex w-4' src="assets/search.svg" alt="" /> </button>
                </form>
                <div className='flex gap-x-4 items-center mr-8'>
                    <div className='flex items-center text-slate-300 gap-x-1'>
                        <img className='w-4' src="assets/lifebuoy.svg" alt="" />
                        <p>
                            Help
                        </p>
                    </div>
                    <div className='flex items-center text-slate-300 gap-x-1'>
                        <img className='w-5' src="assets/tv.svg" alt="" />
                        <p>
                            Tour
                        </p>
                    </div>
                    <div className='flex items-center text-slate-300 gap-x-1'>
                        <img className='w-10 rounded-full' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                        <img className='w-4' src="assets/downarrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;