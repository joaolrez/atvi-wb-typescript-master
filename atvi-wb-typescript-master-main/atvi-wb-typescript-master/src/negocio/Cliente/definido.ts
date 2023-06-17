import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Gerar from "../gerar"

export default class GeracaoDeCliente extends Gerar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public geracao(): void {
        let nome = "Dienifer Santos Rezende Seraggi"
        let nomeSocial = " "
        let genero = "Feminino"
        let valor = "060.720.049-19";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "37.777.331-9"
        let rg = new RG(valor, date)
        let ddd = "12"
        let numero = "991853211"
        let telefone = new Telefone(ddd, numero)
        let produtos = [
            "Bronzeador",
            "Lenços Umedecidos",
            "Descolorante",
            "Matizador",
            "Shampoo",
            "Condicionador",
            "Sabonete",
            "Sabonete Liquido",
            "Escova de dente",
            "Creme Dental",
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        let servico = [
            "Corte de cabelo",
            "Pintura de cabelo",
            "Micropigmentação",
            "Manicure",
            "Pedicure",
        
        ]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Fausto Vera"
        nomeSocial = " "
        genero = "Masculino"
        valor = "123.456.789-42";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "83.349.411-9"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "99183273245"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Hidratante",
            "Sabonete"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de barba"

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Roger Guedes"
        nomeSocial = "Calvo"
        genero = "Masculino"
        valor = "123.843.283-94";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.571-9"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991857233"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Hidratante",
            "Sabonete",
            "Sabonete Liquido",
            "Shampoo",
            "Desodorante",
            "Cotonete",
            "Prestobarba"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Pintura"

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Thiago Santos"
        nomeSocial = "Thiaguinho"
        genero = "Masculino"
        valor = "476.364.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "43.123.548-9"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991857232"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Prestobarba",
            "Lixa",
            "Matizante"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Pintura",
            "Corte de Cabelo"

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Olivia Rodrigo"
        nomeSocial = " "
        genero = "Feminino"
        valor = "843.918.843-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "87.438.923-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991853678"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Sabonete Liquido",
            "Condicionador",
            "Shampoo",
            "Lenços",
            "Lixa",
            "Cilios",
            "Batom"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Manicure",
            "Pedicure",
            "Hidratação"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Matheus Araujo"
        nomeSocial = " "
        genero = "Masculino"
        valor = "382.489.234-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "93.123.948-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991853612"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Matizante",
            "Sabonete",
            "Batom",
            "Lenços",
            "Creme de barbear",
            "Perfume"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Pintura"

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Nino Paraiba"
        nomeSocial = "Nino"
        genero = "Masculino"
        valor = "341.598.283-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "11.483.928-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "997627719"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Lixa",
            "Sabonete",
            "Matizante",
            "Delineador",
            "Creme Dental",
            "Fio Dental",
            "Esmalte"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de barba",
            "Corte de cabelo",
            "Tratamento para rugas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Alessandra Nascimento Goes Negrini"
        nomeSocial = " "
        genero = "Feminino"
        valor = "382.812.192-84";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "32.382.392-6"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991330033"
        telefone = new Telefone(ddd, numero)

        produtos = [
            "Matizante",
            "Sabonete",
            "Sabonete Liquido",
            "Lenços",
            "Fio Dental",
            "Creme Dental",
            "Desodorante"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Micropigmentação",
            "Manicure",
            "Pedicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Isabel Amarilla"
        nomeSocial = "Amarilla"
        genero = "Feminino"
        valor = "402.139.932-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "11.384.883-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991847263"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Lixa",
            "Escova de dente",
            "Base",
            "Cilios",
            "Delineador"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        nome = "Pedro Fernandes Seraggi"
        nomeSocial = " "
        genero = "Masculino"
        valor = "435.827.111-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.192.283-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991837766"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Creme Dental",
            "Fio Dental",
            "Perfume",
            "Lixa",
            "Desodorante",
            "Lenços"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Micropigmentação"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Cássio Ramos"
        nomeSocial = " "
        genero = "Masculino"
        valor = "382.991.283-44";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "44.394.123-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991758322"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Cilios",
            "Base",
            "Sabonete",
            "Desodorante",
            "Condicionador",
            "Shampoo"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Pintura",
            "Corte de Cabelo",
            "Tratamento para rugas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        };
    }

