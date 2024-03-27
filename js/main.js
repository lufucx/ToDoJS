function adicionarTituloTarefa() {
  var tituloTarefa = document.getElementById('titulo').value.trim();
  if (tituloTarefa === '') {
    alert("Por favor, insira o título da tarefa!");
    return;
  }


  var novoTituloTarefa = document.createElement('li');
  novoTituloTarefa.textContent = tituloTarefa;
  novoTituloTarefa.classList.add('tarefa');

  document.getElementById('lista').appendChild(novoTituloTarefa);

  document.getElementById('titulo').value = '';
}

function adicionarDescricaoTarefa() {
  var descricaoTarefa = document.getElementById('descricao').value.trim();
  if (descricaoTarefa === '') {
    alert("Por favor, insira a descrição da tarefa!");
    return;
  }

  var novaDescricaoTarefa = document.createElement('li');
  novaDescricaoTarefa.textContent = descricaoTarefa;
  novaDescricaoTarefa.classList.add('tarefa2');

  document.getElementById('lista').appendChild(novaDescricaoTarefa);

  document.getElementById('descricao').value = '';
}

document.getElementById('adicionarBtn').addEventListener('click', function () {
  adicionarTituloTarefa();
  adicionarDescricaoTarefa();
});



