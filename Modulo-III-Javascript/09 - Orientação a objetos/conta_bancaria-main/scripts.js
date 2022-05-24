class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo; // studing more get & set
    }

    set saldo(valor) {
        this._saldo = valor; // studing more get & set
                             
    }
    
    sacar(valor) {
        if(valor > this._saldo) {
            return 'operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

//classe filha

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero); // stunding more Super()
        this.tipo = 'corrente';
        this._cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super (agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) { 
        if(valor > 500) {
            return 'operação negada';
        }
        this._saldo = this._saldo - valor;
    }
}