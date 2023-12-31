"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    function CPF(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    Object.defineProperty(CPF.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPF.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPF.prototype, "setValor", {
        set: function (valor) {
            this.valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPF.prototype, "setDataEmissao", {
        set: function (dataEmissao) {
            this.dataEmissao = dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    return CPF;
}());
exports.default = CPF;
