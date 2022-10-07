import React from 'react';
import Statusbox from './Statusbox';
import Tag from './Tag';

const Post = ({ post }) => {

    const status1 = { name: "votes", count: post.score, icon: "like" }
    const status3 = { name: "answer", count: post.answer_count, icon: "comment" }
    const status2 = { name: "views", count: post.view_count, icon: "view" }

    return (
        <div className='flex border-b border-slate-100 mx-20 gap-8'>
            <div className='flex-[6]'>
                <p className='text-secondary max-w-md font-medium my-4 hover:underline'><a target={"_blank"} rel="noreferrer" href={post.link}>{post.title}</a></p>
                <div className='flex gap-x-2'>
                    {post.tags.map((p, i) => <Tag text={p} key={i}></Tag>)}
                </div>
                <div className='flex my-4 items-center gap-2'>
                    <div className='w-fit border p-1 rounded-full'>
                        <img className='w-3' src="assets/documentprimary.svg" alt="" />
                    </div>
                    <p className='text-sm text-slate-400 max-w-md'>asked by <span className='text-slate-500'>{post.owner.display_name}</span></p>
                </div>
            </div>
            <div className='flex gap-3 flex-[3] justify-around'>
                <Statusbox status={status1} />
                <Statusbox status={status3} />
                <Statusbox status={status2} />
            </div>
        </div>
    );
};

export default Post;