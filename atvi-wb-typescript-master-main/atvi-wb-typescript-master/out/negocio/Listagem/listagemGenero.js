"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var ListagemGenero = /** @class */ (function (_super) {
    __extends(ListagemGenero, _super);
    function ListagemGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemGenero.prototype.listar = function () {
        console.log("\nClientes do sexo Masculino");
        this.listarPorGenero("Masculino");
        console.log("\nClientes do sexo Feminino");
        this.listarPorGenero("Feminino");
        console.log();
    };
    ListagemGenero.prototype.listarPorGenero = function (genero) {
        var clientesDoGenero = this.clientes.filter(function (cliente) { return cliente.genero === genero; });
        clientesDoGenero.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
        });
    };
    return ListagemGenero;
}(listagem_1.default));
exports.default = ListagemGenero;
