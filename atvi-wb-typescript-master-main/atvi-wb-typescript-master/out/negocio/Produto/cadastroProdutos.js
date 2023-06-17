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
var produto_1 = __importDefault(require("../../modelo/produto"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nCadastre seu produto");
        var produto = this.entrada.receberTexto("Qual é o nome do produto: ");
        if (this.existeProduto(produto)) {
            console.log("".concat(produto, " j\u00E1 existe no sistema.\n"));
        }
        else {
            var preco = this.entrada.receberNumero("Qual é o preço do produto? R$");
            var novoProduto = new produto_1.default(produto, preco);
            this.produtos.push(novoProduto);
            console.log();
        }
    };
    CadastroProduto.prototype.geracao = function () {
        var produtos = [
            "Cotonete",
            "Shampoo",
            "Sabonete Líquido",
            "Sabonete",
            "Hidratante",
            "Lixa",
            "Creme Dental",
            "Fio Dental",
            "Escova de Dente",
            "Esmalte",
            "Matizante",
            "Lenços",
            "Prestobarba",
            "Creme de Barbear",
            "Desodorante",
            "Perfume",
            "Base",
            "Batom",
            "Delineador",
            "Cílios"
        ];
        var precos = [
            50.00,
            40.00,
            20.00,
            15.00,
            50.00,
            10.00,
            15.00,
            10.00,
            15.00,
            20.00,
            60.00,
            25.00,
            20.00,
            25.00,
            15.00,
            90.00,
            99.99,
            35.00,
            15.00,
            15.00
        ];
        for (var i = 0; i < produtos.length; i++) {
            var novoProduto = new produto_1.default(produtos[i], precos[i]);
            this.produtos.push(novoProduto);
        }
    };
    CadastroProduto.prototype.existeProduto = function (nome) {
        return this.produtos.some(function (produto) { return produto.nome === nome; });
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
