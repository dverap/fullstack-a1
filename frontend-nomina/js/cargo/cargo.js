import { Cargo } from "./componente.js";
// instanciamos cargo
const serCargo = new Cargo();
const d = document;
const $formCargo = d.getElementById("form-cargo");

d.addEventListener("DOMContentLoaded", serCargo.obtenerCargos());
// delegacion de eventos
d.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.matches("#enviar")) {
    //alert("has hecho click")
    e.preventDefault();
    let $descrip = d.getElementById("descripcion").value;
    let $estado = d.getElementById("activo").checked;
    if ($descrip.trim().length < 3) {
      alert("Datos vacios o incompletos");
    } else {
      if (serCargo.grabar) {
        let id = Date.now();
        const cargo = { id, descripcion: $descrip, estado: $estado };
        serCargo.insertarDatos(cargo);
      } else {
        let id = serCargo.id;
        const cargo = { id, descripcion: $descrip, estado: $estado };
        serCargo.modificarDatos(cargo, serCargo.id);
      }
      $formCargo.reset();
    }
  }
});
