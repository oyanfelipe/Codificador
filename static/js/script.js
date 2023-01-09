

function criptografar() {
    var valor = document.querySelector('#texto').value;

    var resultado1 = valor.replace(/e/g, "enter");
    var resultado2 = resultado1.replace(/i/g, "imes");
    var resultado3 = resultado2.replace(/a/g, "ai");
    var resultado4 = resultado3.replace(/o/g, "ober");
    var resultadoFinal = resultado4.replace(/u/g, "ufat");

    document.querySelector('#para').innerHTML = resultadoFinal;
}

function descriptografar() {
    var valor = document.querySelector('#texto').value;

    var resultado1 = valor.replace(/enter/g, "e");
    var resultado2 = resultado1.replace(/imes/g, "i");
    var resultado3 = resultado2.replace(/ai/g, "a");
    var resultado4 = resultado3.replace(/ober/g, "o");
    var resultadoFinal = resultado4.replace(/ufat/g, "u");

    document.querySelector('#para').innerHTML = resultadoFinal;
}

function handleInput(e) {
    var ss = e.target.selectionStart;
    var se = e.target.selectionEnd;
    e.target.value = e.target.value.toLowerCase();
    e.target.selectionStart = ss;
    e.target.selectionEnd = se;
}

function retira_acentos(palavra) {
    com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ@#$%&*?°§ªº<>¬£';
    sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    nova = '';
    for (i = 0; i < palavra.length; i++) {
        if (com_acento.search(palavra.substr(i, 1)) >= 0) {
            nova += sem_acento.substr(com_acento.search(palavra.substr(i, 1)), 1);
        }
        else {
            nova += palavra.substr(i, 1);
        }
    }
    return nova;
}