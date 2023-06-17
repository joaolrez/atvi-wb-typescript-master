"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
//Cliente
var cadastroCliente_1 = __importDefault(require("../negocio/Cliente/cadastroCliente"));
var atualizarCliente_1 = __importDefault(require("../negocio/Cliente/atualizarCliente"));
var deleteCliente_1 = __importDefault(require("../negocio/Cliente/deleteCliente"));
var definido_1 = __importDefault(require("../negocio/Cliente/definido"));
var listagemClientes_1 = __importDefault(require("../negocio/Cliente/listagemClientes"));
//Produto
var cadastroProdutos_1 = __importDefault(require("../negocio/Produto/cadastroProdutos"));
var atualizarProduto_1 = __importDefault(require("../negocio/Produto/atualizarProduto"));
var deleteProduto_1 = __importDefault(require("../negocio/Produto/deleteProduto"));
var listagemProduto_1 = __importDefault(require("../negocio/Produto/listagemProduto"));
//Servços
var cadastroServico_1 = __importDefault(require("../negocio/Servico/cadastroServico"));
var atualizarServico_1 = __importDefault(require("../negocio/Servico/atualizarServico"));
var listagemServico_1 = __importDefault(require("../negocio/Servico/listagemServico"));
var deleteServico_1 = __importDefault(require("../negocio/Servico/deleteServico"));
//Listagem
var listagemGenero_1 = __importDefault(require("../negocio/Listagem/listagemGenero"));
var listagemClienteMenorQuantidade_1 = __importDefault(require("../negocio/Listagem/listagemClienteMenorQuantidade"));
var ListagemValor_1 = __importDefault(require("../negocio/Listagem/ListagemValor"));
var ListagemClienteMaisConsumidor_1 = __importDefault(require("../negocio/Listagem/ListagemClienteMaisConsumidor"));
var LMGenero_1 = __importDefault(require("../negocio/Listagem/LMGenero"));
var listagemConsumidos_1 = __importDefault(require("../negocio/Listagem/listagemConsumidos"));
console.log("Sistema do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
var cadastro = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
var cadastroProduto = new cadastroProdutos_1.default(empresa.getProdutos);
var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
var gerarClientes = new definido_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
cadastroServico.geracao();
cadastroProduto.geracao();
gerarClientes.geracao();
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("#####..WORLD BEAUTY..#####");
    console.log("1 - Cadastrar cliente ");
    console.log("2 - Listar clientes");
    console.log("3 - Atualizar cliente ");
    console.log("4 - Deletar cliente   ");
    console.log("####..PRODUTO..####");
    console.log("5 - Cadastrar produtos");
    console.log("6 - Listar produtos   ");
    console.log("7 - Atualizar produtos");
    console.log("8 - Deletar produtos  ");
    console.log("####..SERVICO..####");
    console.log("9 - Cadastrar servi\u00E7os");
    console.log("10 - Listar servi\u00E7os   ");
    console.log("11 - Atualizar servi\u00E7o");
    console.log("12 - Deletar servi\u00E7o  ");
    console.log("####..LISTAGEM..####");
    console.log("13 - Listar por g\u00EAneros");
    console.log("14 - Listar clientes com maior quantidade de consumo");
    console.log("15 - Listar clientes com menor quantidade de consumo");
    console.log("16 - Listar produtos e servi\u00E7os com maior quantidade de consumo");
    console.log("17 - Listar produtos e servi\u00E7os mais consumidos por g\u00EAnero");
    console.log("18 - Listar os clientes que mais consumiram por valor");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro_1 = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro_1.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var atualizarClientes = new atualizarCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            atualizarClientes.update();
            break;
        case 4:
            var deleteClientes = new deleteCliente_1.default(empresa.getClientes);
            deleteClientes.delete();
            break;
        case 5:
            var cadastro_produto = new cadastroProdutos_1.default(empresa.getProdutos);
            cadastro_produto.cadastrar();
            break;
        case 6:
            var listagem_produto = new listagemProduto_1.default(empresa.getProdutos);
            listagem_produto.listar();
            break;
        case 7:
            var atualizar_Produto = new atualizarProduto_1.default(empresa.getProdutos);
            atualizar_Produto.update();
            break;
        case 8:
            var delete_produto = new deleteProduto_1.default(empresa.getProdutos);
            delete_produto.delete();
            break;
        case 9:
            var cadastro_servico = new cadastroServico_1.default(empresa.getServicos);
            cadastro_servico.cadastrar();
            break;
        case 10:
            var listage_servico = new listagemServico_1.default(empresa.getServicos);
            listage_servico.listar();
            break;
        case 11:
            var atualizar_servico = new atualizarServico_1.default(empresa.getServicos);
            atualizar_servico.update();
            break;
        case 12:
            var delete_servico = new deleteServico_1.default(empresa.getServicos);
            delete_servico.delete();
        case 13:
            var listagem_genero = new listagemGenero_1.default(empresa.getClientes);
            listagem_genero.listar();
            break;
        case 14:
            var mais_consumido = new ListagemClienteMaisConsumidor_1.default(empresa.getClientes);
            mais_consumido.listar();
            break;
        case 15:
            var menos_consumido = new listagemClienteMenorQuantidade_1.default(empresa.getClientes);
            menos_consumido.listar();
            break;
        case 16:
            var psMaisConsumidos = new listagemConsumidos_1.default(empresa.getClientes);
            psMaisConsumidos.listar();
            break;
        case 17:
            var consumidoGenero = new LMGenero_1.default(empresa.getClientes);
            consumidoGenero.listar();
            break;
        case 18:
            var valorConsumido = new ListagemValor_1.default(empresa.getClientes);
            valorConsumido.listar();
            break;
        case 0:
            execucao = false;
            console.log("Adeus");
            break;
        default:
            console.log("Incorreto");
    }
}
