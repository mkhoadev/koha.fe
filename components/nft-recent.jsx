import React from "react";
import NftCard from "./nft-card";

function NftRecent() {
    return (
        <div className="nft-list-wrap">
            {[1, 2, 3, 4, 5].map((item) => (
                <NftCard />
            ))}
        </div>
    );
}

export default NftRecent;
