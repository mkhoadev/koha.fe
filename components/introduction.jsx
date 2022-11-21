import React from "react";
import Image from "next/image";
import NftIntro from "../assets/images/nft-intro.png";

function Introduction() {
    return (
        <div className="introduction-wrap">
            <div className="container">
                <div className="introduction-layout">
                    <div className="introduction-left">
                        <h1>
                            Extraordinary <br /> <span>NFT</span> you'll love
                        </h1>
                        <div className="action-btn">
                            <div className="explore">
                                <button>Explore Now</button>
                            </div>
                            <div className="create">
                                <span>Create My NFT</span>
                            </div>
                        </div>
                    </div>

                    <div className="introduction-right">
                        <div className="rhombus-bg"></div>
                        <div className="introduction-card">
                            <Image src={NftIntro} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
