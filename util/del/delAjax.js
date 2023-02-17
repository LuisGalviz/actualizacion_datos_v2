$(document).ready(function () {
  let data1;

  window.addEventListener("storage", function (event) {
    if (event.key === "arrayEmailPart") {
      data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        let escapedId = jQuery.escapeSelector(element["id"]);
        $(document).on("click", `#${escapedId}`, function () {
          delButton(element["email"], element["type"], "correo");
        });
      });
    }
    if (event.key === "arrayTelPart" || event.key === "arrayTelTepe") {
      data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        $(document).on("click", `#telIdDelete${element["id"]}`, function () {
          delButton(element["id"], element["type"], "telefono");
        });
      });
    }
  });

  function delButton(infoId, typeInfo, typeRequest) {
    let myHeaders = new Headers({
      "Content-Type": "application/json",
      Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
    });

    let raw =
      typeRequest === "correo"
        ? JSON.stringify({
            pidm: "218436",
            emailType: typeInfo,
            emailAddress: infoId,
            dataOrigin: "",
          })
        : JSON.stringify({
            pidm: "218436",
            phoneType: typeInfo,
            sequence: infoId,
            dataOrigin: "",
          });

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const fetchUrl = `https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/${typeRequest}`;

    fetch(fetchUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (typeRequest === "correo") {
          getCorreo(
            "correo",
            typeInfo,
            "#emailParticularAjax",
            "lgalviz",
            "#correoPartAjax",
            "arrayEmailPart"
          );
        } else if (typeRequest === "telefono") {
          if (typeInfo === "CELU") {
            getTel(
              "telefono",
              "CELU",
              "#telParticularAjax",
              "lgalviz",
              "#telPartAjax",
              "arrayTelPart"
            );
          } else if (typeInfo === "TEPE") {
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
          throw new Error("Error error", error);
        }
      });
  }
});
