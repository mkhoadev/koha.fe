import React, { useEffect, useState } from "react";

function NftList() {
    return (
        <div className="nfts-wrap">
            <div className="container">
                <div className="nfts-layout">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className="background-card">
                            <div className="card-layout">
                                <div className="card-image"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NftList;
