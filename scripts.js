// 1. Guarda a CAIXA (necessário para o addEventListener funcionar) e guarda a quantidade do CEP
const cepinformado = document.getElementById('CEP');
const tamanhodocep = 8

// 2. Escuta quando o usuário sai da caixa e condiciona no caso do usuário errar o CEP ou ele vir inexistente
cepinformado.addEventListener("blur", function() {
    if(cepinformado.length != tamanhodocep) {
        alert('Coloque exatamente o número de 08 dígitos no CEP.')
    }
    else {
        fetch(`https://viacep.com.br/ws/${cepinformado.value}/json/`)
        .then(response => response.json())
        .then(data => {if (data.erro) {
            alert('CEP não encontrado!')
        }
        else {
            console.log(data)
        }
        })
        .catch(error => console.error('Erro na requisição:', error));
}});

// 3. Aplica estilo ao body

const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(171, 185, 150)';




