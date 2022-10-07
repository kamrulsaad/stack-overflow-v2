import React from 'react';
import TopNav from '../TopNav/TopNav';
import Feed from './Feed/Feed';
import Rightbar from './RightBar/Rightbar';

const Home = () => {
    return (
        <div className="w-full">
            <TopNav />
            <div className='flex'>
                <Feed></Feed>
                <Rightbar/>
            </div>
        </div>
    );
};

export default Home;