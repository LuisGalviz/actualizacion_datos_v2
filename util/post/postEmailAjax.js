function validateEmail(idEmail, errorMsg, type, modal) {
  let email = document.getElementById(idEmail).value;
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let exist;

  if (window.localStorage.getItem("arrayTelPart")) {
    //console.log("El evento está guardado en el Local Storage.");
    // Actualiza la página
    data1 = JSON.parse(localStorage.getItem("arrayEmailPart"));
    data1.forEach((element) => {
      let validId = element["email"];
      //  console.log(element);
      if (validId == email) {
        exist = true;
        return;
      }
    });
  } else {
    //  console.log("El evento no existe en el Local Storage.");
  }
  // console.log(exist);
  if (!regex.test(email) || exist) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";
  // Código para el botón
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );
  let raw = JSON.stringify({
    pidm: 218436,
    emailType: type,
    emailAddress: $("#" + idEmail).val(),
    dataOrigin: "CAMEL",
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/correo",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      getCorreo(
        "correo",
        type,
        "#emailParticularAjax",
        "lgalviz",
        "#correoPartAjax",
        "arrayEmailPart"
      );
      $("#" + idEmail).val('');
      $(modal).hide();
    })
    .catch((error) => console.log("error", error));
}
