"use client";

import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import PagosCard from "../../components/PagosCard/PagosCard";
import Layout from "../../components/Layout";
import { fetchUserData } from "../../utils/filesFunctions";
import { useRouter } from 'next/navigation'

export async function getServerSideProps(context) {
  const { params } = context;
  const idUser = params.idUser;
  try {
    const userData = await fetchUserData(idUser, "serviciosUser");

    return {
      props: {
        user: userData,
      },
    };
  } catch (error) {
    console.log(error);
    console.error("Error al cargar los datos del usuario:", idUser);
    return {
      notFound: true,
    };
  }
}
/*
export async function getStaticProps() {
  // Ruta al archivo JSON en la carpeta "public"
  const filePath = "data/serviciosUser.json";

  try {
    // Lee el contenido del archivo JSON
    const data = fs.readFileSync(filePath, "utf-8");

    // Parsea el contenido JSON
    const jsonData = JSON.parse(data);

    // Retorna los datos como props
    return {
      props: {
        data: jsonData.servicios,
      },
    };
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    return {
      props: {
        data: [], // Puedes manejar el error de manera apropiada aquí
      },
    };
  }
}
*/

export default function PagosPage({ user }) {
  const router = useRouter()

  const pagos = user.map((d) =>
    d.servicios.map((s) => <PagosCard name={s.name} price={s.price} />)
  );

  const handleClick = async () => {
    await fetch("/api/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idU: "3",
        servicios: [
          {
            name: "Algo",
            price: 2900,
          },
        ],
      }),
    });
    router.push({
      pathname: '/[idUser]/pagos',
      query: { idUser: user[0].idU }
    }, 
    undefined, { shallow: true }
    )
  };

  return (
    <>
      <Layout>
        <Heading textAlign="center" mt="10px">
          Pagos
        </Heading>

        <Box textAlign="center" mt="10px" mb="15px">
          <Button>Nuevo Pago</Button>
        </Box>

        <VStack display="flex" pr="25%" pt="10px" pb="20px">
          <Heading size="md">Pagos por vencer</Heading>
          <Button>Agregar un servicio</Button>
        </VStack>
        <VStack>
          <HStack
            border="1px"
            borderColor="gray.300"
            borderRadius="10px"
            flexWrap="wrap"
            justifyContent="center"
            spacing={6}
            maxW='700px'
          >
            {pagos}
          </HStack>
        </VStack>
        <Button onClick={handleClick}>Modificar JSON</Button>
      </Layout>
    </>
  );
}
