import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import MetaMaskLogo from "../../assets/images/metamask-logo.png";

import { connectWallet } from "../../web3Providers/AppProviders";

function Connect() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [tab, setTab] = useState("login");

    useEffect(() => {
        const path = router?.asPath;
        setTab(path.slice(path.search("#") + 1));
    }, [router]);

    const onSubmit = (data) => console.log(data);

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
                            <Link href="#login">
                                <div className="tab">
                                    <span>Login</span>
                                </div>
                            </Link>
                            <Link href="#register">
                                <div className="tab">
                                    <span>Register</span>
                                </div>
                            </Link>
                            <div className="tab">
                                <span>Ethereum</span>
                            </div>
                            <div className="tab">
                                <span>Solana</span>
                            </div>
                            <div className="tab">
                                <span>Polygon</span>
                            </div>
                        </div>
                    </div>
                    <div className="wallet-box">
                        {/* <div className="wallet-item" onClick={() => connectWallet()}>
                            <Image className="metamask-logo" src={MetaMaskLogo} />
                            <span className="title-wallet">MetaMask</span>
                        </div> */}
                        {tab === "login" && (
                            <div className="form-login">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-field">
                                        <label>Username</label>
                                        <input type="text" {...register("name")} />
                                    </div>
                                    <div className="input-field">
                                        <label>Password</label>
                                        <input type="text" {...register("password")} />
                                    </div>
                                    <div className="action-field">
                                        <button>Login</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {tab === "register" && (
                            <div className="form-login">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-field">
                                        <label>Username</label>
                                        <input type="text" {...register("name")} />
                                    </div>
                                    <div className="input-field">
                                        <label>Password</label>
                                        <input type="text" {...register("password")} />
                                    </div>
                                    <div className="input-field">
                                        <label>Confirm Password</label>
                                        <input type="text" {...register("confirmPassword")} />
                                    </div>
                                    <div className="action-field">
                                        <button>Register</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;
