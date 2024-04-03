document.getElementById('adicionarBtn').addEventListener('click', function () {
  adicionarTarefa();
});

function adicionarTarefa() {
document.getElementById('adicionarBtn').addEventListener('click', function () {
  adicionarTarefa();
});

function adicionarTarefa() {
  var tituloTarefa = document.getElementById('titulo').value.trim();
  var descricaoTarefa = document.getElementById('descricao').value.trim();

  var descricaoTarefa = document.getElementById('descricao').value.trim();

  if (tituloTarefa === '') {
    alert("Por favor, insira o título da tarefa!");
    return;
  }

  if (descricaoTarefa === '') {
    alert("Por favor, insira a descrição da tarefa!");
    return;
  }

  var novaTarefa = document.createElement('ul');
  novaTarefa.classList.add('container-ul');

  var tituloElemento = document.createElement('li');
  tituloElemento.textContent = tituloTarefa;
  tituloElemento.classList.add('tarefa');

  var descricaoElemento = document.createElement('li');
  descricaoElemento.textContent = descricaoTarefa;
  descricaoElemento.classList.add('tarefa2');

  var editarBotao = document.createElement('button');
  editarBotao.textContent = 'Editar';
  editarBotao.addEventListener('click', function() {
    var editTitulo = document.getElementById('editTitulo');
    var editDescricao = document.getElementById('editDescricao');
    editTitulo.value = tituloTarefa;
    editDescricao.value = descricaoTarefa;

    var modal = document.getElementById('modalEditar');
    modal.style.display = "block";

    document.getElementById('salvarEdicao').onclick = function() {
      var novoTitulo = editTitulo.value.trim();
      var novaDescricao = editDescricao.value.trim();

      if (novoTitulo === '' || novaDescricao === '') {
        alert("Por favor, preencha todos os campos antes de salvar.");
        return;
      }

      tituloTarefa = novoTitulo;
      descricaoTarefa = novaDescricao;
      tituloElemento.textContent = tituloTarefa;
      descricaoElemento.textContent = descricaoTarefa;
      modal.style.display = "none";
    };
  });
  editarBotao.classList.add('editar');

  var deletarBotao = document.createElement('button');
  deletarBotao.textContent = 'Deletar';
  deletarBotao.addEventListener('click', function() {
    novaTarefa.remove();
  });
  deletarBotao.classList.add('deletar');

  var riscado = false;

  var riscarBotao = document.createElement('button');
  riscarBotao.textContent = 'Riscar';
  riscarBotao.addEventListener('click', function() {
    if (riscado) {
      
      tituloElemento.style.textDecoration = '';
      descricaoElemento.style.textDecoration = '';
      riscado = false; 
      riscarBotao.classList.remove('active'); 
    } else {
      
      tituloElemento.style.textDecoration = 'line-through';
      descricaoElemento.style.textDecoration = 'line-through';
      riscado = true;
      riscarBotao.classList.add('active'); 
    }
  });
  riscarBotao.classList.add('riscar');

  novaTarefa.appendChild(tituloElemento);
  novaTarefa.appendChild(descricaoElemento);
  novaTarefa.appendChild(editarBotao);
  novaTarefa.appendChild(deletarBotao);
  novaTarefa.appendChild(riscarBotao);

  document.getElementById('lista').appendChild(novaTarefa);

  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
}


document.getElementsByClassName("close")[0].onclick = function() {
  var modal = document.getElementById('modalEditar');
  modal.style.display = "none";
};


window.onclick = function(event) {
  var modal = document.getElementById('modalEditar');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
