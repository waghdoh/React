import React from "react";

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="shimmer-card">
                        <div className="shimmer-img"></div>
                        <div className="shimmer-title"></div>
                        <div className="shimmer-tags"></div>
                        <div className="shimmer-details"></div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
