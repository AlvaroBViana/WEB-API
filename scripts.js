// 1. Guarda os valores do HTML;
const cepinformado = document.getElementById('CEP');
const campoEndereco = document.getElementById('address')
const campoCidade = document.getElementById('city');
const campoEstado = document.getElementById('states');
const campoUF = document.getElementById('UF')


// 2. Escuta quando o usuário sai da caixa e condiciona no caso do usuário errar o CEP ou ele não existir
cepinformado.addEventListener("blur", function() {
    if(cepinformado.value.length != 8) {
        alert('Coloque exatamente o número de 08 dígitos no CEP (sem hífens ou traços).')
    }
    else {
        fetch(`https://viacep.com.br/ws/${cepinformado.value}/json/`)
        .then(response => response.json())
        .then(data => {if (data.erro) {
            alert('CEP não encontrado!')
        }
        else {
            console.log(data)
            campoEndereco.value = data.logradouro;
            campoCidade.value = data.localidade;
            campoEstado.value = data.estado;
            campoUF.value = data.uf;
            
            //2.1. Deve-se armazenar as informações do objeto JSON e salvá-las no localStorage
            localStorage.setItem("dadosCep", JSON.stringify(data))
        }
        })
        .catch(error => console.error('Erro na requisição:', error));
}});

//3. Criar um ouvinte de evento ao carregar a página e executar em seguida os dados que ficaram salvos
    document.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("dadosCep"))
        
        if (dadosSalvos) {
            cepinformado.value = dadosSalvos.cep || '';
            campoEndereco.value = dadosSalvos.logradouro || '';
            campoCidade.value = dadosSalvos.localidade || '';
            campoEstado.value = dadosSalvos.estado || '';
            campoUF.value = dadosSalvos.uf || '';
        }
    }
    )
    









