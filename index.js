function ValidarLogin() {
    let Cpf = document.getElementById("cpflog");
    let strCPF = Cpf.value;
    let strSenh = document.getElementById("senlog").value
    let Soma;
    let Resto;
    Soma = 0;

    if (strSenh != 'Mygustarmario10' && strCPF != '07031397383') { alert("Senha Invalida!"); } else {

        if (strCPF == "00000000000") alert("Cpf Invalido!");

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) alert("Cpf Invalido!");

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) { alert("Cpf Invalido!"); } else {
            alert("Acesso Aprovado!");
        }
    }
}