$(document).ready(function () {
  $("#conditions").change(function () {
    if ($(this).is(":checked")) {
      $(".gotham_p5").css("color", "rgb(0, 160, 0)");
      $(".fa-solid.fa-triangle-exclamation").hide();
    } else {
      $(".gotham_p5").css("color", "rgb(209, 10, 17)");
      $(".fa-solid.fa-triangle-exclamation").show();
    }
  });

  $("#submit-button").click(function () {
    let decider = $("#conditions");
    if (!decider.is(":checked")) {
      alert("Aceptar checkbox");
    } else {
      $("#formulario-actualizacion").hide();
      $("#mensaje-agradecimiento").show();
    }
  });

  $("#back-button-msj").click(function () {
    $("#formulario-actualizacion").show();
    $("#mensaje-agradecimiento").hide();
  });
});
