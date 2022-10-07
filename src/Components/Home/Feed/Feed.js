import React from 'react';
import TopHeader from '../TopHeader';

const Feed = () => {

    const text = {
        top: "Questions", bottom: "top"
    }

    return (
        <div className='flex-[6]'>
            <TopHeader text={text}/>
        </div>
    );
};

export default Feed;