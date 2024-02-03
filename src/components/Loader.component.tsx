import React from "react";

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className={"loader z-100 " + className}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
