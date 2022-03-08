export class Cargo {
  // se ejecuta al instanciar la clea y crea los atributos con this
  constructor() {
    this.cargos = [
      { id: 1, descripcion: "Analista", estado: 1 },
      { id: 2, descripcion: "Ingeniero", estado: 0 },
      { id: 3, descripcion: "Consultor", estado: 1 },
    ];
  }

  obtenerCargos() {
    console.log(this.cargos);
    let filas = "";
    this.cargos.forEach((cargo) => {
      // destructuring: descomponer un objeto en sus atributos
      let { id, descripcion, estado } = cargo;
      filas += ` <tr>
        <td>${id}</td>
        <td>${descripcion}</td>
        <td>${estado ? "Activo" : "Inactivo"}</td>
        <td>
          <button type="button" class="btn btn-edit" id="btn-edit" data-id="${id}">✏️</button>
          <button type="button" class="btn btn-delete" id="btn-delete" data-id="${id}">❌</button>
        </td>
      </tr> `;
    });
    //console.log(filas);
    document.getElementById("detalle-cargos").innerHTML = filas;
    // eliminar
    const btnsDelete = document.querySelectorAll(".btn-delete");
    //console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        //console.log(btn.dataset.id,e.target.dataset.id);
        console.log("elimnando...");
        this.eliminarCargo(e.target.dataset.id);

      });
    });
    // editar
    const $btnsEdit = document.querySelectorAll(".btn-edit");
  }

  // insertar un nuevo cargo
  insertarDatos(cargo) {}

  obtenerCargo(id) {}

  eliminarCargo(id) {
    this.cargos = this.cargos.filter((cargo)=> cargo.id != id )
    this.obtenerCargos()

  }
  modificarDatos(cargoMod, id) {}

  // fin de la clase cargo
}