/* eslint-disable */
//import "bootstrap";
//import "./style.css";

let pronombres = ["los", "tus", "nuestros"];
let adjetivos = ["mejores", "grandes", "atrevidos"];
let sustantivos = ["lentes", "sueños", "retos"];
let extensiones = [".com", ".es"];

function generarCombinaciones() {
  let combinaciones = [];
  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        for (let extension of extensiones) {
          // Combinación estándar
          let nombreDominio = `${pronombre}${adjetivo}${sustantivo}${extension}`;
          combinaciones.push(nombreDominio);

          // condicional
          if (sustantivo === "lentes") {
            let domainHack = `${pronombre}${adjetivo}${sustantivo.substring(
              0,
              sustantivo.length - 2
            )}${extension}`;
            combinaciones.push(domainHack);
          }
        }
      }
    }
  }
  return combinaciones;
}

let todasCombinaciones = generarCombinaciones();
todasCombinaciones.forEach((dominio, idx) => {
  console.log(`${idx + 1}. ${dominio}`);
});
