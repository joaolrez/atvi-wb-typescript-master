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
var delete_1 = __importDefault(require("../delete"));
var DeleteProduto = /** @class */ (function (_super) {
    __extends(DeleteProduto, _super);
    function DeleteProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeleteProduto.prototype.delete = function () {
        console.log("\nLista de todos os Produtos");
        this.exibirProdutos();
        console.log();
        var entrada = this.entrada.receberTexto("Nome do produto que deseja deletar: ");
        var indexProduto = this.produtos.findIndex(function (produto) { return produto.nome === entrada; });
        if (indexProduto === -1) {
            console.log("Produto ".concat(entrada, " n\u00E3o encontrado"));
        }
        else {
            console.log();
            console.log("Tem certeza que deseja deletar o produto?");
            console.log("1 - Sim");
            console.log("2 - Não");
            var valor = this.entrada.receberNumero("Digite a opção: ");
            if (valor === 1) {
                this.produtos.splice(indexProduto, 1);
                console.log("Produto deletado com sucesso");
            }
            else {
                console.log("Operação cancelada");
            }
        }
    };
    DeleteProduto.prototype.exibirProdutos = function () {
        this.produtos.forEach(function (produto) {
            console.log("Produto: ".concat(produto.nome));
        });
    };
    return DeleteProduto;
}(delete_1.default));
exports.default = DeleteProduto;
