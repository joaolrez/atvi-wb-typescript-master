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
var ListagemProduto = /** @class */ (function (_super) {
    __extends(ListagemProduto, _super);
    function ListagemProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        return _this;
    }
    ListagemProduto.prototype.listar = function () {
        console.log("\nListagem dos Produtos:\n");
        this.exibirProdutos();
    };
    ListagemProduto.prototype.exibirProdutos = function () {
        var _this = this;
        this.produtos.forEach(function (produto, index) {
            console.log("".concat(index + 1, " - ").concat(produto.nome));
            console.log("R$".concat(produto.preco));
            _this.exibirSeparador();
        });
    };
    ListagemProduto.prototype.exibirSeparador = function () {
        console.log("=============================");
    };
    return ListagemProduto;
}(listagem_1.default));
exports.default = ListagemProduto;
