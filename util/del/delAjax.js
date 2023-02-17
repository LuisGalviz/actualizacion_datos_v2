$(document).ready(function () {
  let data1;

  window.addEventListener("storage", function (event) {
    if (event.key === "arrayEmailPart") {
      data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        let escapedId = jQuery.escapeSelector(element["id"]);
        $(document).on("click", `#${escapedId}`, function (event) {
          event.preventDefault();
          if (confirm("¿Estás seguro que deseas modificar?"))
            delButton(element["email"], element["type"], "correo");
        });
      });
    }
    if (event.key === "arrayTelPart" || event.key === "arrayTelTepe") {
      data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        $(document).on(
          "click",
          `#telIdDelete${element["id"]}`,
          function (event) {
            event.preventDefault();
            if (confirm("¿Estás seguro que deseas modificar?"))
              delButton(element["id"], element["type"], "telefono");
          }
        );
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
            pidm: pidmUserUn,
            emailType: typeInfo,
            emailAddress: infoId,
            dataOrigin: "",
          })
        : JSON.stringify({
            pidm: pidmUserUn,
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

    const fetchUrl = `${Endpoint}${typeRequest}`;

    fetch(fetchUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (typeRequest === "correo") {
          getCorreo(
            "correo",
            typeInfo,
            "#emailParticularAjax",
            userUn,
            "#correoPartAjax",
            "arrayEmailPart"
          );
        } else if (typeRequest === "telefono") {
          if (typeInfo === "CELU") {
            getTel(
              "telefono",
              "CELU",
              "#telParticularAjax",
              userUn,
              "#telPartAjax",
              "arrayTelPart"
            );
          } else if (typeInfo === "TEPE") {
            getTel(
              "telefono",
              "TEPE",
              "#telTepeAjax",
              userUn,
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
