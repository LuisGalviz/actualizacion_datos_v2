$(document).ready(function () {
  let data1;
  // Escuchador de eventos para el almacenamiento local
  window.addEventListener("storage", function (event) {
    // Verifica si el evento es para el almacenamiento local
    if (event.key == "arrayEmailPart") {
      // Actualiza la página
      data1 = JSON.parse(localStorage.getItem(event.key));
      //console.log(data1);
      data1.forEach((element) => {
        let invalidId = element["id"];
        let escapedId = jQuery.escapeSelector(invalidId);
        $(document).on("click", "#" + escapedId, function () {
          delButton(element["email"], element["type"], "correo");
        });
      });
    }

    if (event.key == "arrayTelPart" || event.key == "arrayTelTepe") {
      // Actualiza la página
      data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        let validId = element["id"];
        $(document).on("click", "#telIdDelete" + validId, function () {
          delButton(validId, element["type"], "telefono");
        });
      });
    }
  });

  function delButton(infoId, typeInfo, typeRequest) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
    );
    let raw = {};
    if (typeRequest == "correo") {
      raw = JSON.stringify({
        pidm: "218436",
        emailType: typeInfo,
        emailAddress: infoId,
        dataOrigin: "",
      });
    } else if (typeRequest == "telefono") {
      raw = JSON.stringify({
        pidm: "218436",
        phoneType: typeInfo,
        sequence: infoId,
        dataOrigin: "",
      });
    } else {
      error;
    }

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/${typeRequest}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (typeRequest == "correo") {
          getCorreo(
            "correo",
            typeInfo,
            "#emailParticularAjax",
            "lgalviz",
            "#correoPartAjax",
            "arrayEmailPart"
          );
        } else if (typeRequest == "telefono") {
          if (typeInfo == "CELU") {
            getTel(
              "telefono",
              "CELU",
              "#telParticularAjax",
              "lgalviz",
              "#telPartAjax",
              "arrayTelPart"
            );
          } else if (typeInfo == "TEPE") {
            getTel(
              "telefono",
              "TEPE",
              "#telTepeAjax",
              "lgalviz",
              "#telTepAjax",
              "arrayTelTepe"
            );
          }
        } else {
          error;
        }
      })
      .catch((error) => console.log("error", error));
  }
});
