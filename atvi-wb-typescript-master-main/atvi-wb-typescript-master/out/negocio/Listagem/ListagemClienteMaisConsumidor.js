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
var ListagemQuantidade = /** @class */ (function (_super) {
    __extends(ListagemQuantidade, _super);
    function ListagemQuantidade(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemQuantidade.prototype.listar = function () {
        var consumidores = [];
        this.clientes.forEach(function (cliente) {
            var nomeCliente = cliente.getNome;
            var quantidadeConsumo = cliente.getProdutosConsumidos.length +
                cliente.getServicosConsumidos.length;
            consumidores.push({ nome: nomeCliente, quantidade: quantidadeConsumo });
        });
        var ordenacao = consumidores.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var restricao = ordenacao.slice(0, 10);
        console.log("===============================");
        console.log("Os 10 clientes que mais consumiram produtos e serviços");
        restricao.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade total consumida: ".concat(consumidos.quantidade, " itens"));
            console.log();
        });
        console.log("==============================");
    };
    return ListagemQuantidade;
}(listagem_1.default));
exports.default = ListagemQuantidade;
