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
var DeleteCliente = /** @class */ (function (_super) {
    __extends(DeleteCliente, _super);
    function DeleteCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeleteCliente.prototype.delete = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
        });
        var nomeCliente = this.entrada.receberTexto("Escolha o cliente pelo nome: ");
        var clienteEncontrado = this.clientes.find(function (cliente) { return cliente.nome === nomeCliente; });
        if (!clienteEncontrado) {
            console.log("Cliente ".concat(nomeCliente, " n\u00E3o existe."));
            return;
        }
        console.log();
        console.log("Tem certeza que deseja deletar o cliente?");
        console.log("1 - Sim");
        console.log("2 - Não");
        var opcao = this.entrada.receberNumero("Digite a opção: ");
        if (opcao === 1) {
            var index = this.clientes.indexOf(clienteEncontrado);
            this.clientes.splice(index, 1);
            console.log("O cliente foi deletado.");
        }
        else {
            console.log("Operação de exclusão cancelada.");
        }
    };
    return DeleteCliente;
}(delete_1.default));
exports.default = DeleteCliente;
