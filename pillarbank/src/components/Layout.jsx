import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./Navbar/Navbar";
import { usePathname } from 'next/navigation'
import Head from "next/head";

export default function Layout({children, title}){
    let path = usePathname()
    return(
        <ChakraProvider>
            <Head>
                <title>PillarBank - {title}</title>
            </Head>
            {path == "/login" ? null : <Navbar/>}
            {children}
        </ChakraProvider>
    )
}