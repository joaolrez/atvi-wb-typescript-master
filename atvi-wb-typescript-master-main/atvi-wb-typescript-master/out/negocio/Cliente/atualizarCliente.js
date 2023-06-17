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
var UpdateCliente = /** @class */ (function (_super) {
    __extends(UpdateCliente, _super);
    function UpdateCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateCliente.prototype.update = function () {
        console.log("\nLista de todos os clientes:");
        this.listarClientes();
        var nomeCliente = this.entrada.receberTexto("Escolha qual cliente escrevendo o nome: ");
        var indexCliente = this.encontrarCliente(nomeCliente);
        if (indexCliente === -1) {
            console.log("Cliente \"".concat(nomeCliente, "\" n\u00E3o existe"));
        }
        else {
            this.editarCliente(indexCliente);
        }
    };
    UpdateCliente.prototype.listarClientes = function () {
        this.clientes.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
        });
    };
    UpdateCliente.prototype.encontrarCliente = function (nome) {
        return this.clientes.findIndex(function (cliente) { return cliente.nome === nome; });
    };
    UpdateCliente.prototype.editarCliente = function (index) {
        var loop = true;
        while (loop) {
            console.log("1 - Editar nome");
            console.log("2 - Editar nome Social");
            console.log("3 - Editar CPF");
            console.log("4 - Editar RG");
            console.log("5 - Editar Telefone");
            console.log("0 - Sair");
            console.log();
            var entradaOption = this.entrada.receberNumero("Digite o número desejado: ");
            switch (entradaOption) {
                case 1:
                    var novoNome = this.entrada.receberTexto("Digite o novo nome: ");
                    this.clientes[index].nome = novoNome;
                    loop = false;
                    console.log("Nome Atualizado");
                    console.log();
                    break;
                case 2:
                    var novoNomeSocial = this.entrada.receberTexto("Digite o novo nome Social: ");
                    this.clientes[index].nomeSocial = novoNomeSocial;
                    console.log("Nome Social Atualizado");
                    console.log();
                    break;
                case 3:
                    this.editarCPF(index);
                    break;
                case 4:
                    this.editarRG(index);
                    break;
                case 5:
                    this.editarTelefone(index);
                    break;
                case 0:
                    loop = false;
                    break;
                default:
                    console.log("Comando não encontrado");
            }
        }
    };
    UpdateCliente.prototype.editarCPF = function (index) {
        var cpfLoop = true;
        while (cpfLoop) {
            console.log("1 - Editar CPF");
            console.log("2 - Editar Data de Emissão do CPF");
            console.log("0 - Sair");
            var receberCPF = this.entrada.receberNumero("Digite a opção: ");
            switch (receberCPF) {
                case 1:
                    var novoCPF = this.entrada.receberTexto("Digite o novo CPF: ");
                    this.clientes[index].getCpf.setValor = novoCPF;
                    break;
                case 2:
                    var novaData = this.entrada.receberTexto("Informe a data de emissão do CPF, no padrão dd/mm/yyyy: ");
                    var partesData = novaData.split("/");
                    var ano = parseInt(partesData[2], 10);
                    var mes = parseInt(partesData[1], 10);
                    var dia = parseInt(partesData[0], 10);
                    var dataEmissao = new Date(ano, mes - 1, dia);
                    this.clientes[index].getCpf.setDataEmissao = dataEmissao;
                    break;
                case 0:
                    cpfLoop = false;
                    break;
                default:
                    console.log("Valor não encontrado");
            }
        }
    };
    UpdateCliente.prototype.editarRG = function (index) {
        console.log("RGS existentes: ");
        this.clientes[index].getRgs.forEach(function (rg, rgIndex) {
            console.log("\u00CDndice ".concat(rgIndex, " - ").concat(rg.getValor, " - ").concat(rg.getDataEmissao.toLocaleDateString()));
            console.log();
        });
        var rgLoop = true;
        while (rgLoop) {
            console.log("1 - Editar RG");
            console.log("2 - Editar Data de Emissão do RG");
            console.log("0 - Sair");
            var rgEntrada = this.entrada.receberNumero("Escolha a opção: ");
            switch (rgEntrada) {
                case 1:
                    var rgLoopEscolhido = true;
                    while (rgLoopEscolhido) {
                        console.log("-1 - Sair");
                        var rgIndice = this.entrada.receberNumero("Escolha o RG pelo índice: ");
                        if (rgIndice === -1) {
                            rgLoopEscolhido = false;
                            break;
                        }
                        var novoRG = this.entrada.receberTexto("Digite o novo RG: ");
                        this.clientes[index].getRgs[rgIndice].setValor = novoRG;
                    }
                    break;
                case 2:
                    var rgLoopData = true;
                    while (rgLoopData) {
                        console.log("-1 - Sair");
                        var rgIndice = this.entrada.receberNumero("Escolha o RG pelo índice: ");
                        if (rgIndice === -1) {
                            rgLoopData = false;
                            break;
                        }
                        var novaData = this.entrada.receberTexto("Informe a data de emissão do RG, no padrão dd/mm/yyyy: ");
                        var partesData = novaData.split("/");
                        var ano = parseInt(partesData[2], 10);
                        var mes = parseInt(partesData[1], 10);
                        var dia = parseInt(partesData[0], 10);
                        var dataEmissao = new Date(ano, mes - 1, dia);
                        this.clientes[index].getRgs[rgIndice].setDataEmissao = dataEmissao;
                    }
                    break;
                case 0:
                    rgLoop = false;
                    break;
                default:
                    console.log("Valor não encontrado");
            }
        }
    };
    UpdateCliente.prototype.editarTelefone = function (index) {
        this.clientes[index].getTelefones.forEach(function (telefone, telefoneIndex) {
            console.log("\u00CDndice ".concat(telefoneIndex, " - ").concat(telefone.getDdd, " ").concat(telefone.getNumero));
            console.log();
        });
        var telefoneLoop = true;
        while (telefoneLoop) {
            console.log("-1 - Sair");
            var telefoneIndice = this.entrada.receberNumero("Digite o índice do Telefone: ");
            if (telefoneIndice === -1) {
                telefoneLoop = false;
                break;
            }
            var novoTelefone = this.entrada.receberTexto("Digite o número do telefone no padrão DDD / Númeero:");
            var partesTelefone = novoTelefone.split(" ");
            var ddd = partesTelefone[0];
            var numero = partesTelefone[1];
            this.clientes[index].getTelefones[telefoneIndice].setDDD = ddd;
            this.clientes[index].getTelefones[telefoneIndice].setNumero = numero;
        }
    };
    return UpdateCliente;
}(update_1.default));
exports.default = UpdateCliente;
