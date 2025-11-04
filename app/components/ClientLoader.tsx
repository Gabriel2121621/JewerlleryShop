"use client"; // <-- ¡Marca este componente como un "Client Component"!

import React, { useState, useEffect } from "react";
// Asumo que tu spinner se llama 'SimpleLoadingSpinner' por el chat anterior
import SimpleLoadingSpinner from "./LoadingSpinner";

const ClientLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga (puedes ajustar o quitar esto)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer); // Limpia el temporizador
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez

  // Renderiza tu spinner basado en el estado
  return <SimpleLoadingSpinner isLoading={isLoading} />;
};

export default ClientLoader;
