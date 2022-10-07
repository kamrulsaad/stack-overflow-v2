import React, { useState } from 'react';

const SideNav = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Questions", src: "question" },
        { title: "Jobs", src: "briefcase" },
        { title: "Documentation", src: "document", sup: "NEW" },
        { title: "Tags", src: "tags" },
        { title: "Users", src: "user" },
        { title: "Badges", src: "bookmark" },
        { title: "Ask Question", src: "speaker" },
        { title: "Stack Exchange", src: "stack" },
        { title: "Inbox", src: "inbox", message: 24 },
    ];

    return (
        <div
            className={` ${open ? "w-72" : "w-20"
                }  p-5 pt-8 relative shadow-sidenav duration-300`}
        >
            <img
                src={"assets/control.png"}
                className={`absolute cursor-pointer -right-3 top-12 w-7  rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} alt=''
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="assets/logo.png"
                    className={`cursor-pointer w-10 duration-500 ${open && "rotate-[360deg]"
                        }`} alt=''
                />
                <h1
                    className={` origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
                >
                    <img className='w-32' src="assets/logoname.png" alt="" />
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex p-2 cursor-pointer hover:bg-gray-200 duration-150 uppercase font-light text-sm items-center gap-x-4 mt-2 ${index === 0 ? "border-l-4 border-primary shadow-inner" : 'rounded-md'}`}
                    >
                        <img className='w-5' src={`assets/${Menu.src}.svg`} alt='' />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title} {Menu.sup && <sup className='text-primary'>{Menu.sup} </sup>}
                            {Menu.message && <span className='border px-2 text-xs rounded-full text-primary'>{Menu.message}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;