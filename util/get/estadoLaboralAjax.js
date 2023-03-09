function getEstado(typeInfo, idIndex) {
  $.ajax({
    type: "GET",
    url: `${pdimEndpoint}${pidmUserUn}/${typeInfo}`,
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
}
/*
getMyPimdUser().then(function (myVar) {
  getEstado("estadolaboral", "#estadoAjax");
});
*/
getEstado("estadolaboral", "#estadoAjax");