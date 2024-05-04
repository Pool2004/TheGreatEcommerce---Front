/**
 * @description function to get all categories
 * @returns categories list
 */
const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:8080/categoria/get/all");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const mapCategories = (categories) => {
  const newCategories = categories.map((category) => {
    return {
      id: category.idCategoria,
      label: `${category.tipoRopa} ${
        category.tipoSexo === "M" ? "Hombre" : "Mujer"
      }`,
      name: category.tipoRopa,
    };
  });
  return newCategories;
};

export { getCategories, mapCategories };
