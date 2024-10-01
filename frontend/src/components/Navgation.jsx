import React from "react";
import Header from "./Header";

const Navgation = () => {
    return (
        <div className="flex flex-col justify-between items-start gap-3 w-1/4 h-screen bg-blue-950 text-white p-5 fixed top-0 left-0">
            <Header></Header>
        </div>
    )
}

export default Navgation