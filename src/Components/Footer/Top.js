import React from 'react';

const Top = () => {
    return (
        <div className='w-full p-10 border-t flex justify-between'>
            <div className='flex gap-3 text-sm text-slate-400'>
                <p className='cursor-pointer'>about us</p>
                <p className='cursor-pointer'>tour</p>
                <p className='cursor-pointer'>help</p>
                <p className='cursor-pointer'>blog</p>
                <p className='cursor-pointer'>chat</p>
                <p className='cursor-pointer'>data</p>
                <p className='cursor-pointer'>legal</p>
                <p className='cursor-pointer'>privacy policy</p>
                <p className='cursor-pointer'>work here</p>
                <p className='cursor-pointer'>advertising info</p>
                <p className='cursor-pointer'>mobile</p>
                <p className='cursor-pointer'>contact us</p>
                <p className='cursor-pointer'>feedback</p>
            </div>
            <div className='flex gap-3'>
                <img className='w-4 cursor-pointer' src="assets/misc/facebook-svgrepo-com.svg" alt="" />
                <img className='w-4 cursor-pointer' src="assets/misc/twitter-svgrepo-com.svg" alt="" />
                <img className='w-4 cursor-pointer' src="assets/misc/basketball-svgrepo-com.svg" alt="" />
            </div>
        </div>
    );
};

export default Top;