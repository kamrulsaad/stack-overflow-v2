import React from 'react';

const Main = () => {

    const footerData = [
        {
        head: "technology",
        data: ["stack Overflow", "server fault", "Super user", "Web applications","stack Overflow", "server fault", "Super user", "Web applications"]
    }, 
        {
        head: "",
        data: ["stack Overflow", "server fault", "Super user", "Web applications", "Super user", "Web applications"]
    }, 
        {
        head: "technology",
        data: ["stack Overflow", "server fault", "Super user", "Web applications","stack Overflow", "server fault", "Super user", "Web applications"]
    }, 
        {
        head: "technology",
        data: ["stack Overflow", "server fault", "Super user", "server fault", "Super user", "Web applications"]
    }, 
        {
        head: "technology",
        data: ["stack Overflow", "server fault", "Super user", "Web applications"]
    }, 
    {
        head: "Stack Apps",
        data: ["Meta Stack Exchange",
            "Area 51",
            "Slack Overflow Careers",]
    }]

    return (
        <div className='mx-10 py-10 border-y'>
            <div className='grid grid-cols-6'>
                {
                    footerData.map((f, index) => (<ul className={`text-slate-400 text-sm ${f.head || "mt-5"}`} key={index}>
                        <li className='uppercase mb-4'>{f.head}</li>
                        {
                            f.data.map((d, i) => <li className='cursor-pointer capitalize' key={i}>{d}</li>)
                        }
                    </ul>))
                }
            </div>
        </div>
    );
};

export default Main;