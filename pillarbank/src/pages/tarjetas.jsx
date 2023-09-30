"use client"
import { fetchUserData } from "../utils/filesFunctions"
import { leerSessionStorage } from "../utils/sessionStorage"

import DisplayTarjeta from "../components/Tarjeta/DisplayTarjeta"
import Layout from "../components/Layout"
import { Stack, Text } from "@chakra-ui/react"


export default function page(props){
    let cards = null
    if(!props.data.lenght) cards = props.data.map(c => <DisplayTarjeta key={c.id} card={c}/>)
    else cards = <Text>No hay tarjetas que mostrar</Text>
    return(
        <Layout>
            <Stack display="flex" justify="center" align="center">
                {cards}
            </Stack>
        </Layout>
    )
}

export const getServerSideProps = async () =>{
    // const user = leerSessionStorage("usuario")
    const user = {id: 0}
    const data = await fetchUserData(user.id, "credit_cards")

    return {props: { data }}
}