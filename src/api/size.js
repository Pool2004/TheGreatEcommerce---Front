/**
 * @description function to get all sizes
 * @returns sizes list
 */
const getSizes = async () => {
  try {
    const response = await fetch("http://localhost:8080/talla/get/all");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const mapSizes = (sizes) => {
  const newSizes = sizes.map((size) => {
    return {
      id: size.idTalla,
      label: size.talla,
    };
  });
  return newSizes;
};

export { getSizes, mapSizes };
