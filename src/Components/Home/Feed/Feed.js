import React from 'react';
import TopHeader from '../TopHeader';
import More from './More';
import Post from './Post';

const Feed = () => {

    const text = {
        top: "Questions", bottom: "top"
    }

    return (
        <div className='flex-[6]'>
            <TopHeader text={text}/>
            <div className='flex items-center gap-x-8 text-slate-400 ml-20 my-4 text-sm lowercase'>
                <p className='bg-primary px-3 rounded-full text-white'>
                    Interesting
                </p>
                <p>
                    featured <span className='border px-2 text-xs rounded-full text-primary'>432</span>
                </p>
                <p>
                    Hot
                </p>
                <p>
                    Week
                </p>
                <p>
                    Month
                </p>
            </div>
            <hr />
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <More/>
        </div>
    );
};

export default Feed;