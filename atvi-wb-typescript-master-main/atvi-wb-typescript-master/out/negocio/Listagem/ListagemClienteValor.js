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
var ListagemClienteValor = /** @class */ (function (_super) {
    __extends(ListagemClienteValor, _super);
    function ListagemClienteValor(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClienteValor.prototype.listar = function () {
        var valorConsumido = [];
        this.clientes.forEach(function (cliente) {
            var nomeCliente = cliente.nome;
            var precosProdutos = cliente.getProdutosConsumidos.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
            var precosServicos = cliente.getServicosConsumidos.reduce(function (soma, servico) { return soma + servico.preco; }, 0);
            valorConsumido.push({
                nome: nomeCliente,
                precosProdutos: precosProdutos,
                precosServicos: precosServicos,
            });
        });
        var ordenacaoProdutos = valorConsumido.sort(function (a, b) {
            return b.precosProdutos - a.precosProdutos;
        });
        var restricaoProdutos = ordenacaoProdutos.slice(0, 5);
        console.log();
        console.log("Os clientes que mais consumiram em valor de produto");
        restricaoProdutos.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Produtos R$".concat(consumidos.precosProdutos));
            console.log();
        });
        var ordenacaoServicos = valorConsumido.sort(function (a, b) {
            return b.precosServicos - a.precosServicos;
        });
        var restricaoServicos = ordenacaoServicos.slice(0, 5);
        console.log("Os clientes que mais consumiram em valor de serviço");
        restricaoServicos.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Servi\u00E7os R$".concat(consumidos.precosServicos));
            console.log();
        });
    };
    return ListagemClienteValor;
}(listagem_1.default));
exports.default = ListagemClienteValor;
