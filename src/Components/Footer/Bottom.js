import React from 'react';

const Bottom = () => {

    const time = new Date()
    const year = time.getFullYear()

    return (
        <div className='w-full px-10 py-5 flex justify-between'>
            <div className='flex gap-3 text-xs text-slate-300'>
                <p className='cursor-pointer'>site design / logo &amp; {year} Stack Exchange Inc; user contributions licenced under cc by-sa 3.0 with attribution required</p>
            </div>
            <div className='flex gap-3 text-xs text-slate-300'>
                <p>rev {year}.8.1.3852</p>
            </div>
        </div>
    );
};

export default Bottom;