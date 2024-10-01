import React from "react";

const Estrofe = ({children, title, text}) => {
    return (
        <div className="flex flex-col justify-between items-start gap-5 w-full h-auto">
            <h2 className="font-bold text-xl border-b-2 border-black w-full text-start pb-2">
                {title}
            </h2>
            <p className="text-justify">
                {text}
            </p>
            {children}
        </div>
    )
}

export default Estrofe