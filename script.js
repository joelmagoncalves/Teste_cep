const input_cep = document.getElementById('cep');
const input_rua = document.getElementById('rua');
const input_bairro = document.getElementById('bairro');
const input_cidade = document.getElementById('cidade');
const input_estado = document.getElementById('estado');

input_cep.addEventListener('blur', () => {
    let cep = input_cep.value;
    if (cep.length !== 8) {

        return;

    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {
            input_rua.value = json.logradouro;
            input_bairro.value = json.bairro;
            input_cidade.value = json.localidade;
            input_estado.value = json.uf;
        })

})
function validacep() {
    const cep = input_cep.value;

    if (cep === '33130250' || cep === '35900393' || cep === '30130003') {
        window.open('casas.html', '_blank');
    } else {
        alert('Não temos imoveis no CEP digitado!');
    }
}
