import peliculas from './peliculas.js'

const contenedorAcci =  document.getElementById("genero-28");
const contenedorThril = document.getElementById("genero-53");
const contenedorAvent = document.getElementById("genero-12");

const peliAcci = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
const peliThril = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
const peliAvent = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

function mostrarPeliculas(listaPeliculas, contenedor) {
  listaPeliculas.forEach(pelicula => {
    const div = document.createElement("div");
    div.className = "pelicula";
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>`;
    contenedor.appendChild(div);
  });
}

mostrarPeliculas(peliAcci, contenedorAcci);
mostrarPeliculas(peliThril, contenedorThril);
mostrarPeliculas(peliAvent, contenedorAvent);



