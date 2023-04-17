import Image from "next/image";
import React from "react";

import NftImage from "../../assets/nft-image/5.png";
import CollectionOwner from "../../components/collection/collection-owner";
import NftOwner from "../../components/nft/nft-owner";

function NftDetail() {
  return (
    <section>
      <div className="nft-detail__wrap">
        <div className="nft-detail__left">
          <div className="nft-detail__left--thumbnail">
            <Image src={NftImage} alt="nft image" />
          </div>
        </div>
        <div className="nft-detail__right">
          <p className="nft-name">CAT YE #999</p>
          <div className="nft-top">
            <CollectionOwner />
            <NftOwner />
          </div>
          <div className="nft-action">
            <div>
              <p>Price</p>
              <p>1 ETH</p>
            </div>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftDetail;
