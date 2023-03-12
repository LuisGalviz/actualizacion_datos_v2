function getCorreo(typeInfo, type, idIndex, idModal, dataArray) {
  window.localStorage.removeItem(dataArray);
  console.log(
    "The key '" + dataArray + "' has been removed from Local Storage."
  );

  $.ajax({
    type: "GET",
    url: `${pdimEndpoint}${pidmUserUn}/${typeInfo}`,
    success: function (data2) {
      let html = "";
      let localData = [];

      data2.forEach((element) => {
        if (element["emailType"] === type) {
          if (!html) {
            $(idIndex).html(element["emailAddress"]);
          }

          html += `<div class='row center-checkbox' id='div${
            element["internalRecordId"]
          }'>
                      <input class='col-10'  type='email' placeholder='Contact email' value='${
                        element["emailAddress"]
                      }' readonly>
                      <button class='col-2 icon-button button_eliminar${
                        type === "PART" ? "" : " disabled"
                      }' id='${
            element["internalRecordId"]
          }'><i class="fa-solid fa-trash"></i></button>
                    </div>`;

          localData.push({
            id: element["internalRecordId"],
            email: element["emailAddress"],
            type: element["emailType"],
          });

          const mesesDiff = dateCalculate(element["activityDate"]);

          // Verificar si la diferencia es menor de 6 meses
          if (mesesDiff < 6) {
            if (type === "PART") {
              $(".container_form:eq(0) .gotham_p5:first").css(
                "color",
                "rgb(0, 160, 0)"
              );
              $(
                ".container_form:eq(0) .fa-solid.fa-triangle-exclamation:first"
              ).hide();
            } else {
              $(".container_form:eq(0) .gotham_p5:eq(1)").css(
                "color",
                "rgb(0, 160, 0)"
              );
              $(
                ".container_form:eq(0) .fa-solid.fa-triangle-exclamation:eq(1)"
              ).hide();
            }
          }
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
}

$(function () {
  getCorreo(
    "correo",
    "PART",
    "#emailParticularAjax",
    "#correoPartAjax",
    "arrayEmailPart"
  );
  getCorreo(
    "correo",
    "FUNC",
    "#emailFuncAjax",
    "#correoFuncAjax",
    "arrayEmailFunc"
  );
});
/*
$(function () {
  getMyPimdUser().then(function () {
    getCorreo(
      "correo",
      "PART",
      "#emailParticularAjax",
      "#correoPartAjax",
      "arrayEmailPart"
    );
    getCorreo(
      "correo",
      "FUNC",
      "#emailFuncAjax",
      "#correoFuncAjax",
      "arrayEmailFunc"
    );
  });
});
*/
