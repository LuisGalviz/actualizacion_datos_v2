$(document).ready(function () {
  $("#conditions").change(function () {
    if ($(this).is(":checked")) {
      $(".gotham_p5").css("color", "rgb(0, 160, 0)");
      $('.fa-warning:not(:first)').hide();
    } else {
      $(".gotham_p5").css("color", "rgb(209, 10, 17)");
      $('.fa-warning:not(:first)').show();
    }
  });
});


$(document).ready(function(){
  $("#button8").click(function(){
    let decider = $("#conditions");
    if (!decider.is(":checked")) {
      alert("Aceptar checkbox");
    } else {
      alert("listo para enviar formulario");
    }
  });
});