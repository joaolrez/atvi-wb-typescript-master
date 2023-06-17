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
var ListagemProdutosServicosConsumidos = /** @class */ (function (_super) {
    __extends(ListagemProdutosServicosConsumidos, _super);
    function ListagemProdutosServicosConsumidos(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemProdutosServicosConsumidos.prototype.listar = function () {
        var produtosMaisConsumidos = this.obterProdutosMaisConsumidos();
        console.log("Produto mais consumido");
        this.exibirConsumo(produtosMaisConsumidos);
        var servicosMaisConsumidos = this.obterServicosMaisConsumidos();
        console.log("Serviço mais consumido");
        this.exibirConsumo(servicosMaisConsumidos);
    };
    ListagemProdutosServicosConsumidos.prototype.obterProdutosMaisConsumidos = function () {
        var produtosConsumidos = {};
        this.clientes.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                var nome = produto.nome;
                produtosConsumidos[nome] = (produtosConsumidos[nome] || 0) + 1;
            });
        });
        return this.ordenarConsumo(produtosConsumidos);
    };
    ListagemProdutosServicosConsumidos.prototype.obterServicosMaisConsumidos = function () {
        var servicosConsumidos = {};
        this.clientes.forEach(function (cliente) {
            cliente.getServicosConsumidos.forEach(function (servico) {
                var nome = servico.nome;
                servicosConsumidos[nome] = (servicosConsumidos[nome] || 0) + 1;
            });
        });
        return this.ordenarConsumo(servicosConsumidos);
    };
    ListagemProdutosServicosConsumidos.prototype.ordenarConsumo = function (consumo) {
        return Object.entries(consumo)
            .sort(function (a, b) { return b[1] - a[1]; })
            .map(function (_a) {
            var nome = _a[0], quantidade = _a[1];
            return ({ nome: nome, quantidade: quantidade });
        });
    };
    ListagemProdutosServicosConsumidos.prototype.exibirConsumo = function (consumo) {
        var restricao = consumo.slice(0, 1);
        restricao.forEach(function (consumido) {
            console.log("Nome: ".concat(consumido.nome));
            console.log("Quantidade consumida: ".concat(consumido.quantidade));
            console.log();
        });
    };
    return ListagemProdutosServicosConsumidos;
}(listagem_1.default));
exports.default = ListagemProdutosServicosConsumidos;
