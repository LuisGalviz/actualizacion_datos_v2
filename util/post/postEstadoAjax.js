$(document).ready(function () {
  $("#buttonEstado").click(function () {
    let selectedRadio = $("input[name='choice']:checked").val();
    //    console.log(radioValue);

    let myHeaders = new Headers({
      "Content-Type": "application/json",
      Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
    });

    let method = $("#estadoAjax").html().length > 0 ? "PUT" : "POST";
    let url =
      `${Endpoint}estadolaboral`;
    let dataOrigin = method === "POST" ? { dataOrigin: "APPMOVIL" } : {};

    let body = JSON.stringify({
      pidm: pidmUserUn,
      employmentStatus: selectedRadio,
      ...dataOrigin,
    });

    let requestOptions = {
      method: method,
      headers: myHeaders,
      body: body,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        getEstado("estadolaboral", "#estadoAjax", pidmUserUn);
        greenInputConfirm("#button5 .gotham_p5", ".bg-modal-5");
      })
      .catch((error) => console.log("error", error));
  });
});