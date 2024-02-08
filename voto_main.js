let respota = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log("dados do formulário: ",nome,idade,titulo)

    const cidadao = new Eleitor()
    cidadao.nome = nome 
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log("Instância do objeto:",cidadao)

    let mensagem = cidadao.verificarVoto()

    respota.innerHTML = ''
    respota.innerHTML += ` O eleitor ${cidadao.nome} <br> `
    respota.innerHTML += ` Tem ${cidadao.idade} anos de idade <br> `
    respota.innerHTML += mensagem + '<br>'
    respota.style.color = "Black"
    respota.style.fontSize = "1.4res"
})