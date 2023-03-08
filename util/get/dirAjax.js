async function getDir(typeInfo, type, idIndex, idform) {
  const ciudad = $("#ciudad" + idform);
  try {
    const element = await $.ajax({
      type: "GET",
      url: `${pdimEndpoint}${pidmUserUn}/${typeInfo}/tipo/${type}`,
    });
    if (element.length > 0) {
      let html = `${element[0]["line1"]}<br>${element[0]["line2"]}<br>${element[0]["line3"]}<br>`;
      $(idIndex).html(html);

      if (element[0]["nation"] == "COL") {
        const datos = await buscarDpto();
        datos.forEach(async (element2) => {
          if (
            element2["codigo"] == element[0]["state"] &&
            element[0]["state"] != "0"
          ) {
            const data = await $.getJSON(
              `${dptoEndpoint}${element[0]["state"]}/ciudades`
            );
            await $.each(data, function (key, value) {
              ciudad.append(
                $("<option>", {
                  value: value.codigo,
                  text: value.descripcion,
                })
              );
            });

            $("#departamento" + idform).val(element2["codigo"]);
            $(idIndex).append(element2["descripcion"] + "<br>");
            const datosCiudad = await buscarCiudad(element2["codigo"]);
            datosCiudad.forEach((element3) => {
              if (element3["codigo"] == element[0]["city"]) {
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
      datosPais.forEach((element2) => {
        if (element2["codigo"] == element[0]["nation"]) {
          $("#pais" + idform).val(element2["codigo"]);
          $(idIndex).append(element2["descripcion"] + "<br>");
        }
      });

      $("#direccion" + idform).val(element[0]["line1"]);
      $("#complemento" + idform).val(element[0]["line2"]);
      $("#barrio" + idform).val(element[0]["line3"]);
      ciudad.val(element[0]["city"]);
      $("#seq" + idform).val(element[0]["seq"]);
    }
  } catch (error) {
    console.error(error);
  }
}

getMyPimdUser().then(function (myVar) {
  getDir("direccion", "DP", "#dirPermanenteAjax", "P");
  getDir("direccion", "DT", "#dirTemporalAjax", "T");
});
