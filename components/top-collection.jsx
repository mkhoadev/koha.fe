import React from "react";
import Image from "next/image";
import Collection from "../assets/collection-image/collection-1.jpg";

function TopCollection() {
    return (
        <div className="TopCollection-wrap">
            <div className="container">
                <div className="collection-grid">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="collection-item">
                            <div className="collection-image">
                                <Image src={Collection} />
                            </div>
                            <div className="collection-information">
                                <span>Monkey D</span>
                                <span>100/200</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopCollection;
