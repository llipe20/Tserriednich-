import React from "react";

const Estrofe = ({children, title, text}) => {
    return (
        <div className="flex flex-col justify-between items-start gap-4 w-full h-auto bg-blue-200">
            <h2 className="font-bold lg:text-lg">
                {title}
            </h2>
            <p className="text-start w-2/3">
                {text}
            </p>
            {children}
        </div>
    )
}

export default Estrofe