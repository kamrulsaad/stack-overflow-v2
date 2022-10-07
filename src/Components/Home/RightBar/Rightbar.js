import React from 'react';
import TopHeader from '../TopHeader';
import Job from './Job';
import Question from './Question';

const Rightbar = () => {

    const text1 = {
        top: "Looking out for...", bottom: "jobs"
    }

    const text2 = {
        top: "Network questions", bottom: "hot"
    }

    return (
        <div className='flex-[3] bg-slate-50 border-l'>
            <TopHeader text={text1} />
            <Job></Job>
            <Job></Job>
            <Job></Job>
            <p className='ml-20 text-secondary font-medium mt-4 cursor-pointer'>View All Jobs <img className='w-4 inline-flex rotate-180' src="assets/control.png" alt="" /> </p>
            <TopHeader text={text2} />
            <Question />
            <hr className='mt-4 mx-20' />
            <Question />
            <hr className='mt-4 mx-20' />
            <Question />
            <hr className='mt-4 mx-20' />
            <p className='ml-20 text-secondary font-medium mt-4 cursor-pointer'>View All Jobs <img className='w-4 inline-flex rotate-180' src="assets/control.png" alt="" /> </p>
        </div>
    );
};

export default Rightbar;