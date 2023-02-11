function validateDir(errorMsg, type) {
  let city = $("#ciudad" + type).val();
  let line1 = $("#direccion" + type).val();
  let line2 = $("#complemento" + type).val();
  let line3 = $("#barrio" + type).val();
  let regex = /^\S.*$/;

  if (
    !regex.test(city) ||
    !regex.test(line1) ||
    !regex.test(line2) ||
    !regex.test(line3)
  ) {
    document.getElementById(errorMsg).style.display = "block";
    return;
  }

  document.getElementById(errorMsg).style.display = "none";

  letmyHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );
  let dir;
  if (type == "P") {
    dir = "#dirPermanenteAjax";
  } else if (type == "T") {
    dir = "#dirTemporalAjax";
  }

  if ($(dir).html().length > 0) {
    letraw = JSON.stringify({
      pidm: "218436",
      addressType: "D" + type,
      sequence: $("#seq" + type).val(),
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

    letrequestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } else {
    letraw = JSON.stringify({
      pidm: "218436",
      addressType: "D" + type,
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

    letrequestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/direccion",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  location.reload();
}
