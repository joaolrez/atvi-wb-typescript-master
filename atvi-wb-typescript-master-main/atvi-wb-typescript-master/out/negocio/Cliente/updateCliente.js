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
var updateCliente = /** @class */ (function (_super) {
    __extends(updateCliente, _super);
    function updateCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    updateCliente.prototype.update = function () {
        var _this = this;
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: ".concat((cliente.nome)));
        });
        var todos_clientes = this.clientes.map(function (i) { return i.nome; });
        var entrada = this.entrada.receberTexto("Escolha qual cliente escrevendo o nome:  ");
        console.log();
        var pegar_indexOF = todos_clientes.indexOf(entrada);
        var loop = true;
        if (pegar_indexOF == -1) {
            console.log("Cliente \"".concat(entrada, "\" n\u00E3o existe"));
        }
        else {
            this.clientes.map(function (i) {
                var _loop_1 = function () {
                    console.log("1 - Editar nome");
                    console.log("2 - Editar nome Social");
                    console.log("3 - Editar CPF");
                    console.log("4 - Editar RG");
                    console.log("5 - Editar Telefone");
                    console.log("0 - Sair");
                    console.log();
                    var entradaOption = _this.entrada.receberNumero("Digite o numero desejado: ");
                    switch (entradaOption) {
                        case 1:
                            var novoNome_1 = _this.entrada.receberTexto("Digite o novo nome: ");
                            _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (i) { return i.nome = novoNome_1; });
                            loop = false;
                            console.log("Nome Atualizado");
                            console.log();
                            break;
                        case 2:
                            var novoNomeSocial_1 = _this.entrada.receberTexto("Digite o novo nome: ");
                            _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (i) { return i.nomeSocial = novoNomeSocial_1; });
                            console.log("Nome Social Atualizado");
                            console.log();
                            break;
                        case 3:
                            var cpfLoop = true;
                            var _loop_2 = function () {
                                console.log("1 - CPF");
                                console.log("2 - Data de emissao");
                                console.log("0 - Sair");
                                var receberCPF = _this.entrada.receberNumero("Digite a opção: ");
                                switch (receberCPF) {
                                    case 1:
                                        var novoCPF_1 = _this.entrada.receberTexto("Digite o novo CPF");
                                        _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (i) { return i.getCpf.setValor = novoCPF_1; });
                                        break;
                                    case 2:
                                        var novaData = _this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
                                        var partesData = novaData.split('/');
                                        var ano = new Number(partesData[2].valueOf()).valueOf();
                                        var mes = new Number(partesData[1].valueOf()).valueOf();
                                        var dia = new Number(partesData[0].valueOf()).valueOf();
                                        var dataEmissao_1 = new Date(ano, mes, dia);
                                        _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (i) { return i.getCpf.setDataEmissao = dataEmissao_1; });
                                        break;
                                    case 0:
                                        cpfLoop = false;
                                        break;
                                    default:
                                        console.log("Valor não encontrado");
                                }
                            };
                            while (cpfLoop) {
                                _loop_2();
                            }
                            break;
                        case 4:
                            var rgLoop_1 = true;
                            console.log("RGS existente: ");
                            i.getRgs.map(function (i, index) {
                                console.log("Indice ".concat(index, " - ").concat(i.getValor, " - ").concat(i.getDataEmissao.toLocaleDateString()));
                                console.log();
                                while (rgLoop_1) {
                                    console.log("1 - CPF");
                                    console.log("2 - Data de emissao");
                                    console.log("0 - Sair");
                                    var rgEntrada = _this.entrada.receberNumero("Escolha a opção: ");
                                    switch (rgEntrada) {
                                        case 1:
                                            var rgLoopEscolhido = true;
                                            var _loop_3 = function () {
                                                console.log("-1 - Sair");
                                                var rgEntrada_1 = _this.entrada.receberNumero("Escolha o RG pelo indice: ");
                                                switch (rgEntrada_1) {
                                                    case index:
                                                        var novoRG_1 = _this.entrada.receberTexto("Digite o novo RG: ");
                                                        _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (r) { return r.getRgs[rgEntrada_1].setValor = novoRG_1; });
                                                        break;
                                                    case -1:
                                                        rgLoopEscolhido = false;
                                                        break;
                                                    default:
                                                        console.log("Valor não encontrado");
                                                }
                                            };
                                            while (rgLoopEscolhido) {
                                                _loop_3();
                                            }
                                            break;
                                        case 2:
                                            var rgLoopData = true;
                                            var _loop_4 = function () {
                                                console.log("-1 - Sair");
                                                var rgEntrada_2 = _this.entrada.receberNumero("Escolha o RG pelo indice: ");
                                                switch (rgEntrada_2) {
                                                    case index:
                                                        var novaData = _this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do RG, no padr\u00E3o dd/mm/yyyy: ");
                                                        var partesData = novaData.split('/');
                                                        var ano = new Number(partesData[2].valueOf()).valueOf();
                                                        var mes = new Number(partesData[1].valueOf()).valueOf();
                                                        var dia = new Number(partesData[0].valueOf()).valueOf();
                                                        var dataEmissao_2 = new Date(ano, mes, dia);
                                                        _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (r) { return r.getRgs[rgEntrada_2].setDataEmissao = dataEmissao_2; });
                                                        break;
                                                    case -1:
                                                        rgLoopData = false;
                                                        break;
                                                    default:
                                                        console.log("Valor não encontrado");
                                                }
                                            };
                                            while (rgLoopData) {
                                                _loop_4();
                                            }
                                            break;
                                        case 0:
                                            rgLoop_1 = false;
                                            break;
                                        default:
                                            console.log("Valor não encontrado");
                                    }
                                }
                            });
                            break;
                        case 5:
                            i.getTelefones.map(function (i, index) {
                                console.log("Indice ".concat(index, " - ").concat(i.getDdd, " ").concat(i.getNumero));
                                var telefone = true;
                                var _loop_5 = function () {
                                    console.log("-1 - Sair");
                                    var indices = _this.entrada.receberNumero("Digite o indice do Telefone: ");
                                    switch (indices) {
                                        case index:
                                            var tell = _this.entrada.receberTexto("Por favor digite o numero do telefone no padr\u00E3o DDD NUMERO:");
                                            var partesTell = tell.split(' ');
                                            var ddd_1 = new String(partesTell[0].valueOf()).valueOf();
                                            var numero_1 = new String(partesTell[1].valueOf()).valueOf();
                                            _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (r) { return r.getTelefones[indices].setDDD = ddd_1; });
                                            _this.clientes.filter(function (cliente) { return cliente.nome == entrada; }).map(function (r) { return r.getTelefones[indices].setNumero = numero_1; });
                                            break;
                                        case -1:
                                            telefone = false;
                                            break;
                                        default:
                                            console.log("Valor não encontrado");
                                    }
                                };
                                while (telefone) {
                                    _loop_5();
                                }
                            });
                            break;
                        case 0:
                            loop = false;
                            break;
                        default:
                            console.log("Comando não encontrado");
                    }
                };
                while (loop) {
                    _loop_1();
                }
            });
        }
    };
    return updateCliente;
}(update_1.default));
exports.default = updateCliente;
