import React from "react";

const DataLoadingCompo = () => {
    return (
        <div className="fixed top-0 start-0 w-screen h-2 z-[9999]">
            <div className="load-bar">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        </div>
    );
};

export default DataLoadingCompo;
