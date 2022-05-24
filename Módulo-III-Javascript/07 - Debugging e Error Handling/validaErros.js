function validaArray(arr, num) {
    try{
        // validar se parâmetros foram enviados
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        // validar tipo do Array que deve ser Object
        if(typeof arr != 'object') throw TypeError("O Array precisa ser do tipo object");

        // validar se o parâmetro número é do tipo Number
        if(typeof num != 'number') throw TypeError("O num precisa ser do tipo Number");

        // validar se o tamanho do Array é igual ao parâmetro número
        if(arr.length != num) throw RangeError("Tamanho inválido");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message); // ou usar console.log(e.name) ou console.log(e.stack) ouconsole.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Erro do tipo TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Erro do tipo RangeError");
            console.log(e.message);
        } else {
            console.log("Novo erro não validado ainda: " + e)
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }
    }
}
// Para testar modifique os valores dos parâmetros da chamada da função validaArray
console.log(validaArray([1,2,3,4],5));