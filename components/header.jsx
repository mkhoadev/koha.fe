import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";

import { BiMoon, BiSun } from "react-icons/bi";

function Header() {
    const [darkmode, setDarkMode] = useState(false);
    const [keypress, setKeypress] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("keypress", (e) => {
    //         console.log(e);
    //         if (e.key === "/") {
    //             setKeypress(true);
    //         }
    //     });
    // }, []);

    return (
        <div className="header-wrap">
            <div className="header-layout">
                <div className="header-left">
                    <Link href="/">
                        <div className="logo">
                            <Image src={Logo} alt="logo" />
                            <span>KOHA</span>
                        </div>
                    </Link>
                    <div className="search">
                        <input placeholder="Search" />
                        <div className="symbol">
                            <span>/</span>
                        </div>
                    </div>
                    <div>
                        <Link href="/explore">
                            <span>Explore</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/create">
                            <span>Create</span>
                        </Link>
                    </div>
                </div>
                <div className="header-right">
                    <div>
                        <Link href="/connect">
                            <button>Connect Wallet</button>
                        </Link>
                    </div>
                    <button className="dark-mode" onClick={() => setDarkMode(!darkmode)}>
                        <BiMoon
                            className={`moon-icon ${darkmode && "darkmode-animation"}`}
                            size={20}
                        />
                        <BiSun
                            className={`sun-icon ${darkmode && "darkmode-animation"}`}
                            size={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
