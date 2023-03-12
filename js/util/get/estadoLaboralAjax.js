function getEstado(typeInfo, idIndex) {
  $.ajax({
    type: "GET",
    url: `${pdimEndpoint}${pidmUserUn}/${typeInfo}`,
    success: function (data) {
      if (data !== null && data.length > 0) {
        const element = data[0];
        $(idIndex).html(element["employmentStatus"]);
        $("#" + element["employmentStatus"]).prop("checked", true);

        const mesesDiff = dateCalculate(element["activityDate"]);

        if (mesesDiff < 6) {
          $(".container_form:eq(2) .gotham_p5:first").css(
            "color",
            "rgb(0, 160, 0)"
          );
          $(
            ".container_form:eq(2) .fa-solid.fa-triangle-exclamation:first"
          ).hide();
        }
      }
    },
    error: function (error) {
      return error;
      // Acción a realizar en caso de error en la petición
    },
  });
}
$(function () {
  getMyPimdUser().then(function (myVar) {
    getEstado("estadolaboral", "#estadoAjax");
  });
});
/* $(function () {
  getEstado("estadolaboral", "#estadoAjax");
});
*/