import React from "react";

const Link = ({title, ancora}) => {
    return (
        <a href={`#${ancora}`} className="flex justify-center items-center w-full h-12 rounded-lg bg-blue-900 shadow scale-95 hover:scale-100">
            <span className="text-white font-bold border-b">
                { title }
            </span>
        </a>
    )
}

export default Link 