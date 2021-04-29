const botaoFormulario = document.getElementById('btn-enviar')

const nomeFormulario = document.getElementById('nome-formulario')
const telefoneFormulario = document.getElementById('telefone-formulario')
const emailFormulario = document.getElementById('email-telefone')

const formulario = document.getElementById('formulario')

botaoFormulario.addEventListener('click', (e) =>{
    let conteudoEmailFormulario = emailFormulario.value

    let preenchido = false
    if(nomeFormulario.value != "" && telefoneFormulario.value != "" && emailFormulario.value != ""){
        preenchido = true
    }

    if(conteudoEmailFormulario.indexOf('@') >= 1 && preenchido){
        formulario.submit()
    }else{
        alert('Algum campo não foi preenchido ou não foi preenchido corretamente.')
    }
})