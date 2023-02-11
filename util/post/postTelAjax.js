function validateTel(idTel, errorMsg, type) {
  var tel = document.getElementById(idTel).value;
  let regex;
  if (idTel == "inputTelPartAjax") {
    regex = /^3[0-9]{9}$/;
  } else if (idTel == "inputTelTepeAjax") {
    regex = /^3[0-9]{6}$/;
  }
  if (!regex.test(tel)) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );
  var raw = JSON.stringify({
    pidm: "218436",
    phoneType: type,
    phoneArea: "604",
    phoneNumber: tel,
    phoneExt: "",
    intlAccess: "+57",
    dataOrigin: "CAMEL",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/telefono",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  location.reload();
}
