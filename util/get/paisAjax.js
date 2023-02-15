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
  const paisP = $("#paisP");
  const paisT = $("#paisT");
  const departamentoP = $("#departamentoP");
  const departamentoT = $("#departamentoT");
  const ciudadP = $("#ciudadP");
  const ciudadT = $("#ciudadT");

  $.getJSON(
    "https://tananeoqa.uninorte.edu.co/PoblacionWS/api/rupe/paises",
    function (data) {
      let options = "";
      data.forEach(function (value, key) {
        options +=
          '<option value="' +
          value.codigo +
          '">' +
          value.descripcion +
          "</option>";
      });
      paisP.append(options);
      paisT.append(options);
    }
  );

  paisP.change(function () {
    const pais = $(this).val();
    if (pais != "COL") {
      departamentoP.prop("disabled", true);
      departamentoP.val("0");
      ciudadP.prop("disabled", true);
      ciudadP.val("0");
    } else {
      departamentoP.prop("disabled", false);
      departamentoP.val("08");
      ciudadP.prop("disabled", false);
      ciudadP.val("0");
    }
  });

  paisT.change(function () {
    const pais = $(this).val();
    if (pais != "COL") {
      departamentoT.prop("disabled", true);
      departamentoT.val("0");
      ciudadT.prop("disabled", true);
      ciudadT.val("0");
    } else {
      departamentoT.prop("disabled", false);
      departamentoT.val("08");
      ciudadT.prop("disabled", false);
      ciudadT.val("0");
    }
  });
});
