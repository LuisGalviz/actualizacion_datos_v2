function validateTel(idTel, codCELU, codTEPE, errorMsg, type, modal) {
  let tel = $("#" + idTel).val();
  let codTel = $("#" + codCELU).val();
  let codTepe = $("#" + codTEPE).val();
  let regex, arrayLocalStorage;
  switch (idTel) {
    case "inputTelPartAjax":
      regex = /^3[0-9]{9}$/;
      arrayLocalStorage = "arrayTelPart";
      break;
    case "inputTelTepeAjax":
      regex = /^3[0-9]{6}$/;
      arrayLocalStorage = "arrayTelTepe";
      break;
  }
  let localStorageData = JSON.parse(localStorage.getItem(arrayLocalStorage));
  let exist =
    localStorageData && localStorageData.some((item) => item["tel"] === tel);

  if (!regex.test(tel) || exist) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      pidm: pidmUserUn,
      phoneType: type,
      phoneArea: codTepe,
      phoneNumber: tel,
      phoneExt: "",
      intlAccess: codTel,
      dataOrigin: "CAMEL",
    }),
    redirect: "follow",
  };

  let id1, id2, arrayTel;
  switch (type) {
    case "CELU":
      id1 = "#telParticularAjax";
      id2 = "#telPartAjax";
      arrayTel = "arrayTelPart";
      break;
    case "TEPE":
      id1 = "#telTepeAjax";
      id2 = "#telTepAjax";
      arrayTel = "arrayTelTepe";
      break;
  }

  fetch(`${Endpoint}telefono`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      getTel("telefono", type, id1, id2, arrayTel);
      $("#" + idTel).val("");
      $(modal).hide();
    })
    .catch((error) => console.log("error", error));
}
