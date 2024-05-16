document.querySelector("#botao-cadastrar").addEventListener("click", () => {   
    // Pegar os valores dos inputs
    const nome = document.querySelector('#nome')
    const time = document.querySelector('#time')
    const gols = document.querySelector('#gols')
    const assistencias = document.querySelector('#assistencias')
    const foto = document.querySelector('#foto')

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: nome.value,
        time: time.value,
        gols: gols.value,
        assistencias: assistencias.value,
        foto: foto.value
    } 

    salvar(jogador)

})

function salvar (jogador) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    
    window.location.href = "index.html" 
   
}