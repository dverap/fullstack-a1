// importar router
import { Router } from "express";
import { getCargos } from "../controllers/cargo.controller";
//import { connect } from "../database";
// instanciar router - ruteador
const router = Router();
// crear rutas de cargos
router.route("/")
    .get(getCargos)
   


// router.route("/cargo").get( async(req, res) => {
//    const conn = await connect();
//    const cargos = await conn.query("SELECT * FROM cargo");
//    res.json(cargos[0]);
// });

export default router


