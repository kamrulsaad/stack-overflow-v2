import React from 'react';

const More = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center my-10'>
            <div className='rounded-full w-20 h-20 flex justify-center items-center shadow-lg shadow-primary'>
                <img className='object-cover' src="assets/logo.png" alt="" />
            </div>
            <p className='text-slate-500 text-2xl'>Looking for More?</p>
            <p className='text-slate-500 max-w-md text-center'>Browse the <span className='text-secondary font-medium cursor-pointer'>complete list of questions</span> , or <span className='text-secondary font-medium cursor-pointer'>popular tags</span>. Help us answer unanswered questions.</p>
        </div>
    );
};

export default More;