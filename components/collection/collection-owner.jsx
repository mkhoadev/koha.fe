import Image from "next/image";
import React from "react";

import CollectionImage from "../../assets/nft-image/4.png";

function CollectionOwner() {
  return (
    <div className="collection-owner">
      <Image src={CollectionImage} alt="collection image" />
      <p>CatVipPro</p>
    </div>
  );
}

export default CollectionOwner;
