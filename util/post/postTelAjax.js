function validateTel(idTel, errorMsg, type, modal) {
  let tel = $("#" + idTel).val();
  let regex;
  let exist;
  let arrayLocalStorage;
  if (idTel == "inputTelPartAjax") {
    regex = /^3[0-9]{9}$/;
    arrayLocalStorage = "arrayTelPart";
  } else if (idTel == "inputTelTepeAjax") {
    regex = /^3[0-9]{6}$/;
    arrayLocalStorage = "arrayTelTepe";
  }
  if (window.localStorage.getItem(arrayLocalStorage)) {
    //console.log("El evento está guardado en el Local Storage.");
    // Actualiza la página
    data1 = JSON.parse(localStorage.getItem(arrayLocalStorage));
    data1.forEach((element) => {
      let validId = element["tel"];
      //  console.log(element);
      if (validId == tel) {
        exist = true;
        return;
      }
    });
  } else {
    //  console.log("El evento no existe en el Local Storage.");
  }

  if (!regex.test(tel) || exist) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );
  let raw = JSON.stringify({
    pidm: "218436",
    phoneType: type,
    phoneArea: "604",
    phoneNumber: tel,
    phoneExt: "",
    intlAccess: "+57",
    dataOrigin: "CAMEL",
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let id1, id2, arrayTel;
  if (type == "CELU") {
    id1 = "#telParticularAjax";
    id2 = "#telPartAjax";
    arrayTel = "arrayTelPart";
  } else if (type == "TEPE") {
    id1 = "#telTepeAjax";
    id2 = "#telTepAjax";
    arrayTel = "arrayTelTepe";
  }

  fetch(
    "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/telefono",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      getTel("telefono", type, id1, "lgalviz", id2, arrayTel);
      $("#" + idTel).val("");
      $(modal).hide();
    })
    .catch((error) => console.log("error", error));
}
