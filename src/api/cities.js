const getCities = async () => {
  try {
    const response = await fetch("http://localhost:8080/ciudad/get/all");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const mapCities = (cities, deparmentId) => {
  const newCities = cities.map((city) => {
    return {
      id: city.idCiudad,
      label: city.nombre,
      idDepartament: city.idDepartamento.idDepartamento,
    };
  });

  return newCities.filter((city) => city.idDepartament === deparmentId);
};

export { getCities, mapCities };
