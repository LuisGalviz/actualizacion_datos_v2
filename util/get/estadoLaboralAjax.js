function getEstado(typeInfo, idIndex, usr) {
  let pidm = getPidm(usr);
  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url:
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/" +
        data["pidm"] +
        "/" +
        typeInfo,
      success: function (data2) {
        if (data2 !== null && data2.length > 0) {
      //    console.log(data2[0]["employmentStatus"]);
          $(idIndex).html(data2[0]["employmentStatus"]);
          $("#" + data2[0]["employmentStatus"]).prop("checked", true);
        }
      },
      error: function (error) {
        return error;
        // Acción a realizar en caso de error en la petición
      },
    });
  });
}

//Devuelve correo, Tipo de correo, ID que se modifica en el index, usuario
let estado = getEstado("estadolaboral", "#estadoAjax", "lgalviz");
