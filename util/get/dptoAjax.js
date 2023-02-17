function buscarDpto() {
  return $.ajax({
    url: `${dptoEndpoint}`,
    type: "GET",
    success: function (data_dpto) {
      return data_dpto;
    },
    error: function (error) {
      return error;
    },
  });
}

$(document).ready(function () {
  $.getJSON(
    `${dptoEndpoint}`,
    function (data) {
      $.each(data, function (key, value) {
        $("#departamentoT").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
        $("#departamentoP").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
      });
    }
  );
});

$("#departamentoT").change(function () {
  const dpto = $(this).val();
  $.getJSON(
    `${dptoEndpoint}${dpto}/ciudades`,
    function (data) {
      $("#ciudadT").empty();
      // Agregar una opción vacía para que el usuario tenga que seleccionar una ciudad
      $("#ciudadT").append(
        $("<option>", {
          value: "",
          text: "Seleccione una ciudad",
        })
      );
      // Agregar las opciones de ciudades obtenidas mediante la petición AJAX
      $.each(data, function (key, value) {
        $("#ciudadT").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
      });
    }
  );
});

$("#departamentoP").change(function () {
  const dpto = $(this).val();
  $.getJSON(
    `${dptoEndpoint}${dpto}/ciudades`,
    function (data) {
      $("#ciudadP").empty();
      // Agregar una opción vacía para que el usuario tenga que seleccionar una ciudad
      $("#ciudadP").append(
        $("<option>", {
          value: "0",
          text: "Seleccione una ciudad",
        })
      );
      // Agregar las opciones de ciudades obtenidas mediante la petición AJAX
      $.each(data, function (key, value) {
        $("#ciudadP").append(
          $("<option>", {
            value: value.codigo,
            text: value.descripcion,
          })
        );
      });
    }
  );
});
