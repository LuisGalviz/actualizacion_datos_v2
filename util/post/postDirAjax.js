function validateDir(errorMsg, type) {
  let line1 = $("#direccion" + type).val();
  let line2 = $("#complemento" + type).val();
  let line3 = $("#barrio" + type).val();
  let pais = $("#pais" + type).val();
  let city = $("#ciudad" + type).val();
  let state = $("#departamento" + type).val();
  let regex = /^\S.*$/;

  if (city == 0 || state == 0) {
    if (pais == "COL") {
      document.getElementById(errorMsg).style.display = "block";
      return;
    }
  }

  if (!regex.test(line1) || !regex.test(line2) || !regex.test(line3)) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";
  let myHeaders = new Headers({
    "Content-Type": "application/json",
    Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
  });
  let dir, method;

  if (type === "P") {
    dir = "#dirPermanenteAjax";
  } else if (type === "T") {
    dir = "#dirTemporalAjax";
  }

  method = $(dir).html().length > 0 ? "PUT" : "POST";

  const requestBody = JSON.stringify({
    pidm: pidmUserUn,
    addressType: "D" + type,
    sequence: method === "PUT" ? $("#seq" + type).val() : undefined,
    city: $("#ciudad" + type).val(),
    state: $("#departamento" + type).val(),
    nation: $("#pais" + type).val(),
    dataOrigin: "CAMEL",
    zip: "0",
    county: "0",
    line1: $("#direccion" + type).val(),
    line2: $("#complemento" + type).val(),
    line3: $("#barrio" + type).val(),
  });

  const requestOptions = {
    method,
    headers: myHeaders,
    body: requestBody,
    redirect: "follow",
  };

  fetch(`${Endpoint}direccion`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      getDir("direccion", "D" + type, dir, type);
      if (type === "P") {
        greenInputConfirm("#button6 .gotham_p5", '#button6 .fa-solid', ".bg-modal-6");
      } else if (type === "T") {
        greenInputConfirm("#button7 .gotham_p5",'#button7 .fa-solid', ".bg-modal-7");
      }
    })
    .catch((error) => console.log("error", error));
}
