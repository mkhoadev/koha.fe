import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";
import "../styles/scss/main.scss";

import { useRouter } from "next/router";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>KOHA</title>
            </Head>
            {router.pathname.split("/")[1].toLowerCase() === "connect" ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Header />
                    <div className="body-container">
                        <Component {...pageProps} />
                    </div>
                </>
            )}
        </>
    );
}

export default MyApp;
