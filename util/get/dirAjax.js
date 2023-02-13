function getDir(typeInfo, type, idIndex, usr, idModal, idform) {
  let pidm = getPidm(usr);
  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url:
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/" +
        data["pidm"] +
        "/" +
        typeInfo +
        "/tipo/" +
        type,
      success: function (element) {
        if (element.length > 0) {
          let departamento = buscarDpto();
          departamento.done(function (datos) {
            let pais = buscarPais();
            pais.done(function (datos2) {
              datos.forEach((element2) => {
                if (element2["codigo"] == element[0]["state"]) {
                  $("#departamento" + idform).val(element2["codigo"]);
                  datos2.forEach((element3) => {
                    if (element3["codigo"] == element[0]["nation"]) {
                      $("#pais" + idform).val(element3["codigo"]);
                      $(idIndex).html(
                        element[0]["line1"] +
                          "<br>" +
                          element[0]["line2"] +
                          "<br>" +
                          element[0]["city"] +
                          "<br>" +
                          element2["descripcion"] +
                          "<br>" +
                          element3["descripcion"] +
                          "<br>"
                      );
                    }
                  });
                }
              });
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
  "lgalviz",
  "#dirPermAjax",
  "P"
);

let dirTemp = getDir(
  "direccion",
  "DT",
  "#dirTemporalAjax",
  "lgalviz",
  "#dirTempAjax",
  "T"
);
