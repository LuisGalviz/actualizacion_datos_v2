$(document).ready(function () {
  $("#postTelPartAjax").click(function () {
    let number = $("#inputTelPartAjax").val();

    if (number !== null && number.length > 0) {
      numberValue = parseInt(number);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
      );
      var raw = JSON.stringify({
        pidm: "218436",
        phoneType: "CELU",
        phoneArea: "604",
        phoneNumber: numberValue,
        phoneExt: "",
        intlAccess: "+57",
        dataOrigin: "CAMEL",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/telefono",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      console.log("input null");
    }
  });
});

$(document).ready(function () {
  $("#postTelTepeAjax").click(function () {
    let number = $("#inputTelTepeAjax").val();

    if (number !== null && number.length > 0) {
      numberValue = parseInt(number);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
      );
      var raw = JSON.stringify({
        pidm: "218436",
        phoneType: "TEPE",
        phoneArea: "604",
        phoneNumber: numberValue,
        phoneExt: "",
        intlAccess: "+57",
        dataOrigin: "CAMEL",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/telefono",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      console.log("input null");
    }
  });
});
