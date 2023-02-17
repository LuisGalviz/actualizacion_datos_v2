function getTel(typeInfo, type, idIndex, usr, idModal, dataArray) {
  let pidm = getPidm(usr);

  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url: `${pdimEndpoint}${data["pidm"]}/${typeInfo}`,
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
                  <select class='col-2 form-select-tel'>
                    <option value='${codePhone}'>${codePhone}</option>
                  </select>
                  <input class='col-6' type='number' placeholder='Número de contacto' name='numeroContacto' value='${phone}'>
                  <button class='col-1 icon-button button_eliminar' id='telIdDelete${seqPhone}'><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
                <button class='col-1  icon-button' id='telIdUpdate${seqPhone}'><i class='fa-solid fa-circle-check'></i></button>
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
  userUn,
  "#telPartAjax",
  "arrayTelPart"
);
let telTepe = getTel(
  "telefono",
  "TEPE",
  "#telTepeAjax",
  userUn,
  "#telTepAjax",
  "arrayTelTepe"
);
