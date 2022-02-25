import express,{Request,Response} from "express"
import {connect} from './database'

// se crea el servidor
const app = express();
//  middleware: funciones que se ejecutan como un hilo
app.use(express.json());
// rutas del servidor
app.get("/", (req:Request, res:Response) => {
  res.send("Bienvenido a mi Pagina principal")
})
app.get("/cargo", async (req:Request, res:Response) => {
  //res.json("Cargos de la empresa")
  const conn = await connect()
  const cargos = await conn.query("SELECT * FROM cargo");
  res.json(cargos[0])
})

// ejecutar el servidor
app.listen(3000,() => {
    console.log("Servidor ejecutando en el puerto 3000");
})
