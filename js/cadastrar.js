document.querySelector("#botao-cadastrar").addEventListener("click", () => {   
    const form = document.querySelector(".form")

    // Pegar os valores dos inputs
    console.log(form)

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: form.nome,
        time: form.time,
        gols: form.gols,
        assistencias: form.assistencias,
        foto: form.foto
    } 

    salvar(jogador)

})

function salvar (jogador) {
    const jogadores = JSON.parse( localStorage.getItem("jogadores") ) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    
    window.location.href = "index.html" 
   
}