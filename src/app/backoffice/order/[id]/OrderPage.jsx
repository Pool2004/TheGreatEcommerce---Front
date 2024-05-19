"use client";
import React, { useEffect, useState } from "react";

const OrderPage = ({ id }) => {
  const [order, setOrder] = useState(null);
  const fetchOrder = async () => {
    try {
      const response = await fetch("http://localhost:8080/orden/get/" + id);
      const jsonData = await response.json();
      console.log(jsonData);
      setOrder(jsonData);
    } catch (error) {
      console.error("Error eeee:", error);
      setOrder(null);
    }
  };

  useEffect(() => {
    fetchOrder();
    return () => {
      return null;
    };
  }, []);
  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <h1>Orden: {order?.idOrden}</h1>
      <div>Cantidad articulos: {order?.cantidad}</div>
      <div>Fecha: {order?.fecha}</div>
      <div>Departamento: {order?.idDepartamento.nombre}</div>
      <div>Direccion: {order?.direccion}</div>
      <div>cedula: {order?.idUsuario.identificacion}</div>
      <div>Nombre: {order?.idUsuario.nombre}</div>
      <div>Rol: {order?.idUsuario.rol}</div>
      <div>Telefono: {order?.idUsuario.telefono}</div>
      <div>Tipo entrega: {order?.tipoEntrega}</div>
    </main>
  );
};

export default OrderPage;
