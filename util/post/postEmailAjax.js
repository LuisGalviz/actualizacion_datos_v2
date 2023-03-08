function validateEmail(idEmail, errorMsg, type, modal) {
  let email = $("#" + idEmail).val();
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let exist;

  let storedEmails = JSON.parse(
    window.localStorage.getItem("arrayEmailPart") || "[]"
  );
  exist = storedEmails.some((item) => item.email === email);

  if (!regex.test(email) || exist) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";
  // Código para el botón
  let myHeaders = new Headers({
    "Content-Type": "application/json",
    Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      pidm: pidmUserUn,
      emailType: type,
      emailAddress: email,
      dataOrigin: "CAMEL",
    }),
    redirect: "follow",
  };

  fetch(
    `${Endpoint}correo`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      getCorreo(
        "correo",
        type,
        "#emailParticularAjax",
        "#correoPartAjax",
        "arrayEmailPart"
      );
      $("#" + idEmail).val("");
      $(modal).hide();
    })
    .catch((error) => console.log("error", error));
}
