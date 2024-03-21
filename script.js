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

document.getElementById('btn-copy').addEventListener('click', function() {
    var textoParaCopiar = document.getElementById('msg');
    if (textoParaCopiar.value === '') {
      alert('Não há texto para copiar!');
    } else {
      navigator.clipboard.writeText(textoParaCopiar.value).then(function() {
        alert('Texto copiado com sucesso!');
      }).catch(function(err) {
        console.error('Erro ao copiar texto: ', err);
        alert('Erro ao copiar texto.');
      });
    }
  });
  
