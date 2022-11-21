import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

function DarkMode() {
    return (
        <div className="darkmode-layout">
            <div className="darkmode-sun">
                <HiSun size={100} />
            </div>
            <div className="darkmode-moon">
                <HiMoon size={100} />
            </div>
        </div>
    );
}

export default DarkMode;
