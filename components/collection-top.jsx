import React from "react";
import Image from "next/image";
import Collection from "../assets/collection-image/collection-1.jpg";

function CollectionTop() {
    return (
        <div className="collection-wrap">
            <div className="container">
                <h1>Collection Top</h1>
                <div className="collection-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
                        <div key={item} className="collection-item">
                            <div className="item-left">
                                <div className="no">
                                    <span>{item}</span>
                                </div>
                                <div className="collection-image">
                                    <Image src={Collection} />
                                </div>
                                <div className="collection-information">
                                    <span>Monkey D</span>
                                    <span>100/200</span>
                                </div>
                            </div>
                            <div className="item-right">
                                <p>120000</p>
                                <span>100%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CollectionTop;
