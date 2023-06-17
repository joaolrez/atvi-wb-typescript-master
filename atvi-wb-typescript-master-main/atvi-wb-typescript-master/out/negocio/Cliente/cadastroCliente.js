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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var servico_1 = __importDefault(require("../../modelo/servico"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nInício do cadastro do cliente");
        var nome = this.entrada.receberTexto("Informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Informe o nome social do cliente: ");
        var genero = this.entrada.receberTexto("Qual é o gênero? Masculino ou Feminino: ");
        var cpf = this.obterCPF();
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        this.obterRGs(cliente);
        this.obterTelefones(cliente);
        cliente.getDataCadastro.getDay();
        this.obterProdutosConsumidos(cliente);
        this.obterServicosConsumidos(cliente);
        this.clientes.push(cliente);
        console.log("\nCadastro concluído :)\n");
        return cliente;
    };
    CadastroCliente.prototype.obterCPF = function () {
        var valor = this.entrada.receberTexto("Informe o número do CPF: ");
        var data = this.entrada.receberTexto("Informe a data de emissão do CPF, no padrão dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = Number(partesData[2]);
        var mes = Number(partesData[1]);
        var dia = Number(partesData[0]);
        var dataEmissao = new Date(ano, mes, dia);
        return new cpf_1.default(valor, dataEmissao);
    };
    CadastroCliente.prototype.obterRGs = function (cliente) {
        var novo = "Sim";
        while (novo.toLowerCase() === 'sim') {
            var valor = this.entrada.receberTexto("Informe o número do RG: ");
            var data = this.entrada.receberTexto("Informe a data de emissão do RG, no padrão dd/mm/yyyy: ");
            var partesData = data.split('/');
            var ano = Number(partesData[2]);
            var mes = Number(partesData[1]);
            var dia = Number(partesData[0]);
            var dataEmissao = new Date(ano, mes, dia);
            var rg = new rg_1.default(valor, dataEmissao);
            cliente.getRgs.push(rg);
            novo = this.entrada.receberTexto("Digitar outro RG? Sim / Não ? ");
        }
    };
    CadastroCliente.prototype.obterTelefones = function (cliente) {
        console.log("Digite os telefones do cliente no padrão: DDD / Número");
        var novo = "Sim";
        while (novo.toLowerCase() === 'sim') {
            var tell = this.entrada.receberTexto("Por favor, digite o número do telefone no padrão DDD / Número: ");
            var partesTell = tell.split(' ');
            var ddd = partesTell[0];
            var numero = partesTell[1];
            var telefone = new telefone_1.default(ddd, numero);
            cliente.getTelefones.push(telefone);
            novo = this.entrada.receberTexto("Digitar outro telefone? Sim/Não ? ");
        }
    };
    CadastroCliente.prototype.obterProdutosConsumidos = function (cliente) {
        console.log("Digite os produtos consumidos no padrão: Produto A, Produto B, Produto C");
        var nome = this.entrada.receberTexto("Nome dos produtos: ");
        var sliceProdutos = nome.split(', ');
        var _loop_1 = function (nomeProduto) {
            var nomes = this_1.produtos.map(function (produto) { return produto.nome; });
            if (nomes.includes(nomeProduto)) {
                var pegarPreco = this_1.produtos
                    .filter(function (produto) { return produto.nome === nomeProduto; })
                    .map(function (produto) { return produto.preco.toString(); });
                var produtoNovo = new produto_1.default(nomeProduto, Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
            else {
                var preco = this_1.entrada.receberNumero("Defina o pre\u00E7o para \"".concat(nomeProduto, "\" R$"));
                var sliceProdutosPreco = preco.toString().split(', ');
                var produtoNovo = new produto_1.default(nomeProduto, Number(sliceProdutosPreco));
                this_1.produtos.push(produtoNovo);
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_1 = this;
        for (var _i = 0, sliceProdutos_1 = sliceProdutos; _i < sliceProdutos_1.length; _i++) {
            var nomeProduto = sliceProdutos_1[_i];
            _loop_1(nomeProduto);
        }
    };
    CadastroCliente.prototype.obterServicosConsumidos = function (cliente) {
        console.log("Digite os serviços consumidos no padrão: Serviço A, Serviço B, Serviço C");
        var nome = this.entrada.receberTexto("Nome dos serviços: ");
        var sliceServico = nome.split(', ');
        var _loop_2 = function (nomeServico) {
            var nomes = this_2.servicos.map(function (servico) { return servico.nome; });
            if (nomes.includes(nomeServico)) {
                var pegarPreco = this_2.servicos
                    .filter(function (servico) { return servico.nome === nomeServico; })
                    .map(function (servico) { return servico.preco.toString(); });
                var servicoNovo = new servico_1.default(nomeServico, Number(pegarPreco));
                cliente.getServicosConsumidos.push(servicoNovo);
            }
            else {
                var preco = this_2.entrada.receberNumero("Defina o pre\u00E7o para \"".concat(nomeServico, "\" R$"));
                var sliceServicoPreco = preco.toString().split(', ');
                var servicoNovo = new servico_1.default(nomeServico, Number(sliceServicoPreco));
                this_2.servicos.push(servicoNovo);
                cliente.getServicosConsumidos.push(servicoNovo);
            }
        };
        var this_2 = this;
        for (var _i = 0, sliceServico_1 = sliceServico; _i < sliceServico_1.length; _i++) {
            var nomeServico = sliceServico_1[_i];
            _loop_2(nomeServico);
        }
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
