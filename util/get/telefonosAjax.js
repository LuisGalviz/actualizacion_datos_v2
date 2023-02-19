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
            let seqPhone = element["seq"];
            let codePhone;
            if (type == "CELU") {
              codePhone = element["intlAccess"];
              getCode("paisesTel.json", `#codePhone${seqPhone}`);      
            } else {
              codePhone = element["phoneArea"];
              getCode("fijoTel.json", `#codePhone${seqPhone}`);
            }

            let phone = element["phoneNumber"];

            if (localData.length === 0) {
              $(idIndex).html(phone);
            }

            html += `
              <div class='row'>
                  <select class='col-2 form-select-tel' id='codePhone${seqPhone}'>
                    <option value='${codePhone}'>${codePhone}</option>
                  </select>
                  <input class='col-6' type='number' id='telIdUpdate${seqPhone}Value' placeholder='Número de contacto' name='numeroContacto' value='${phone}'>
                  <button class='col-1 icon-button button_eliminar' id='telIdDelete${seqPhone}'><i class="fa-solid fa-trash"></i></button>
                <button class='col-1  icon-button' id='telIdUpdate${seqPhone}'><i class='fa-solid fa-circle-check'></i></button>
              </div>
            `;

            localData.push({
              id: seqPhone,
              type: type,
              tel: phone,
              phoneArea: element["phoneArea"],
              phoneExt: element["phoneExt"],
              intlAccess: element["intlAccess"],
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

function getCode(url, id) {
  $.getJSON(`../../assets/${url}`, function (data) {
    $.each(data, function (key, value) {
      $(id).append(
        $("<option>", {
          value: value.codigo,
          text: value.codigo,
        })
      );
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

getCode("paisesTel.json", "#inputCodPartAjax");
getCode("fijoTel.json", "#inputCodTepeAjax");