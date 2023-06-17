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
var DeleteServico = /** @class */ (function (_super) {
    __extends(DeleteServico, _super);
    function DeleteServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeleteServico.prototype.delete = function () {
        console.log("Lista de todos os Serviços");
        this.exibirServicos();
        var nomeServico = this.entrada.receberTexto("Nome do serviço que deseja deletar: ");
        var indexServico = this.encontrarIndexServico(nomeServico);
        if (indexServico === -1) {
            console.log("Servi\u00E7o ".concat(nomeServico, " n\u00E3o encontrado."));
        }
        else {
            var execucao = true;
            while (execucao) {
                console.log();
                console.log("Tem certeza que deseja deletar o serviço?");
                console.log("1 - Sim");
                console.log("2 - Não");
                var opcao = this.entrada.receberNumero("Digite a opção: ");
                switch (opcao) {
                    case 1:
                        this.servicos.splice(indexServico, 1);
                        console.log("Serviço deletado com sucesso.");
                        execucao = false;
                        break;
                    case 2:
                        execucao = false;
                        break;
                    default:
                        console.log("Opção não existente.");
                        break;
                }
            }
        }
    };
    DeleteServico.prototype.exibirServicos = function () {
        this.servicos.forEach(function (servico) {
            console.log("Servi\u00E7o: ".concat(servico.nome));
        });
    };
    DeleteServico.prototype.encontrarIndexServico = function (nome) {
        return this.servicos.findIndex(function (servico) { return servico.nome === nome; });
    };
    return DeleteServico;
}(delete_1.default));
exports.default = DeleteServico;
