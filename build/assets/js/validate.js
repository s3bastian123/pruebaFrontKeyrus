$(document).ready(function(){
  var numEamil, numPass;

  //enviar información de ingreso
  $(".btn_form").on("click", function(event){
    event.preventDefault();
    numEamil = $('input[name=email]').val().length;
    numPass = $('input[name=password]').val().length;

    //valida si faltan campos por llenar
    if(numEamil == 0 || numPass==0){
      $(".alert_bad").removeClass("hide").siblings().addClass("hide");
    }

    else{
      $(".alert_good").removeClass("hide").siblings().addClass("hide");
    }
  });
});
