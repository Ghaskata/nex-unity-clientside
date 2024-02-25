import React from "react";

const DataLoadingCompo = () => {
    return (
        <div className="fixed top-0 start-0 w-screen h-2 z-[999]">
            <div class="load-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        </div>
    );
};

export default DataLoadingCompo;
