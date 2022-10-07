import React from 'react';
import TopHeader from '../TopHeader';

const Rightbar = () => {

    const text = {
        top: "Looking out for...", bottom: "jobs"
    }

    return (
        <div className='flex-[3] bg-slate-50 border-l'>
            <TopHeader text={text}/>
        </div>
    );
};

export default Rightbar;