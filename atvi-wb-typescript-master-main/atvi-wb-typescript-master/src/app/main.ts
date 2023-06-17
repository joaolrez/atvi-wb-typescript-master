import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
//Cliente
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import atualizarCliente from "../negocio/Cliente/atualizarCliente";
import deleteCliente from "../negocio/Cliente/deleteCliente";
import GeracaoDeCliente from "../negocio/Cliente/definido"
import ListagemClientes from "../negocio/Cliente/listagemClientes";
//Produto
import CadastroProduto from "../negocio/Produto/cadastroProdutos";
import atualizarProduto from "../negocio/Produto/atualizarProduto";
import deleteProduto from "../negocio/Produto/deleteProduto";
import ListagemProduto from "../negocio/Produto/listagemProduto";
//Servços
import CadastroServico from "../negocio/Servico/cadastroServico";
import atualizarServico from "../negocio/Servico/atualizarServico";
import ListagemServico from "../negocio/Servico/listagemServico";
import deleteServico from "../negocio/Servico/deleteServico";
//Listagem
import ListagemGenero from "../negocio/Listagem/listagemGenero";
import ListagemMenosQuantidade from "../negocio/Listagem/listagemClienteMenosConsumidor"
import listagemClienteValor from "../negocio/Listagem/listagemMaisValor"
import ListagemQuantidade from "../negocio/Listagem/listagemClienteMaisConsumidor";
import psGenero from "../negocio/Listagem/listagemConsumidoGenero"
import psConsumidos from "../negocio/Listagem/listagemTudoConsumidos";

console.log(`Sistema do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new GeracaoDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.geracao();
cadastroProduto.geracao();
gerarClientes.geracao();
while (execucao) {
    console.log(`Opções:`);
    console.log(`#####..WORLD BEAUTY..#####`);
    console.log(`1 - Cadastrar cliente `);
    console.log(`2 - Listar clientes`);
    console.log(`3 - Atualizar cliente `);
    console.log(`4 - Deletar cliente   `);
    console.log(`####..PRODUTO..####`);
    console.log(`5 - Cadastrar produtos`);
    console.log(`6 - Listar produtos   `);
    console.log(`7 - Atualizar produtos`);
    console.log(`8 - Deletar produtos  `);
    console.log(`####..SERVICO..####`);
    console.log(`9 - Cadastrar serviços`);
    console.log(`10 - Listar serviços   `);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Deletar serviço  `);
    console.log(`####..LISTAGEM..####`);
    console.log(`13 - Listar por gêneros`);
    console.log(`14 - Listar clientes com maior quantidade de consumo`);
    console.log(`15 - Listar clientes com menor quantidade de consumo`);
    console.log(`16 - Listar produtos e serviços com maior quantidade de consumo`);
    console.log(`17 - Listar produtos e serviços mais consumidos por gênero`);
    console.log(`18 - Listar os clientes que mais consumiram por valor`);
    console.log(`0 - Sair`);
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let atualizarClientes = new atualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            atualizarClientes.update()
            break
        case 4:
            let deleteClientes = new deleteCliente(empresa.getClientes)
            deleteClientes.delete()
            break
        case 5:
            let cadastro_produto = new CadastroProduto(empresa.getProdutos)
            cadastro_produto.cadastrar();
            break;
        case 6:
            let listagem_produto = new ListagemProduto(empresa.getProdutos);
            listagem_produto.listar();
            break;
        case 7:
            let atualizar_Produto = new atualizarProduto(empresa.getProdutos)
            atualizar_Produto.update()

            break
        case 8:
            let delete_produto = new deleteProduto(empresa.getProdutos)
            delete_produto.delete()
            break
        case 9:
            let cadastro_servico = new CadastroServico(empresa.getServicos);
            cadastro_servico.cadastrar();
            break
        case 10:
            let listage_servico = new ListagemServico(empresa.getServicos);
            listage_servico.listar();
            break
        case 11:
            let atualizar_servico = new atualizarServico(empresa.getServicos)
            atualizar_servico.update()
            break
        case 12:
            let delete_servico = new deleteServico(empresa.getServicos)
            delete_servico.delete()
        case 13:
            let listagem_genero = new ListagemGenero(empresa.getClientes);
            listagem_genero.listar();
            break
        case 14:
            let mais_consumido = new ListagemQuantidade(empresa.getClientes)
            mais_consumido.listar()
            break
        case 15:
            let menos_consumido = new ListagemMenosQuantidade(empresa.getClientes)
            menos_consumido.listar()
            break
        case 16:
            let psMaisConsumidos = new psConsumidos(empresa.getClientes)
            psMaisConsumidos.listar()
            break
        case 17:
            let consumidoGenero = new psGenero(empresa.getClientes)
            consumidoGenero.listar()
            break
        case 18:
            let valorConsumido = new listagemClienteValor(empresa.getClientes)
            valorConsumido.listar()
            break;
        case 0:
            execucao = false
            console.log(`Adeus`)
            break;
        default:
            console.log(`Incorreto`)
    }
}