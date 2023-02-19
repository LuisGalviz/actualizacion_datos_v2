function getCorreo(typeInfo, type, idIndex, usr, idModal, dataArray) {
  window.localStorage.removeItem(dataArray);
  console.log(
    "The key '" + dataArray + "' has been removed from Local Storage."
  );

  let pidm = getPidm(usr);
  pidm.done(function (data) {
    $.ajax({
      type: "GET",
      url:
        `${pdimEndpoint}` +
        data["pidm"] +
        "/" +
        typeInfo,
      success: function (data2) {
        let html = "";
        let localData = [];

        data2.forEach((element) => {
          if (element["emailType"] === type) {
            if (!html) {
              $(idIndex).html(element["emailAddress"]);
            }

            html += `<div class='row'>
                      <input class='col-8' id='emailIdUpdate${element["internalRecordId"]}Value' type='email' placeholder='Contact email' value='${
                        element["emailAddress"]
                      }' readonly>
                      <button class='col-1 icon-button button_eliminar${type === "PART" ? "" : " disabled"}' id='${element["internalRecordId"]}'><i class="fa-solid fa-trash"></i></button>
                    </div>`;

            localData.push({
              id: element["internalRecordId"],
              email: element["emailAddress"],
              type: element["emailType"],
            });
          }
        });

        if (!html) {
          $(idIndex).html("NA");
          html = `<div class='row'>
                    <label style="margin: 20px; color: gray;">No emails yet</label>
                  </div>`;
        }
        $(idModal).html(html);
        localStorage.setItem(dataArray, JSON.stringify(localData));

        const storageEvent = new StorageEvent("storage", {
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

const correosPart = getCorreo(
  "correo",
  "PART",
  "#emailParticularAjax",
  userUn,
  "#correoPartAjax",
  "arrayEmailPart"
);
const correosFunc = getCorreo(
  "correo",
  "FUNC",
  "#emailFuncAjax",
  userUn,
  "#correoFuncAjax",
  "arrayEmailFunc"
);
