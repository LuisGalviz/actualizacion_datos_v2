function getDir(typeInfo, type, idIndex, usr, idform) {
  let pidm = getPidm(usr);
  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url: `${pdimEndpoint}` + data["pidm"] + "/" + typeInfo + "/tipo/" + type,
      success: function (element) {
        if (element.length > 0) {
          //  console.log(element);
          let html =
            element[0]["line1"] +
            "<br>" +
            element[0]["line2"] +
            "<br>" +
            element[0]["line3"] +
            "<br>";
          $(idIndex).html(html);

          if (element[0]["nation"] == "COL") {
            buscarDpto().done(function (datos) {
              datos.forEach((element2) => {
                if (
                  element2["codigo"] == element[0]["state"] &&
                  element[0]["state"] != "0"
                ) {
                  $.getJSON(
                    `${dptoEndpoint}${element[0]["state"]}/ciudades`,
                    function (data) {
                      $.each(data, function (key, value) {
                        $("#ciudadT").append(
                          $("<option>", {
                            value: value.codigo,
                            text: value.descripcion,
                          })
                        );
                        $("#ciudadP").append(
                          $("<option>", {
                            value: value.codigo,
                            text: value.descripcion,
                          })
                        );
                      });
                    }
                  );

                  $("#departamento" + idform).val(element2["codigo"]);
                  //  console.log(element2["codigo"]);
                  $(idIndex).append(element2["descripcion"] + "<br>");

                  buscarCiudad(element2["codigo"]).done(function (datos) {
                    datos.forEach((element3) => {
                      if (element3["codigo"] == element[0]["city"]) {
                        $("#ciudad" + idform).val(element3["codigo"]);
                        //console.log(element3["descripcion"]);
                        $(idIndex).append(element3["descripcion"] + "<br>");
                      }
                    });
                  });
                }
              });
            });
          } else {
            if (idform == "P") {
              departamentoP.prop("disabled", true);
              departamentoP.val("0");
              ciudadP.prop("disabled", true);
              ciudadP.val("0");
            } else if (idform == "T") {
              departamentoT.prop("disabled", true);
              departamentoT.val("0");
              ciudadT.prop("disabled", true);
              ciudadT.val("0");
            }
          }

          buscarPais().done(function (datos) {
            datos.forEach((element2) => {
              if (element2["codigo"] == element[0]["nation"]) {
                $("#pais" + idform).val(element2["codigo"]);
                // console.log(element2["descripcion"]);
                $(idIndex).append(element2["descripcion"] + "<br>");
              }
            });
          });

          $("#direccion" + idform).val(element[0]["line1"]);
          $("#complemento" + idform).val(element[0]["line2"]);
          $("#barrio" + idform).val(element[0]["line3"]);
          $("#ciudad" + idform).val(element[0]["city"]);
          $("#seq" + idform).val(element[0]["seq"]);
        }
      },
      error: function (error) {
        return error;
        // Acción a realizar en caso de error en la petición
      },
    });
  });
}

let dirPerm = getDir(
  "direccion",
  "DP",
  "#dirPermanenteAjax",
  userUn,
  "P"
);

let dirTemp = getDir(
  "direccion",
  "DT",
  "#dirTemporalAjax",
  userUn,
  "T"
);
