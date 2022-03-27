// execute com node

function func(arr, num) {
    if(!arr && !num) throw new ReferenceError('Insira os parâmetros')
    if(!(arr instanceof Object)) throw new TypeError('Esperando um Array')
    if(!(typeof num === 'number')) throw new TypeError('Esperando um número')
    if(arr.length !== num) throw new RangeError('Tamanho do array não condiz com segundo parâmetro')
}

try {
    func([1, 3, 2], 3)
} catch (err) {
    console.log(err)
}
