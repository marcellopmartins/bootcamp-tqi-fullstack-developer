## atv_conta_bancaria ##
Atividade de Orientação a Objetos do Bootcamp da Dio.me

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;

Dentro de ContaBancaria, construa o getter e o setter de saldo;

Dentro de ContaBancaria, crie os métodos sacar e depositar;

Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;

Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;

Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

Testando no Navegardor:

const minhaConta = new ContaCorrente(1,1234,true)
minhaConta._saldo
minhaConta.depositar(1000)
minhaConta._saldo
minhaConta.sacar(500)
minhaConta.sacar(600)
 
const  contaPoup = new ContaPoupanca(1,345)
contaPoup._saldo
contaPoup.depositar(1000)
contaPoup._saldo
contaPoup.sacar(500)
contaPoup.sacar(600)

const  contaUni = new ContaUniversitaria(1,345)
contaUni._saldo
contaUni.depositar(1000)
contaUni._saldo
contaUni.sacar(800)
contaUni.sacar(600)
