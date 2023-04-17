import React from "react";
import Image from "next/image";
import Link from "next/link";

import OwnerImage from "../assets/nft-image/1.png";
import NftImage from "../assets/nft-image/2.png";

import { AiOutlineHeart } from "react-icons/ai";

function NftCard() {
  return (
    <div className="card__wrap">
      <div className="card__header">
        <Link href="/">
          <p>
            <Image src={OwnerImage} alt="owner image" /> CatPro
          </p>
        </Link>
        <AiOutlineHeart size={20} />
      </div>
      <div className="card__body">
        <Link href="/nft/123">
          <div className="card__body--thumbnail">
            <Image src={NftImage} alt="nft image" />
          </div>
        </Link>
        <div className="card__body--action">
          <button>Buy Now</button>
        </div>
      </div>
      <div className="card__footer">
        <p>CatPro #18</p>
        <p>1 ETH</p>
      </div>
    </div>
  );
}

export default NftCard;
