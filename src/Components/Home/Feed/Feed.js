import React, { useEffect, useState } from 'react';
import TopHeader from '../TopHeader';
import More from './More';
import Post from './Post';

const Feed = () => {

    const text = {
        top: "Questions", bottom: "top"
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
        .then(res => res.json())
        .then(data => {
            console.log(data.items[0])
            setPosts(data.items.slice(0,10))
        })
    },[])

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
            {
                posts.map(p => <Post key={p.question_id} post={p}></Post>)
            }
            <More></More>
        </div>
    );
};

export default Feed;