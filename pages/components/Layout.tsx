import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from 'next/head'

type Props = {
    children:React.ReactNode;
}

export default function Layout( {children}:Props  ){
    return(
        <>
            <Head>
                <link rel="shotcut icon" href="/images/faviicon.png" />
                <title>PokeNext</title>
            </Head>
            <header className="header">
                <NavBar />
            </header>
            <main className="main-container">{children}</main>
            <Footer />
        </>
    );
}