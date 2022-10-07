import React from 'react';

const Tag = ({text, white}) => {
    return (
        <p className={`border border-slate-300 px-2 w-fit text-xs text-slate-400 rounded-full ${white && "bg-white"}`}>
            {text}
        </p>
    );
};

export default Tag;