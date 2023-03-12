async function getDir(typeInfo, type, idIndex, idform) {
  const ciudad = $("#ciudad" + idform);
  try {
    const element = await $.ajax({
      type: "GET",
      url: `${pdimEndpoint}${pidmUserUn}/${typeInfo}/tipo/${type}`,
    });
    if (element.length > 0) {
      const element0 = element[0];
      let html = `${element0["line1"]}<br>${element0["line2"]}<br>${element0["line3"]}<br>`;
      $(idIndex).html(html);
      if (element0["nation"] == "COL") {
        const datos = await buscarDpto();
        datos.forEach(async (element1) => {
          if (
            element1["codigo"] == element0["state"] &&
            element0["state"] != "0"
          ) {
            const data = await $.getJSON(
              `${dptoEndpoint}${element0["state"]}/ciudades`
            );
            await $.each(data, function (key, value) {
              ciudad.append(
                $("<option>", {
                  value: value.codigo,
                  text: value.descripcion,
                })
              );
            });

            $("#departamento" + idform).val(element1["codigo"]);
            $(idIndex).append(element1["descripcion"] + "<br>");
            const datosCiudad = await buscarCiudad(element1["codigo"]);
            datosCiudad.forEach((element3) => {
              if (element3["codigo"] == element0["city"]) {
                ciudad.val(element3["codigo"]);
                $(idIndex).append(element3["descripcion"] + "<br>");
              }
            });
          }
        });
      } else {
        if (idform == "P") {
          departamentoP.prop("disabled", true).val("0");
          ciudadP.prop("disabled", true).val("0");
        } else if (idform == "T") {
          departamentoT.prop("disabled", true).val("0");
          ciudadT.prop("disabled", true).val("0");
        }
      }

      const datosPais = await buscarPais();
      datosPais.forEach((element1) => {
        if (element1["codigo"] == element0["nation"]) {
          $("#pais" + idform).val(element1["codigo"]);
          $(idIndex).append(element1["descripcion"] + "<br>");
        }
      });

      $("#direccion" + idform).val(element0["line1"]);
      $("#complemento" + idform).val(element0["line2"]);
      $("#barrio" + idform).val(element0["line3"]);
      ciudad.val(element0["city"]);
      $("#seq" + idform).val(element0["seq"]);

      const mesesDiff = dateCalculate(element0["activityDate"]);

      if (mesesDiff < 6) {
        if (type === "DP") {
          $(".container_form:eq(3) .gotham_p5:first").css(
            "color",
            "rgb(0, 160, 0)"
          );
          $(
            ".container_form:eq(3) .fa-solid.fa-triangle-exclamation:first"
          ).hide();
        } else {
          $(".container_form:eq(3) .gotham_p5:eq(1)").css(
            "color",
            "rgb(0, 160, 0)"
          );
          $(
            ".container_form:eq(3) .fa-solid.fa-triangle-exclamation:eq(1)"
          ).hide();
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}
$(function () {
  getMyPimdUser().then(function (myVar) {
    getDir("direccion", "DP", "#dirPermanenteAjax", "P");
    getDir("direccion", "DT", "#dirTemporalAjax", "T");
  });
});
/*
getDir("direccion", "DP", "#dirPermanenteAjax", "P");
getDir("direccion", "DT", "#dirTemporalAjax", "T");*/
