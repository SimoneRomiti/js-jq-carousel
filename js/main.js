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
    var i;
    var trovato;
    var search;
    var theCircle;
    var nav;

    function next(){

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


    function prev(){

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


    function circleClick(element){

      i = 0;
      trovato = false;
      search = $('.nav i.first');
      activeCircle = $('.nav i.active');
      activeImage = $('.images img.active');
      console.log("primo", activeImage);
      activeCircle.removeClass("active");
      activeImage.removeClass("active");
      console.log("secondo", activeImage);
      element.addClass("active");


      while(i < 4 & trovato == false){
        if(search.hasClass("active")){
          trovato = true;
        } else if(search.hasClass("last")){
          search = $('.nav i.first');
          i++;
        } else{
          search = search.next();
          i++;
        }
      }

      activeImage = $('img').eq(i);
      console.log(activeImage);
      activeImage.addClass("active");

    }



    $('.next').click(
      function(){
        next();
      }
    );



    $('.prev').click(
      function(){
        prev();
      }
    );



    $(document).keydown(
      function(){
        if(event.which == 37){
          prev();
        } else if (event.which == 39){
          next();
        }
      }
    );


    nav = $(".nav").html("<i class='fas fa-circle active first'></i><i class='fas fa-circle'></i><i class='fas fa-circle'></i><i class='fas fa-circle last'></i>"
    );


    $('.nav i').click(
      function(){
        theCircle = $(this);
        circleClick(theCircle);
      }
    );


  }
);
