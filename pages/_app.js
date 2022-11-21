import "../styles/globals.css";
import "../styles/scss/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>KOHA</title>
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
