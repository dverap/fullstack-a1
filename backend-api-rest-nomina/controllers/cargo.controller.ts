import  { Request, Response } from "express";
import { connect } from "../database";

// controlador de getcargos (funcion o logica de la peticion)
export async function getCargos(req:Request, res:Response): Promise<Response | void> {
 try { 
     const conn = await connect();
     const cargos = await conn.query("SELECT * FROM cargo");
     return res.json(cargos[0]);
 }   
 catch (err) {
     console.log(err);
 }

};

