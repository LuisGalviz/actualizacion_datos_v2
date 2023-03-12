let data1;
window.addEventListener("storage", function (event) {
  if (event.key === "arrayEmailPart") {
    data1 = JSON.parse(localStorage.getItem(event.key));
    data1.forEach((element) => {
      let escapedId = jQuery.escapeSelector(element["id"]);
      $(document).on("click", `#${escapedId}`, function (event) {
        //event.preventDefault();
        // if (confirm("¿Estás seguro que deseas modificar?"))
        delButton(element["email"], element["type"], "correo", escapedId);
      });
    });
  }
  if (event.key === "arrayTelPart" || event.key === "arrayTelTepe") {
    data1 = JSON.parse(localStorage.getItem(event.key));
    data1.forEach((element) => {
      $(document).on("click", `#telIdDelete${element["id"]}`, function (event) {
        //   event.preventDefault();
        // if (confirm("¿Estás seguro que deseas modificar?"))
        delButton(element["id"], element["type"], "telefono", element["id"]);
      });
    });
  }
});

function delButton(infoId, typeInfo, typeRequest, inputId) {
  typeRequest === "correo"
    ? deleteInput(inputId)
    : deleteInputTel(inputId, typeInfo);
  let myHeaders = new Headers({
    "Content-Type": "application/json",
    Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
  });

  let raw =
    typeRequest === "correo"
      ? JSON.stringify({
          pidm: pidmUserUn,
          emailType: typeInfo,
          emailAddress: infoId,
          dataOrigin: "",
        })
      : JSON.stringify({
          pidm: pidmUserUn,
          phoneType: typeInfo,
          sequence: infoId,
          dataOrigin: "",
        });

  let requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const fetchUrl = `${Endpoint}${typeRequest}`;

  fetch(fetchUrl, requestOptions)
    .then((response) => response.text())
    .then((result) => {});
}

//delete input
function deleteInput(id) {
  let idSinBarra = id.replace(/\\/g, "");
  const input = document.getElementById(`div${idSinBarra}`);
  let correoStorage = JSON.parse(window.localStorage.getItem("arrayEmailPart"));
  const result = removeById(correoStorage, idSinBarra);
  result[0]
    ? $("#emailParticularAjax").html(result[0].email)
    : $("#emailParticularAjax").html("NA");
  localStorage.setItem("arrayEmailPart", JSON.stringify(result));
  input.classList.add("delete");
  input.addEventListener("animationend", () => {
    input.value = "";
    input.classList.remove("delete");
    input.remove();
  });
}
function deleteInputTel(id, type) {
  let storage, indexTelId;
  if (type == "CELU") {
    storage = "arrayTelPart";
    indexTelId = "telParticularAjax";
  } else {
    storage = "arrayTelTepe";
    indexTelId = "telTepeAjax";
  }

  const input = document.getElementById(`div${id}`);
  let telStorage = JSON.parse(window.localStorage.getItem(storage));
  const result = removeById(telStorage, id);
  result[0]
    ? $(`#${indexTelId}`).html(result[0].tel)
    : $(`#${indexTelId}`).html("NA");
  localStorage.setItem(storage, JSON.stringify(result));
  input.classList.add("delete");
  input.addEventListener("animationend", () => {
    input.value = "";
    input.classList.remove("delete");
    input.remove();
  });
}

const removeById = (array, id) => array.filter((item) => item.id !== id);
