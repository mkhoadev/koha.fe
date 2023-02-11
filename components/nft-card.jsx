import React from "react";

function NftCard() {
    return (
        <div className="background-card">
            <div className="card-layout">
                <div className="card-image">
                    <img src="https://res.cloudinary.com/dvcrkrdla/image/upload/v1666802893/nft/QmUJhzGwgT6seXeudAZV8hY8QA8FHJ8EnPjZC2eyoPyZuE_hall6f.jpg" />
                </div>
                <div className="card-information">
                    <p>CAT COIN</p>
                    <p>CAT ETH</p>
                    <p>Price: 12 ETH</p>
                </div>
            </div>
        </div>
    );
}

export default NftCard;
