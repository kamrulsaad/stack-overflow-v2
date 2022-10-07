import React from 'react';
import Tag from '../Feed/Tag';

const Job = () => {
    return (
        <div className='ml-20 mt-4 text-slate-400'>
            <p className='text-secondary'>Front-end Developer</p>
            <p className='text-sm'>WalletHub</p>
            <div className='flex items-center gap-4 my-2'>
                <div className='flex items-center gap-1'>
                    <img className='w-3' src="assets/tv.svg" alt="" />
                    <p className='text-xs'>Washington, DC</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img className='w-3' src="assets/tv.svg" alt="" />
                    <p className='text-xs'>Remote</p>
                </div>
            </div>
            <div className='flex items-center gap-3 my-2'>
                <Tag white text="Parcel"></Tag>
                <Tag white text="Angular"></Tag>
                <Tag white text="Webpack"></Tag>
            </div>
            <hr className='mt-4' />
        </div>
    );
};

export default Job;