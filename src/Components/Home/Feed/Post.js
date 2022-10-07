import React from 'react';
import Statusbox from './Statusbox';
import Tag from './Tag';

const Post = () => {

    const status = { name: "votes", count: 2, icon: "like" }

    return (
        <div className='flex border-b border-slate-100 mx-20 gap-8'>
            <div className='flex-[6]'>
                <p className='text-secondary max-w-md font-medium my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio quis suscipit architecto </p>
                <div className='flex gap-x-2'>
                    <Tag text="C++"></Tag>
                    <Tag text="C++"></Tag>
                    <Tag text="C++"></Tag>
                    <Tag text="C++"></Tag>
                </div>
                <div className='flex my-4 items-center gap-2'>
                    <div className='w-fit border p-1 rounded-full'>
                        <img className='w-3' src="assets/documentprimary.svg" alt="" />
                    </div>
                    <p className='text-sm text-slate-400 max-w-md'>Lorem ipsum dolor <span className='text-slate-500'>Laudantium, amet?</span></p>
                </div>
            </div>
            <div className='flex gap-3 flex-[3] justify-around'>
                <Statusbox status={status} />
                <Statusbox status={status} />
                <Statusbox status={status} />
            </div>
        </div>
    );
};

export default Post;