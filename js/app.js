let amigos = [];

function adicionar() {
  let amigosIncluidos = document.getElementById("lista-amigos");
  let amigoSecreto = document.getElementById("nome-amigo").value;


  // Verifica se a pessoa já foi inserida na lista, caso não, inseri
    if(amigos.includes(amigoSecreto)){
        alert('Amigo já inserido, favor inserir sobrenome!');
        return;
    }else if (amigoSecreto == ''){ // Não deixa o campo vazio ser adicionado
        alert('Insira um nome para continuar!');
        return;
    }else {
        amigos.push(amigoSecreto);
        if (amigosIncluidos.textContent == "") {
          amigosIncluidos.textContent = amigoSecreto;
        } else {
          amigosIncluidos.textContent = amigosIncluidos.textContent + ", " + amigoSecreto;
        }

    }




  document.getElementById("nome-amigo").value = "";
}

// Sortear os amigos
function sortear() {

    // Controle de quantas pessoas serão sorteadas, exigindo um número minímo
    if(amigos.length < 4){ 
        alert('Insira pelo menos 4 amigos para continuar!'); 
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1){
            sorteio.innerHTML =  sorteio.innerHTML + amigos[i] + '--> '+amigos[0]+'<br>';
        }else{
            sorteio.innerHTML =  sorteio.innerHTML + amigos[i] + '--> '+amigos[i+1]+'<br>';

        }

    }
}


// Aleatorizar os nomes dentro do array - algoritmo Fisher-Yates
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// Botão reiniciar o sorteio
function reiniciar() {
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("nome-amigo").value = "";
  document.getElementById('lista-sorteio').innerHTML = '';

}
