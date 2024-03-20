document.getElementById('btn-cripto').addEventListener('click', criptografar);
document.getElementById('btn-descripto').addEventListener('click', descriptografar);
// document.getElementById('btn-copy').addEventListener('click', copiarTexto); // Implemente esta função se necessário

function criptografar() {
    let texto = document.getElementById("input-texto").value;
    let criptografado = texto.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
    document.getElementById("msg").value = criptografado;
}

function descriptografar() {
    let texto = document.getElementById("input-texto").value;
    let descriptografado = texto.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
    document.getElementById("msg").value = descriptografado;
}

document.getElementById("msg").classList.add("mostrar");


// Função copiarTexto() ainda precisa ser implementada se você quiser essa funcionalidade
