const getDeparments = async () => {
  try {
    const response = await fetch("http://localhost:8080/departamento/get/all");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const mapDeparments = (deparments) => {
  const newDeparments = deparments.map((deparment) => {
    return {
      id: deparment.idDepartamento,
      label: deparment.nombre,
    };
  });
  return newDeparments;
};

export { getDeparments, mapDeparments };
