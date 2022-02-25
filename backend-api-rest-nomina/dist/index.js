"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
// se crea el servidor
const app = (0, express_1.default)();
//  middleware: funciones que se ejecutan como un hilo
app.use(express_1.default.json());
// rutas del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido a mi Pagina principal");
});
app.get("/cargo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.json("Cargos de la empresa")
    const conn = yield (0, database_1.connect)();
    const cargos = yield conn.query("SELECT * FROM cargo");
    res.json(cargos[0]);
}));
// ejecutar el servidor
app.listen(3000, () => {
    console.log("Servidor ejecutando en el puerto 3000");
});
