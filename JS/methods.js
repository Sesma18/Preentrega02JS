export function mostrarDiscos(discos, container) {
    container.innerHTML = "";
    discos.forEach((disco) => {
      const card = document.createElement("div");
      card.className = "bg-gray-800 rounded-lg shadow-md p-4";
      card.innerHTML = `
        <div class="overflow-hidden mb-4">
          <img src="${disco.imagen}" alt="${disco.titulo}" class="w-full h-auto object-contain rounded-md">
        </div>
        <h2 class="text-xl font-bold text-teal-400 mb-2">${disco.titulo}</h2>
        <p class="text-gray-300">Precio: $${disco.precio}</p>
        <p class="text-gray-300">Año: ${disco.anio}</p>
        <h3 class="text-teal-400 font-bold mt-2">Canciones:</h3>
        <ul class="text-gray-300 list-disc list-inside">
          ${disco.canciones.map((cancion) => `<li>${cancion}</li>`).join("")}
        </ul>
      `;
      container.appendChild(card);
    });
  }
  
  export function filtrarDiscos(discos, filters) {
    return discos.filter((disco) => {
      const cumpleTexto = disco.titulo.toLowerCase().includes(filters.searchText.toLowerCase());
      const cumplePrecio = disco.precio >= (filters.minPrice || 0) && disco.precio <= (filters.maxPrice || Infinity);
      const cumpleAnio = !filters.year || disco.anio === filters.year;
  
      return cumpleTexto && cumplePrecio && cumpleAnio;
    });
  }



