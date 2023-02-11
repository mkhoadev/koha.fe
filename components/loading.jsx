import React from "react";
import { useEffect } from "react";

function Loading({ isLoading }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className="loading-wrap">
            {isLoading && (
                <div className="loading">
                    <span>...loading</span>
                </div>
            )}
        </div>
    );
}

export default Loading;
