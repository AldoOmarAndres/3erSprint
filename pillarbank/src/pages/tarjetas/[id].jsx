"use client"
//Imports de components
import Layout from "../../components/Layout"
import Tarjeta from "../../components/Tarjeta/Tarjeta"
import Datos from "../../components/Tarjeta/Id/Datos"

//Imports de librerias
import { Stack, Text, Button, Collapse, useDisclosure, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"

//Imports de funciones
import { fetchUserData } from "../../utils/filesFunctions"

//Declaracion del componente
export default function Id(props){
    //Acceso al pops
    let card = props.card

    //Declaracion de estados
    const [infoCard, setInfoCard] = useState(card) //Datos para renderizado
    const [loadign, toggleLoading] = useState(false) //Booleano para Loading
    const [limite, setLimite] = useState(infoCard.limit) //Limite para su cambio
    
    //Funcion de libreria Chakra para abrir y cerrar el Collapse
    const { isOpen, onToggle } = useDisclosure()

    return(
        <Layout>
            <Stack margin="3vw" border="gray solid 3px" borderRadius="10px" position="relative">
                <Stack pos="absolute" top="1" left="3">
                    <Link href="/tarjetas">
                        <Button colorScheme='teal' variant='link'>Volver a la Lista</Button>
                    </Link>
                </Stack>
                <Stack m="15px">
                    <Tarjeta card={infoCard}/>
                </Stack>
                    <Datos card={infoCard}/>
                <Stack display="flex" justify="space-around" flexDir="row" margin="2vw">
                    <Link href="/pagos"><Button colorScheme='teal' variant='outline'>Pagar</Button></Link>
                    <Button colorScheme='teal' variant='outline' onClick={isOpen ? null : onToggle}>Ampliar Limite</Button>
                </Stack>
                <Stack display="flex" align="center" >
                    <Collapse in={isOpen}>
                        <Stack mb="3vw">
                            <Text>Ampliar Limite:</Text>
                            <InputGroup>
                                <InputLeftAddon children='$' />
                                <Input type='number' placeholder='Limite a solicitar' value={limite} onChange={e => setLimite(e.target.value)} />
                            </InputGroup>
                            <Button isLoading={loadign} onClick={() => solicitar(toggleLoading, infoCard, setInfoCard, limite, onToggle)}>Solicitar</Button>
                        </Stack>
                    </Collapse>
                </Stack>
            </Stack>
        </Layout>
    )
}


export const getServerSideProps = (async ({query: {id}}) =>{
    const data = await fetchUserData(1, "credit_cards")
    const card = data.filter(c => c.id == id)[0]
    return {props: { card }  }
})



async function solicitar(toggleLoading, infoCard, setInfoCard, limite, onToggle){
    await toggleLoading(true)
    let card = {...infoCard, limit: limite}
    await setInfoCard(card)
    setTimeout(async ()=>{
        await toggleLoading(false)
        await onToggle()
    }, 2000);
}