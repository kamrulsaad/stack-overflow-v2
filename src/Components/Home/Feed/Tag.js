import React from 'react';

const Tag = ({text}) => {
    return (
        <p className='border border-slate-300 px-2 w-fit text-xs text-slate-400 rounded-full'>
            {text}
        </p>
    );
};

export default Tag;