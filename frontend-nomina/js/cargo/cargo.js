import {Cargo} from './componente.js'
// instanciamos cargo
const serCargo = new Cargo();
const d = document
const $formCargo = d.getElementById("form-cargo");

d.addEventListener("DOMContentLoaded",serCargo.obtenerCargos())

