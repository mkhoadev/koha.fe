import Image from "next/image";
import React, { useEffect } from "react";
import MetaMaskLogo from "../../assets/images/metamask-logo.png";

import { connectWallet } from "../../web3Providers/AppProviders";

function Connect() {
    useEffect(() => {
        const active = document.getElementById("tab-active");
        const tab = document.getElementsByClassName("tab");
        active.style.width = tab[0].clientWidth + "px";

        let tmp = 0;
        for (var i = 0; i < tab.length; i++) {
            var current = tab[i];
            current.dataset.width = tab[i].clientWidth + "px";
            if (i === 0) {
                current.dataset.order = "0px";
            } else {
                tmp += tab[i - 1].clientWidth + 25;
                current.dataset.order = tmp + "px";
            }
            current.addEventListener("click", (e) => {
                var order = e.currentTarget.dataset.order;
                var width = e.currentTarget.dataset.width;
                active.style.transform = `translateX(${order})`;
                active.style.width = width;
            });
        }
    }, []);

    return (
        <div className="connect-wrap">
            <div className="layout-left">
                <div className="connect-image"></div>
            </div>
            <div className="layout-right">
                <div className="connect-layout">
                    <div className="title">
                        <p>Connect Wallet</p>
                        <span>
                            Choose how you want to connect. There are several wallet providers.
                        </span>
                    </div>
                    <div className="tabs">
                        <div className="tab-list">
                            <div className="tab">
                                <span>Ethereum</span>
                            </div>
                            <div className="tab">
                                <span>Solana</span>
                            </div>
                            <div className="tab">
                                <span>Polygon</span>
                            </div>
                            <div className="tab">
                                <span>Login</span>
                            </div>
                            <div className="tab">
                                <span>Register</span>
                            </div>
                        </div>
                        <div id="tab-active"></div>
                    </div>
                    <div className="wallet-box">
                        <div className="wallet-item" onClick={() => connectWallet()}>
                            <Image className="metamask-logo" src={MetaMaskLogo} />
                            <span className="title-wallet">MetaMask</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;
