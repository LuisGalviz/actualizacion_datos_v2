function getCorreo(typeInfo, type, idIndex, usr, idModal, dataArray) {
  if (window.localStorage.getItem(dataArray)) {
    window.localStorage.removeItem(dataArray);
    console.log(
      "La clave '" + dataArray + "' se ha eliminado del Local Storage."
    );
  } else {
    console.log("La clave '" + dataArray + "' no existe en el Local Storage.");
  }

  let pidm = getPidm(usr);
  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url:
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/" +
        data["pidm"] +
        "/" +
        typeInfo,
      success: function (data2) {
        let html = "";
        let cont = 1;
        let contEmail = 0;
        let localData = [];

        data2.forEach((element) => {
          console.log("esta es la data2" + element["emailType"]);
          if (element["emailType"] == type) {
            contEmail++;
            if (cont > 0) {
              $(idIndex).html(element["emailAddress"]);
              cont--;
            }
            //console.log(element);
            html += `<div class='row'>`;
            html += `<input class='right' type='email' readonly  placeholder='Correo de contacto' name='correoContacto' value='${element["emailAddress"]}'>`;
            if (type == "PART") {
              html += `<input type='button' class='button_eliminar' value='-' id='${element["internalRecordId"]}'>`;
            } else {
              html += `<input type='button' class='button_eliminar disabled' value='-' id='${element["internalRecordId"]}'>`;
            }

            html += "</div>";
            $(idModal).html(html);
            localData.push({
              id: element["internalRecordId"],
              email: element["emailAddress"],
              type: element["emailType"],
            });
          }
        });
        if (contEmail == 0) {
          html += `<div class='row'>`;
          html += `<label style="
          margin: 20px;
          color: gray;
      ">Aún no Correos</label>`;
          html += "</div>";
          $(idModal).html(html);
        }

        localStorage.setItem(dataArray, JSON.stringify(localData));
        let dsata1 = JSON.parse(localStorage.getItem(dataArray));
        console.log(dsata1);
        // Disparar el evento storage
        var storageEvent = new StorageEvent("storage", {
          key: dataArray,
          newValue: JSON.stringify(localData),
          url: window.location.href,
        });
        window.dispatchEvent(storageEvent);
      },
      error: function (error) {
        return error;
        // Acción a realizar en caso de error en la petición
      },
    });
  });
}

//Devuelve correo, Tipo de correo, ID que se modifica en el index, usuario
let correosPart = getCorreo(
  "correo",
  "PART",
  "#emailParticularAjax",
  "lgalviz",
  "#correoPartAjax",
  "arrayEmailPart"
);
let correosFunc = getCorreo(
  "correo",
  "FUNC",
  "#emailFuncAjax",
  "lgalviz",
  "#correoFuncAjax",
  "arrayEmailFunc"
);
