// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione
// una decina di dischi musicali.Servendoci di handlebars e stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.


$(document).ready(function(){

  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(risposta){
        for (var i = 0; i < risposta.response.length; i++){
          // console.log(risposta.response[i]);
          var cd = risposta.response[i]; // Salvo in una variabile risposta.response[i], riceverò un oggetto, e sarà il muo context per HB
          var source = document.getElementById("entry-template").innerHTML;
          var template = Handlebars.compile(source);
          var html = template(cd);
          $(".cds-container.container").append(html); // Aggiungo al DOM.
        }
      },
      error: function(){
        alert("È avvenuto un errore.");
     }
    }
  );

  //Costruzione select
  $("#scelta option").click(function(){ // Al click di una option della select.
    var genere = $(this).html(); // Salvo in una variabile l'html dell' elemento cliccato.

    if (genere == "All"){ // Se genere è uguale al value "All".
      $(".cd").show(); // mostra la classe "cd".
    } else{ //altrimenti..
      $(".cd").hide(); //Nascondi la classe "cd".
      $(".cd." + genere).show() // mostra la coppia classe "cd" + var genere.
    }
  });

});
