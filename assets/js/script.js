//Função sortear um número
function sortear() {
   const rangeInicial = document.getElementById("rangeInicial").value;
   const rangeFinal = document.getElementById("rangeFinal").value;
   const minhaAposta = document.getElementById("minhaAposta").value;

   if (!rangeInicial) {
      document.getElementById("mensagemAviso").innerHTML = '<div id="alertAviso" class="alert alert-info" role="alert"><strong>Aviso! </strong>Digite o range inicial.</div>';
      return;
   };
   if(!rangeFinal) {
      document.getElementById("mensagemAviso").innerHTML = '<div id="alertAviso" class="alert alert-info" role="alert"><strong>Aviso! </strong>Digite o range final.</div>';
      return;
   };
   if(rangeInicial >= rangeFinal) {
      document.getElementById("mensagemAviso").innerHTML = '<div id="alertAviso" class="alert alert-info" role="alert"><strong>Aviso! </strong>O range final não pode ser MENOR ou IGUAL ao range inicial.</div>';
      return;

   }else {
      let numeroSorteado = Math.floor(Math.random() * Math.floor(rangeFinal));

      while (numeroSorteado < rangeInicial) {
         numeroSorteado = Math.floor(Math.random() * Math.floor(rangeFinal));
      }

      document.getElementById("mensagem").innerHTML = `<div role="alert">O número sorteado foi: <spam class="numSorteado">${numeroSorteado}</spam></div>` ;

      if(numeroSorteado == minhaAposta) {
         document.getElementById("mensagemAviso").innerHTML = '<div id="alertAviso" class="alert alert-success" role="alert"><strong>Parabéns! </strong>Você acertou o número sorteado.</div>';
         return;
      };
   };
}

//Função para dispensar automaticamente a mensagem de sucesso
setTimeout(function() {
   $('#alertAviso').fadeOut('fast');
}, 5000);
