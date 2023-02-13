function getTel(typeInfo, type, idIndex, usr, idModal,dataArray) {
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
        let localData = [];
        data2.forEach((element) => {
          let codePhone = element["intlAccess"];
          let seqPhone = element["seq"];
          let phoneType = element["phoneType"];
          if (phoneType == type) {
            let phone = element["phoneNumber"];
            if (cont > 0) {
              $(idIndex).html(phone);
              cont--;
            }
            //  console.log(element);

            html += `<div class='row'>`;
            html += `<div class='column-2 leftTel'>`;
            html += `<select class='custom-select'>`;
            html += `<option value='${codePhone}'>${codePhone}</option>`;
            html += "</select>";
            html += "</div>";
            html += `<div class='column-2 right'>`;
            html += `<input class='right' type='number' placeholder='Número de contacto' name='numeroContacto' value='${phone}'>`;
            html += "</div>";
            html += `<div class='column-2'>`;
            html += `<input type='button' value='-' id='telIdDelete${seqPhone}' class='button_eliminar'>`;
            html += "</div>";
            html += "</div>";
            $(idModal).html(html);
            localData.push({
              id: seqPhone,
              type: phoneType,
            });
          }
        });
        localStorage.setItem(dataArray, JSON.stringify(localData));

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
let telPart = getTel(
  "telefono",
  "CELU",
  "#telParticularAjax",
  "lgalviz",
  "#telPartAjax",
  "arrayTelPart"
);
let telTepe = getTel(
  "telefono",
  "TEPE",
  "#telTepeAjax",
  "lgalviz",
  "#telTepAjax",
  "arrayTelTepe"
);
