import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Text,
  CardFooter,
  Heading,
  CardBody,
} from "@chakra-ui/react";

export default function PagosCard({name, price}) {
  return (
    <>
      <Card maxH="170px" size='sm' borderRadius='10px' maxW='150px' minW='150px' minH='170px'>
        <CardHeader textAlign="center">
          <Heading size='md'>{name}</Heading>
        </CardHeader>
        <CardBody>
        </CardBody>
        <Text  textAlign='center' mt='-20px'>$ {price}</Text>
        <CardFooter justifyContent='center'>
          <Button colorScheme="teal">Abonar</Button>
        </CardFooter>
      </Card>
    </>
  );
}