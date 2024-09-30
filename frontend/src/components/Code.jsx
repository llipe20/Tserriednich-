import React from "react";

const Code = ({children, title }) => {
    return (
        <div className="flex flex-col justify-center items-center rounded-lg text-white w-full h-auto overflow-hidden">
            <div className="flex justify-between items-center p-2 pl-5 pr-5 bg-blue-950 w-full">
                { title }
            </div>
            <div className="flex jusitfy-start items-center p-2 pl-5 pr-5 bg-black w-full">
                 <pre>
                    <code>
                        {children}
                    </code>
                 </pre>
            </div>
        </div>
    )
}

export default Code