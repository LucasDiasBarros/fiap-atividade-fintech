// Selecionando o ícone do olho e o saldo
const iconeOlho = document.getElementById('icone-olho');
const saldo = document.getElementById('saldo').querySelector('strong');

// Variável para controlar o estado de ocultação do saldo
let oculto = false;

// Adicionando um evento de clique ao ícone do olho
iconeOlho.addEventListener('click', function() {
    // Alternando o estado de ocultação
    oculto = !oculto;

    // Verificando se o saldo está oculto
    if (oculto) {
        // Se oculto, atualiza o ícone do olho e o texto do saldo
        iconeOlho.classList.remove('far', 'fa-eye');
        iconeOlho.classList.add('far', 'fa-eye-slash');
        saldo.textContent = '*****'; // Substitua o conteúdo pelo desejado
    } else {
        // Se não oculto, restaura o ícone do olho e o texto do saldo para o valor original
        iconeOlho.classList.remove('far', 'fa-eye-slash');
        iconeOlho.classList.add('far', 'fa-eye');
        saldo.textContent = '1.000,00'; // Altere para o valor original
    }
});
