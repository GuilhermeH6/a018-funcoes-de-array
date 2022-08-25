const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (obj) => {
    return {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
}

const corrido = (obj) => {
    return textoCorrido = `${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`
}

const imprimeObjeto = (obj, callback) => {
    const impressao = callback(obj)
    console.log(impressao)
}

imprimeObjeto(objeto, caixaAlta)
imprimeObjeto(objeto, corrido)