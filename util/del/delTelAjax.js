function deleteEmail(correo, type) {
  letmyHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );

  letraw = JSON.stringify({
    pidm: "218436",
    emailType: type,
    emailAddress: correo,
    dataOrigin: "",
  });

  letrequestOptions = {
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
}
