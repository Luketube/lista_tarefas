const botaoAdicionar = document.querySelector('.adiciona_tarefa_button');
const inputTarefa = document.querySelector('.adiciona_tarefa_input');
const listaTarefas = document.querySelector('.lista_tarefas');


function conteudoTarefa (nomeTarefa){

    var conteudo = `<hr class="linha">
    <div class="tarefa">
        <div class="tarefa_conteudo">
            <input class="tarefa_conteudo_checkbox" type="checkbox" id="tarefaFeita" name="tarefaFeita">
            <label class="tarefa_conteudo_nome" for="tarefaFeita">${nomeTarefa}</label>
        </div>
        <button class="lista_tarefas_remover">Remover</button>
    </div>
    <hr class="linha">`

    listaTarefas.insertAdjacentHTML('beforeend', conteudo);

       
}

function adicionaTarefa(){
    conteudoTarefa(inputTarefa.value);
}

function pegaRemover(){
    document.querySelector('.lista_tarefas_remover');
}

botaoAdicionar.addEventListener('click', adicionaTarefa);


