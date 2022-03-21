const botaoAdicionar = document.querySelector('.adiciona_tarefa_button');
const inputTarefa = document.querySelector('.adiciona_tarefa_input');
const listaTarefas = document.querySelector('.lista_tarefas_conteudo');

function conteudoTarefa (nomeTarefa){
    var conteudo = `<li class="li_tarefa">
    <hr class="linha">
    <div class="tarefa">
        <div class="tarefa_conteudo">
            <input class="tarefa_conteudo_checkbox" type="checkbox" id="tarefaFeita" name="tarefaFeita">
            <label class="tarefa_conteudo_nome" for="tarefaFeita">${nomeTarefa}</label>
        </div>
        <button class="botao_remover"><img src="./img/trash.svg" alt="Icone de lixeira"></button>
    </div>
    <hr class="linha">
    </li>`

    listaTarefas.insertAdjacentHTML('beforeend', conteudo);

    var tarefas = document.querySelectorAll('.botao_remover');

    var botaoRemover = tarefas[tarefas.length - 1]

    botaoRemover.addEventListener('click', () => {
        removeTarefa(botaoRemover);
    })

}

function removeTarefa(botao){
    botao.parentNode.parentNode.remove();
}

function adicionaTarefa(){
    conteudoTarefa(inputTarefa.value);
}



botaoAdicionar.addEventListener('click', adicionaTarefa);
