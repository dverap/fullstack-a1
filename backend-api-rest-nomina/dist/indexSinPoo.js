"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const database_1 = require("./database");
const morgan_1 = __importDefault(require("morgan"));
// se crea el servidor
const app = (0, express_1.default)();
//  middleware: funciones que se ejecutan como un hilo
//Morgan es un Middleware de nivel de solicitud HTTP(muestra informacion de los request)
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// rutas del servidor
const router = (0, express_1.Router)();
router.route("/").get((req, res) => {
    res.send("Bienvenido a mi Pagina principal con router");
});
router.route("/datos").get((req, res) => {
    res.send("Bienvenido a mi Pagina Datos con router");
});
app.use("/inicio", router);
// app.get("/", (req:Request, res:Response) => {
//   res.send("Bienvenido a mi Pagina principal")
// });
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
