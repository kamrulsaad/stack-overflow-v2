import React from 'react';

const Statusbox = ({status}) => {
    return (
        <div className='flex flex-col items-center justify-center text-sm gap-1 text-slate-400'>
            <p>{status.count}</p>
            <p>{status.name}</p>
            <img className='w-4' src={`assets/misc/${status.icon}-svgrepo-com.svg`} alt="" />
        </div>
    );
};

export default Statusbox;