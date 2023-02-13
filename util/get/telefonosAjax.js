function getTel(typeInfo, type, idIndex, usr, idModal, dataArray) {
  let pidm = getPidm(usr);

  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url: `https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/${data["pidm"]}/${typeInfo}`,
      success: function (data2) {
        let html = "";
        let localData = [];

        data2.forEach((element) => {
          if (element["phoneType"] === type) {
            let codePhone = element["intlAccess"];
            let seqPhone = element["seq"];
            let phone = element["phoneNumber"];

            if (localData.length === 0) {
              $(idIndex).html(phone);
            }

            html += `
              <div class='row'>
                <div class='column-2 leftTel'>
                  <select class='custom-select'>
                    <option value='${codePhone}'>${codePhone}</option>
                  </select>
                </div>
                <div class='column-2 right'>
                  <input class='right' type='number' placeholder='Número de contacto' name='numeroContacto' value='${phone}'>
                </div>
                <div class='column-2'>
                  <input type='button' value='-' id='telIdDelete${seqPhone}' class='button_eliminar'>
                </div>
              </div>
            `;

            localData.push({
              id: seqPhone,
              type: type,
              tel: phone,
            });
          }
        });

        if (localData.length === 0) {
          $(idIndex).html("NA");
          html += `
            <div class='row'>
              <label style="
                margin: 20px;
                color: gray;
              ">Aún no tiene Telefonos</label>
            </div>
          `;
        }

        $(idModal).html(html);
        localStorage.setItem(dataArray, JSON.stringify(localData));

        let storageEvent = new StorageEvent("storage", {
          key: dataArray,
          newValue: JSON.stringify(localData),
          url: window.location.href,
        });
        window.dispatchEvent(storageEvent);
      },
      error: function (error) {
        return error;
      },
    });
  });
}

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
