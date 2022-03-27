var resultado = document.getElementById('resultado')

// usando reverse
function verificaPalindromo() {
    const text = prompt('Insira a palavra a ser verificada')
    const backwards = text.split('').reverse().join('')
    
    if(text == backwards)
        resultado.innerHTML = 'São iguais'
    else
        resultado.innerHTML = 'Não são iguais' 
}

// sem usar reverse - usando forEach
function verificaPalindromo2() {
    const text = prompt('Insira a palavra a ser verificada')

    let backwards = Array(text.length-1)
    
    let counter = 0
    text.split('').forEach(char => {
        backwards[counter] = text[text.length-1-counter]
        counter++
    });

    backwards = backwards.join('')

    if(text == backwards)
        resultado.innerHTML = 'São iguais'
    else
        resultado.innerHTML = 'Não são iguais'
}

// sem usar reverse - usando for loop - ===
function verificaPalindromo3() {
    const text = prompt('Insira a palavra a ser verificada')
    let backwards = Array(text.length-1)

    for(let i = 0; i < text.length; i++) {
        backwards[i] = text[text.length - 1 - i]
    }

    if(text === backwards.join(''))
        resultado.innerHTML = 'São iguais'
    else
        resultado.innerHTML = 'Não são iguais'
}
