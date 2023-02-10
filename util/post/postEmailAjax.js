function validateEmail(idEmail, errorMsg, type) {
  var email = document.getElementById(idEmail).value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";
  // Código para el botón
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );
  var raw = JSON.stringify({
    pidm: 218436,
    emailType: type,
    emailAddress: $("#" + idEmail).val(),
    dataOrigin: "CAMEL",
  });

  var requestOptions = {
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
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  location.reload();
}
