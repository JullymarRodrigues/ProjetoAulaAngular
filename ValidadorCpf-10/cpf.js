function validarCPF() {
    const cpf = document.getElementById('cpf').value;
    let soma = 0;
    let resto;

    if (cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) {
        document.getElementById('resultado').innerHTML = 'CPF inválido';
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
        document.getElementById('resultado').innerHTML = 'CPF inválido';
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(10, 11))) {
        document.getElementById('resultado').innerHTML = 'CPF inválido';
        return false;
    }

    document.getElementById('resultado').innerHTML = 'CPF válido';
    return true;
}
