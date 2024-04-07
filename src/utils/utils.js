const getPriceInCOP = (number) => {
  return new Intl.NumberFormat("es-CO", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "COP",
  }).format(number);
};

const getCategory = (category) => {
  const gender = category.tipoSexo === "M" ? "Hombre" : "Mujer";
  return { id: category.idCategoria, label: category.tipoRopa + " " + gender };
};

const getCategoryLabel = (category) => {
  return getCategory(category).label;
};

export { getPriceInCOP, getCategory, getCategoryLabel };
