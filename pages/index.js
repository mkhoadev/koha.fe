import CollectionTop from "../components/collection-top";
import Introduction from "../components/introduction";
import NftRecent from "../components/nft-recent";

export default function Home() {
    return (
        <div>
            <Introduction />
            <CollectionTop />
            <NftRecent />
        </div>
    );
}
