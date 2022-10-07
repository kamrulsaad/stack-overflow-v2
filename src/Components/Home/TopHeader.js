import React from 'react';

const TopHeader = ({text}) => {
    return (
        <div className='ml-20 mt-4 relative'>
            <h1 className='text-7xl text-slate-100'>
                {text.bottom}
            </h1>
            <p className='z-10 absolute top-[35%] left-0 text-slate-400'>{text.top}</p>
        </div>
    );
};

export default TopHeader;