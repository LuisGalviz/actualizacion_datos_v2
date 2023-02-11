$(document).ready(function () {
  let data1;
  // Escuchador de eventos para el almacenamiento local
  window.addEventListener("storage", function (event) {
    // Verifica si el evento es para el almacenamiento local
    if (event.key == "arrayEmailPart") {
      // Actualiza la página
      data1 = JSON.parse(localStorage.getItem("arrayEmailPart"));
      data1.forEach((element) => {
        $(document).ready(function () {
          let invalidId = element["id"];
          let escapedId = jQuery.escapeSelector(invalidId);
          $(document).on("click", "#" + escapedId, function () {
            delEmail(element["email"], element["type"]);
          });
        });
      });
    }

    /* if (event.key == "arrayEmailFunc") {
      data2 = JSON.parse(localStorage.getItem("arrayEmailFunc"));
      data2.forEach((element) => {
        console.log(element);
        $(document).ready(function () {
          let invalidId = element["id"];
          let escapedId = jQuery.escapeSelector(invalidId);
          $(document).on("click", "#" + escapedId, function () {
            delEmail(element["email"], element["type"]);
          });
        });
      });
    }*/
  });

  function delEmail(email, type) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
    );

    let raw = JSON.stringify({
      pidm: "218436",
      emailType: type,
      emailAddress: email,
      dataOrigin: "",
    });

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/correo",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    location.reload();
  }
});
