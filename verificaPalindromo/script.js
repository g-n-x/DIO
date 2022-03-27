var resultado = document.getElementById('resultado')

function verificaPalindromo() {
    const text = prompt('Insira a palavra a ser verificada')
    if(isPalindrome1(text))
        resultado.innerHTML = 'São iguais'
    else
        resultado.innerHTML = 'Não são iguais'
}

// usando reverse
function isPalindrome1(text) {
    return(text === text.split('').reverse().join(''))
}

// sem usar reverse - usando forEach
function isPalindrome2(text) {
    let backwards = Array(text.length-1)
    
    let counter = 0
    text.split('').forEach(char => {
        backwards[counter] = text[text.length-1-counter]
        counter++
    });

    return(text === backwards.join(''))
}

// sem usar reverse - usando for loop - ===
function isPalindrome3(text) {
    let backwards = Array(text.length-1)

    for(let i = 0; i < text.length; i++) {
        backwards[i] = text[text.length - 1 - i]
    }

    return(text === backwards.join(''))
}
