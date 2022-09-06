function validarForm(){
    if (document.formSugestao.nome.value === ""){
        alert("Preencha o seu nome!");
        document.formSugestao.nome.focus();
        document.getElementById("nome").style.backgroundColor="red";
        return false;
    }
    else if (document.formSugestao.email.value === ""){
        alert("Preencha o seu e-mail!");
        document.formSugestao.email.focus();
        document.getElementById("email").style.backgroundColor="red";       
        return false;
    }
    else if (document.formSugestao.texto.value === ""){
        alert("Caixa de texto vazia!");
        document.formSugestao.texto.focus();
        document.getElementById("texto").style.backgroundColor="red"; 
        return false;
    }
}