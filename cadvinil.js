const cadastrar = document.getElementById("cadastrar");

function validar() {
    var nomedisco = document.getElementById("nomevinil").value;
    var nomeartista = document.getElementById("nomeartista").value;
    var erronomevinil = document.getElementById("errovinil"); 
    var vdois = nomeartista[0]+nomeartista[1];
    
    erronomevinil.textContent="";
    if (nomedisco == "") {
        erronomevinil.textContent = "Nome do disco deve ser digitado";
    }
}

cadastrar.addEventListener("click", validar);