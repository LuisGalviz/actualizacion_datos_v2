function deleteEmail(correo, type) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );

  let raw = JSON.stringify({
    pidm: "218436",
    emailType: type,
    emailAddress: correo,
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
}
