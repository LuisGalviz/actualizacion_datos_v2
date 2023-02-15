function buscarPais() {
  return $.ajax({
    url: "https://tananeoqa.uninorte.edu.co/PoblacionWS/api/rupe/paises",
    type: "GET",
    success: function (data) {
      return data;
    },
    error: function (error) {
      return error;
    },
  });
}

$(document).ready(function () {
  $.getJSON(
    "https://tananeoqa.uninorte.edu.co/PoblacionWS/api/rupe/paises",
    function (data) {
      $.each(data, function (key, value) {
        $("#paisP").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
        $("#paisT").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
      });
    }
  );
});

// Escuchar el evento de cambio en el select de países
$("#paisP").change(function () {
  // Obtener el valor seleccionado del select de países
  const pais = $(this).val();
  if (pais != "COL") {
    $("#departamentoP").prop("disabled", true);
    $("#departamentoP").val("0");
    $("#ciudadP").prop("disabled", true);
    $("#ciudadP").val("0");
    //  $("#ciudadP").empty();
  } else {
    $("#departamentoP").prop("disabled", false);
    $("#departamentoP").val("08");
    $("#ciudadP").prop("disabled", false);
    $("#ciudadP").val("0");
  }
});


$("#paisT").change(function () {
  // Obtener el valor seleccionado del select de países
  const pais = $(this).val();
  if (pais != "COL") {
    $("#departamentoT").prop("disabled", true);
    $("#departamentoT").val("0");
    $("#ciudadT").prop("disabled", true);
    $("#ciudadT").val("0");
    //  $("#ciudadP").empty();
  } else {
    $("#departamentoT").prop("disabled", false);
    $("#departamentoT").val("08");
    $("#ciudadT").prop("disabled", false);
    $("#ciudadT").val("0");
  }
});
