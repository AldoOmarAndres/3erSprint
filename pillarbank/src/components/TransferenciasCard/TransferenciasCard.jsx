import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function TransferenciaCard({cuenta, idActual}) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [transferencia, setTransferencia] = useState({
    id1:idActual,
    cuentaDestino:cuenta.numberAccount,
    monto:0
  });

  const handleSubmit = async () => {
    await fetch("/api/cuentas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transferencia
      }),
    });
    onClose();
  };

  const handleChange = (e) => {
    setTransferencia({ ...transferencia, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Card maxH="180px">
        <CardHeader textAlign="center">
          <Avatar name={cuenta.nombre} />
        </CardHeader>
        <Text textAlign="center">{cuenta.nombre}</Text>
        <CardFooter>
          <Button colorScheme="teal" onClick={onOpen}>Transferir</Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Transferir a {cuenta.nombre}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Monto</FormLabel>
                <Input
                  name="price"
                  placeholder="$0.00"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Transferir
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  );
}