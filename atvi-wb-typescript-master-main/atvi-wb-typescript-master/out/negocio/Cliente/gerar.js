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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var servico_1 = __importDefault(require("../../modelo/servico"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var gerar_1 = __importDefault(require("../gerar"));
var GeracaoDeCliente = /** @class */ (function (_super) {
    __extends(GeracaoDeCliente, _super);
    function GeracaoDeCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    GeracaoDeCliente.prototype.geracao = function () {
        var nome = "Dienifer Santos Rezende Seraggi";
        var nomeSocial = " ";
        var genero = "Feminino";
        var valor = "060.720.049-19";
        var date = new Date();
        date.getDate();
        var cpf = new cpf_1.default(valor, date);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "37.777.331-9";
        var rg = new rg_1.default(valor, date);
        var ddd = "12";
        var numero = "991853211";
        var telefone = new telefone_1.default(ddd, numero);
        var produtos = [
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
        ];
        var sliceProdutos = produtos.slice();
        var _loop_1 = function (index) {
            var nomes = this_1.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_1.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_1 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_1(index);
        }
        //
        var servico = [
            "Corte de cabelo",
            "Pintura de cabelo",
            "Micropigmentação",
            "Manicure",
            "Pedicure",
        ];
        var sliceServico = servico.slice();
        var _loop_2 = function (index) {
            var nomes = this_2.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_2.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_2 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_2(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Fausto Vera";
        nomeSocial = " ";
        genero = "Masculino";
        valor = "123.456.789-42";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "83.349.411-9";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "99183273245";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Hidratante",
            "Sabonete"
        ];
        sliceProdutos = produtos.slice();
        var _loop_3 = function (index) {
            var nomes = this_3.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_3.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_3 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_3(index);
        }
        servico = [
            "Corte de barba"
        ];
        sliceServico = servico.slice();
        var _loop_4 = function (index) {
            var nomes = this_4.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_4.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_4 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_4(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Roger Guedes";
        nomeSocial = "Calvo";
        genero = "Masculino";
        valor = "123.843.283-94";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "12.345.571-9";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991857233";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Hidratante",
            "Sabonete",
            "Sabonete Liquido",
            "Shampoo",
            "Desodorante",
            "Cotonete",
            "Prestobarba"
        ];
        sliceProdutos = produtos.slice();
        var _loop_5 = function (index) {
            var nomes = this_5.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_5.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_5 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_5(index);
        }
        servico = [
            "Corte de cabelo",
            "Pintura"
        ];
        sliceServico = servico.slice();
        var _loop_6 = function (index) {
            var nomes = this_6.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_6.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_6 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_6(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Thiago Santos";
        nomeSocial = "Thiaguinho";
        genero = "Masculino";
        valor = "476.364.555-55";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "43.123.548-9";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991857232";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Prestobarba",
            "Lixa",
            "Matizante"
        ];
        sliceProdutos = produtos.slice();
        var _loop_7 = function (index) {
            var nomes = this_7.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_7.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_7 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_7(index);
        }
        servico = [
            "Pintura",
            "Corte de Cabelo"
        ];
        sliceServico = servico.slice();
        var _loop_8 = function (index) {
            var nomes = this_8.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_8.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_8 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_8(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Olivia Rodrigo";
        nomeSocial = " ";
        genero = "Feminino";
        valor = "843.918.843-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "87.438.923-1";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991853678";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Sabonete Liquido",
            "Condicionador",
            "Shampoo",
            "Lenços",
            "Lixa",
            "Cilios",
            "Batom"
        ];
        sliceProdutos = produtos.slice();
        var _loop_9 = function (index) {
            var nomes = this_9.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_9.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_9 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_9(index);
        }
        servico = [
            "Manicure",
            "Pedicure",
            "Hidratação"
        ];
        sliceServico = servico.slice();
        var _loop_10 = function (index) {
            var nomes = this_10.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_10.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_10 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_10(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Matheus Araujo";
        nomeSocial = " ";
        genero = "Masculino";
        valor = "382.489.234-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "93.123.948-1";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991853612";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Matizante",
            "Sabonete",
            "Batom",
            "Lenços",
            "Creme de barbear",
            "Perfume"
        ];
        sliceProdutos = produtos.slice();
        var _loop_11 = function (index) {
            var nomes = this_11.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_11.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_11 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_11(index);
        }
        servico = [
            "Corte de cabelo",
            "Pintura"
        ];
        sliceServico = servico.slice();
        var _loop_12 = function (index) {
            var nomes = this_12.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_12.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_12 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_12(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Nino Paraiba";
        nomeSocial = "Nino";
        genero = "Masculino";
        valor = "341.598.283-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "11.483.928-1";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "997627719";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Lixa",
            "Sabonete",
            "Matizante",
            "Delineador",
            "Creme Dental",
            "Fio Dental",
            "Esmalte"
        ];
        sliceProdutos = produtos.slice();
        var _loop_13 = function (index) {
            var nomes = this_13.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_13.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_13 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_13(index);
        }
        servico = [
            "Corte de barba",
            "Corte de cabelo",
            "Tratamento para rugas"
        ];
        sliceServico = servico.slice();
        var _loop_14 = function (index) {
            var nomes = this_14.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_14.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_14 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_14(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Alessandra Nascimento Goes Negrini";
        nomeSocial = " ";
        genero = "Feminino";
        valor = "382.812.192-84";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "32.382.392-6";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991330033";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Matizante",
            "Sabonete",
            "Sabonete Liquido",
            "Lenços",
            "Fio Dental",
            "Creme Dental",
            "Desodorante"
        ];
        sliceProdutos = produtos.slice();
        var _loop_15 = function (index) {
            var nomes = this_15.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_15.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_15 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_15(index);
        }
        servico = [
            "Micropigmentação",
            "Manicure",
            "Pedicure"
        ];
        sliceServico = servico.slice();
        var _loop_16 = function (index) {
            var nomes = this_16.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_16.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_16 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_16(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Isabel Amarilla";
        nomeSocial = "Amarilla";
        genero = "Feminino";
        valor = "402.139.932-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "11.384.883-2";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991847263";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Lixa",
            "Escova de dente",
            "Base",
            "Cilios",
            "Delineador"
        ];
        sliceProdutos = produtos.slice();
        var _loop_17 = function (index) {
            var nomes = this_17.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_17.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_17 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_17(index);
        }
        servico = [
            "Corte de cabelo",
        ];
        sliceServico = servico.slice();
        var _loop_18 = function (index) {
            var nomes = this_18.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_18.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_18 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_18(index);
        }
        ;
        nome = "Pedro Fernandes Seraggi";
        nomeSocial = " ";
        genero = "Masculino";
        valor = "435.827.111-11";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "12.192.283-2";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991837766";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Creme Dental",
            "Fio Dental",
            "Perfume",
            "Lixa",
            "Desodorante",
            "Lenços"
        ];
        sliceProdutos = produtos.slice();
        var _loop_19 = function (index) {
            var nomes = this_19.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_19.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_19 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_19(index);
        }
        servico = [
            "Corte de cabelo",
            "Micropigmentação"
        ];
        sliceServico = servico.slice();
        var _loop_20 = function (index) {
            var nomes = this_20.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_20.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_20 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_20(index);
        }
        ;
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Cássio Ramos";
        nomeSocial = " ";
        genero = "Masculino";
        valor = "382.991.283-44";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        valor = "44.394.123-1";
        rg = new rg_1.default(valor, date);
        ddd = "12";
        numero = "991758322";
        telefone = new telefone_1.default(ddd, numero);
        produtos = [
            "Cilios",
            "Base",
            "Sabonete",
            "Desodorante",
            "Condicionador",
            "Shampoo"
        ];
        sliceProdutos = produtos.slice();
        var _loop_21 = function (index) {
            var nomes = this_21.produtos.map(function (i) { return (i.nome); });
            var pegarPreco = this_21.produtos.filter(function (produto) { return produto.nome == sliceProdutos[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_21 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_21(index);
        }
        servico = [
            "Pintura",
            "Corte de Cabelo",
            "Tratamento para rugas"
        ];
        sliceServico = servico.slice();
        var _loop_22 = function (index) {
            var nomes = this_22.servicos.map(function (i) { return (i.nome); });
            var pegarPreco = this_22.servicos.filter(function (produto) { return produto.nome == sliceServico[index]; }).map(function (i) { return i.preco; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_22 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_22(index);
        }
        ;
    };
    ;
    return GeracaoDeCliente;
}(gerar_1.default));
exports.default = GeracaoDeCliente;
