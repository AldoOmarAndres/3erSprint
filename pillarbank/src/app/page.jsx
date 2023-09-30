'use client'
import React from "react";
import MyCarousel from "../components/Carousell/Carousell";
import {useRouter} from 'next/navigation'

export default function HomePage() {

  const router = useRouter()
  
  const usuarioAlmacenado = sessionStorage.getItem('usuario');
  const usuario = usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
  if (!usuario) {
    router.push('/login');
  }

  return (
    <>
      <MyCarousel />
    </>
  );
}
