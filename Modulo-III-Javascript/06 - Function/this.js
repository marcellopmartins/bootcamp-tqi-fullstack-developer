const pessoa1 = {
		nome: 'João',
		idade: 45,		
};

const pessoa2 = {
		nome: 'Sofia',
		idade: 29,
};

    const pessoa3 = {
        nome: 'Paulo',
        idade: 16,
};

const pessoa4 = {
        nome: 'Miguel',
        idade: 32,
};



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;


}

console.log(calculaIdade.call(pessoa1, 5))
console.log(calculaIdade.apply(pessoa2, [7]))