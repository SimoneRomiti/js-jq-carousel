// Creare uno slider di immagini.
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.

$(document).ready(
  function(){

    var activeImage;
    var nextImage;
    var prevImage;
    var activeCircle;
    var nextCircle;
    var prevCircle;

    $('.next').click(
      function(){

        activeImage = $('.images img.active');
        activeCircle = $('.nav i.active');

        activeImage.removeClass('active');
        activeCircle.removeClass("active");


        if(activeImage.hasClass("last")){
          nextImage = $('.images img.first');
          nextImage.addClass("active");
          nextCircle = $('.nav i.first');
          nextCircle.addClass("active");
        } else{
          nextImage = activeImage.next().addClass("active");
          nextCircle = activeCircle.next().addClass("active");
        }

      }
    );

    $('.prev').click(
      function(){

        activeImage = $('.images img.active');
        activeCircle = $('.nav i.active');

        activeImage.removeClass("active");
        activeCircle.removeClass("active");

        if(activeImage.hasClass("first")){
          prevImage = $('img.last');
          prevImage.addClass("active");
          prevCircle = $('.nav i.last');
          prevCircle.addClass("active");
        } else{
          prevImage = activeImage.prev();
          prevImage.addClass("active");
          prevCircle = activeCircle.prev();
          prevCircle.addClass("active");
        }

      }
    );

  }
);
