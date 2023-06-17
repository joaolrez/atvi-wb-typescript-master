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
var entrada_1 = __importDefault(require("../../io/entrada"));
var update_1 = __importDefault(require("../update"));
var UpdateProduto = /** @class */ (function (_super) {
    __extends(UpdateProduto, _super);
    function UpdateProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateProduto.prototype.update = function () {
        console.log();
        console.log("Todos os produtos");
        this.listarProdutos();
        console.log();
        var nomeProduto = this.entrada.receberTexto("Nome do produto que deseja alterar: ");
        var indexProduto = this.encontrarProduto(nomeProduto);
        if (indexProduto === -1) {
            console.log("Produto ".concat(nomeProduto, " n\u00E3o encontrado"));
        }
        else {
            var novoNome = this.entrada.receberTexto("Digite o novo nome do Produto: ");
            var novoPreco = this.entrada.receberNumero("Digite o novo preço do Produto: R$");
            this.atualizarProduto(indexProduto, novoNome, novoPreco);
            console.log("Produto alterado com sucesso");
        }
    };
    UpdateProduto.prototype.listarProdutos = function () {
        this.produtos.forEach(function (produto) {
            console.log("Produto: ".concat(produto.nome));
        });
    };
    UpdateProduto.prototype.encontrarProduto = function (nome) {
        return this.produtos.findIndex(function (produto) { return produto.nome === nome; });
    };
    UpdateProduto.prototype.atualizarProduto = function (index, novoNome, novoPreco) {
        this.produtos[index].nome = novoNome;
        this.produtos[index].preco = novoPreco;
    };
    return UpdateProduto;
}(update_1.default));
exports.default = UpdateProduto;
