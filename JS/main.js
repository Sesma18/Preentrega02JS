import { discos } from "./data.js";
import { mostrarDiscos, filtrarDiscos } from "./methods.js";

const cardsContainer = document.getElementById("cards-container");
const searchInput = document.getElementById("search");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const yearFilterInput = document.getElementById("year-filter");
const filterBtn = document.getElementById("filter-btn");

function aplicarFiltros() {
  const filters = {
    searchText: searchInput.value,
    minPrice: parseInt(minPriceInput.value),
    maxPrice: parseInt(maxPriceInput.value),
    year: parseInt(yearFilterInput.value),
  };

  const discosFiltrados = filtrarDiscos(discos, filters);
  mostrarDiscos(discosFiltrados, cardsContainer);
}

mostrarDiscos(discos, cardsContainer);
filterBtn.addEventListener("click", aplicarFiltros);
searchInput.addEventListener("input", aplicarFiltros);





