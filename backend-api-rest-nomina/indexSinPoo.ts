import express,{Router,Request,Response,Application} from "express"
import {connect} from './database'
import morgan from 'morgan'

// se crea el servidor
const app:Application = express();
//  middleware: funciones que se ejecutan como un hilo
//Morgan es un Middleware de nivel de solicitud HTTP(muestra informacion de los request)
app.use(morgan("dev"))
app.use(express.json());
// rutas del servidor
const router = Router();

router.route("/").get((req: Request, res: Response) => {
  res.send("Bienvenido a mi Pagina principal con router");
});
router.route("/datos").get((req: Request, res: Response) => {
  res.send("Bienvenido a mi Pagina Datos con router");
});

app.use("/inicio",router);

// app.get("/", (req:Request, res:Response) => {
//   res.send("Bienvenido a mi Pagina principal")
// });

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
