// 1. Guarda a CAIXA (necessário para o addEventListener funcionar)
const cepinformado = document.getElementById('CEP');

// 2. Escuta quando o usuário sai da caixa
cepinformado.addEventListener("blur", function() {
    
    // 3. Pega o VALOR exatamente no momento em que o usuário saiu do campo
    fetch(`https://viacep.com.br${cepinformado.value}/json/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// 4. Aplica estilo ao body

const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(171, 185, 150)';




