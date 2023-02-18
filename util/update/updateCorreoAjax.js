$(document).ready(function () {
  window.addEventListener("storage", function (event) {
    if (event.key === "arrayEmailPart") {
      let data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        $(document).on("click", `#${element["id"]}Update`, function () {
          console.log("correoupdate " + element["id"] + " update");
          const emailNuevo = document.getElementById(
            `emailIdUpdate${element["id"]}Value`
          ).value;
          updateButtonEmail(element["id"], "PART", "correo", emailNuevo);
        });
      });
    }
  });

  function updateButtonEmail(infoId, typeInfo, typeRequest, email) {
    let myHeaders = new Headers({
      "Content-Type": "application/json",
      Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
    });

    let raw = JSON.stringify({
      pidm: pidmUserUn,
      emailType: typeInfo,
      emailAddress: email,
      dataOrigin: infoId,
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    const fetchUrl = `${Endpoint}${typeRequest}`;
    console.log(fetchUrl);
    fetch(fetchUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getCorreo(
          "correo",
          "PART",
          "#emailParticularAjax",
          userUn,
          "#correoPartAjax",
          "arrayEmailPart"
        );
      });
  }
});
