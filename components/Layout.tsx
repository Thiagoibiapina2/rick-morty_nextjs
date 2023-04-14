import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"

export default function Layout ({ children }: { children: React.ReactNode} ) {
    return(
        <>
        <Head>
            <link rel="icon" href="./images/favicon.ico" />
            <title>Rick&Morty</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}