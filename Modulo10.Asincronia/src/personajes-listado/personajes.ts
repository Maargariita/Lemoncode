import { obtenerPersonajes } from './personajes.api';
import {Personajes} from './personajes.modelo';



const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = `http://localhost:3000/${portada}`;
    imagen.alt = titulo;
    return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
};




const creaContenedorPersonajes = (personaje: Personajes): HTMLDivElement => {
   const elementoPersonaje = document.createElement("div");
   elementoPersonaje.classList.add("personaje-card");

   const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
   elementoPersonaje.appendChild(imagen);

   const nombre = crearElementoParrafo(personaje.nombre);
   elementoPersonaje.appendChild(nombre);

   const amigo = crearElementoParrafo(personaje.amigo);
   elementoPersonaje.appendChild(amigo);
 
   const especialidad = crearElementoParrafo(personaje.especialidad);
   elementoPersonaje.appendChild(especialidad);

   const habilidades = crearElementoParrafo(personaje.habilidades);
   elementoPersonaje.appendChild(habilidades);
  
   return elementoPersonaje;
};

const renderizarPersonajes = (personajes: Personajes[], listado: HTMLDivElement) => {
    listado.innerHTML = "";
    personajes.forEach((personaje) => {
        listado.appendChild(creaContenedorPersonajes(personaje));
    });
};

const pintarPersonajes = async () => {
    const todosLosPersonajes = await obtenerPersonajes();
    const listado = document.querySelector("#listado-personajes");
    const boton = document.querySelector("#button");
    const input = document.querySelector("#personajes");

    if (!listado || !(listado instanceof HTMLDivElement)) {
    throw new Error("No se ha encontrado el contenedor de personajes");
  }

  if (!input || !(input instanceof HTMLInputElement)) {
    throw new Error("No se ha encontrado el campo de texto");
  }


   const filtrarPersonajes = () => {
    const busqueda = input.value.trim().toLowerCase();
 
    if (!busqueda) {
      renderizarPersonajes(todosLosPersonajes, listado);
      return;
    }
 
    const filtrados = todosLosPersonajes.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda)
    );
 
    renderizarPersonajes(filtrados, listado);
  };
 
  renderizarPersonajes(todosLosPersonajes, listado);
 
  boton?.addEventListener("click", filtrarPersonajes);
  input.addEventListener("input", filtrarPersonajes);
};
 
document.addEventListener("DOMContentLoaded", pintarPersonajes);
 