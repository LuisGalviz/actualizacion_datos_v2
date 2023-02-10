$(document).ready(function () {
  $("#buttonDP").click(function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
    );

    if ($("#dirPermanenteAjax").html().length > 0) {
      var raw = JSON.stringify({
        pidm: "218436",
        addressType: "DP",
        sequence: $("#seqP").val(),
        city: $("#ciudadP").val(),
        state: $("#departamentoP").val(),
        nation: $("#paisP").val(),
        dataOrigin: "CAMEL",
        zip: "0",
        county: "0",
        line1: $("#direccionP").val(),
        line2: $("#complementoP").val(),
        line3: $("#barrioP").val(),
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      var raw = JSON.stringify({
        pidm: "218436",
        addressType: "DP",
        city: $("#ciudadP").val(),
        state: $("#departamentoP").val(),
        nation: $("#paisP").val(),
        dataOrigin: "CAMEL",
        zip: "08558000",
        county: "08558",
        line1: $("#direccionP").val(),
        line2: $("#complementoP").val(),
        line3: $("#barrioP").val(),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  });
});

$(document).ready(function () {
  $("#buttonDT").click(function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
    );

    if ($("#dirTemporalAjax").html().length > 0) {
      var raw = JSON.stringify({
        pidm: "218436",
        addressType: "DT",
        sequence: $("#seqT").val(),
        city: $("#ciudadT").val(),
        state: $("#departamentoT").val(),
        nation: $("#paisT").val(),
        dataOrigin: "CAMEL",
        zip: "0",
        county: "0",
        line1: $("#direccionT").val(),
        line2: $("#complementoT").val(),
        line3: $("#barrioT").val(),
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      var raw = JSON.stringify({
        pidm: "218436",
        addressType: "DT",
        city: $("#ciudadT").val(),
        state: $("#departamentoT").val(),
        nation: $("#paisT").val(),
        dataOrigin: "CAMEL",
        zip: "08558000",
        county: "08558",
        line1: $("#direccionT").val(),
        line2: $("#complementoT").val(),
        line3: $("#barrioT").val(),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  });
});
