import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    Box,
    Text,
    Avatar,
    HStack,
  } from "@chakra-ui/react";
import Layout from "../../components/Layout";
  
  export default function PerfilPage() {
  
    //Esta página por el momento se encuentra hardcodeada
    //Está pensada para que los usuarios válidos puedan ver su información y editarla si asi lo quisiesen.
  
    return (
        <Layout>
            <Card maxWidth="400px" m="auto" height="70%" mt="5%">
                <CardHeader>
                <HStack justify={"center"}>
                <Avatar name="" src="" size={"lg"}/>
                <Heading size="lg" textAlign="center">
                    Mi perfil
                </Heading>
                </HStack>
                </CardHeader>
                <CardBody marginTop="28px">
                <Stack divider={<StackDivider />} spacing="2.5" marginTop="-2rem">
                    <Box>
                    <Heading size="xs">Nombre</Heading>
                    <Text fontSize="sm">
                        Administrador
                    </Text>
                    </Box>
                    <Box>
                    <Heading size="xs">Usuario</Heading>
                    <Text fontSize="sm">admin</Text>
                    </Box>
                    <Box>
                    <Heading size="xs">Correo</Heading>
                    <Text fontSize="sm">admin64@gmail.com</Text>
                    </Box>
                </Stack>
                </CardBody>
            </Card>
      </Layout>
    );
  }