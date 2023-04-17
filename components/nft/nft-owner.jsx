import Image from "next/image";
import React from "react";

import OwnerImage from "../../assets/nft-image/34.png";

function NftOwner() {
  return (
    <div className="nft-owner">
      <Image src={OwnerImage} alt="owner image" />
      <div>
        <p>David Dao</p>
        <p>0x6dgh...63hs</p>
      </div>
    </div>
  );
}

export default NftOwner;
