'use client'
import React, {useEffect} from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Importa ChevronDownIcon desde @chakra-ui/icons

import Link from "next/link";

const DropdownMenu = () => {
  useEffect(() => {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    const usuario = usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
    if (!usuario) {
      router.push('/login');
    }
  }, [])
  
  
  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>Inicio</MenuItem>
          </Link>
          <Link href="/perfil">
            <MenuItem>Mi perfil</MenuItem>
          </Link>
          <Link href="/cuentas">
            <MenuItem>Cuentas</MenuItem>
          </Link>
          <Link href="/tarjetas">
            <MenuItem>Tarjetas</MenuItem>
          </Link>
          <Link href="/transferencias">
            <MenuItem>Transferencias</MenuItem>
          </Link>
          <Link href="/pagos">
            <MenuItem>Pagos</MenuItem>
          </Link>
          <Link href="/herramientas">
            <MenuItem>Herramientas</MenuItem>
          </Link>
          {/* {isLogged ? (
          <Link href="/home" onClick={() => signOut()}>
            <MenuItem>Cerrar sesión</MenuItem>
          </Link>
        ) : null} */}
        </MenuList>
      </Menu>
  );
};

export default DropdownMenu;
