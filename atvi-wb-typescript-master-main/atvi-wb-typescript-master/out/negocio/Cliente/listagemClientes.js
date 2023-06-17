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
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Data de cadastro:", cliente.getDataCadastro.toLocaleDateString());
            console.log("Nome:", cliente.nome);
            console.log("Nome social:", cliente.nomeSocial);
            console.log("Gênero:", cliente.genero);
            console.log("CPF:", cliente.getCpf.getValor);
            console.log("CPF emissão:", cliente.getCpf.getDataEmissao.toLocaleDateString());
            cliente.getRgs.forEach(function (rg, index) {
                console.log("RG ".concat(index + 1, ":"), rg.getValor, "emissão em", rg.getDataEmissao.toLocaleDateString());
            });
            cliente.getTelefones.forEach(function (telefone, index) {
                console.log("Telefone ".concat(index + 1, ":"), telefone.getDdd, telefone.getNumero);
            });
            console.log("==============================");
            console.log("Listagem de Produtos consumidos:");
            cliente.getProdutosConsumidos.forEach(function (produto) {
                console.log(produto.nome);
                console.log("R$", produto.preco);
            });
            console.log("==============================");
            console.log("Listagem de Serviços Consumidos:");
            cliente.getServicosConsumidos.forEach(function (servico) {
                console.log(servico.nome);
                console.log("R$", servico.preco);
            });
            console.log("===============================\n");
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
