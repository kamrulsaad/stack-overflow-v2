import React from 'react';
import TopHeader from '../TopHeader';
import Job from './Job';

const Rightbar = () => {

    const text1 = {
        top: "Looking out for...", bottom: "jobs"
    }

    const text2 = {
        top: "Network questions", bottom: "hot"
    }

    return (
        <div className='flex-[3] bg-slate-50 border-l'>
            <TopHeader text={text1}/>
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <p className='ml-20 text-secondary font-medium mt-4'>View All Jobs</p>
            <TopHeader text={text2}/>
        </div>
    );
};

export default Rightbar;