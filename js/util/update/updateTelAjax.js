window.addEventListener("storage", function (event) {
  if (event.key === "arrayTelPart" || event.key === "arrayTelTepe") {
    let data = JSON.parse(localStorage.getItem(event.key));
    data.forEach((element) => {
      $(document).on("click", `#telIdUpdate${element["id"]}`, function () {
        const telNuevo = document.getElementById(
          `telIdUpdate${element["id"]}Value`
        ).value;
        const codeTel = document.getElementById(
          `codePhone${element["id"]}`
        ).value;
        element.tel = telNuevo;
        element.intlAccess=codeTel;
        localStorage.setItem(event.key, JSON.stringify(data));
        updateButton(
          element["id"],
          element["type"],
          "telefono",
          telNuevo,
          codeTel,
          element["phoneExt"]
        );
      });
    });
  }
});
function updateButton(infoId, typeInfo, typeRequest, tel, codeTel, PHoneExt) {
  updateInput(infoId);
  let myHeaders = new Headers({
    "Content-Type": "application/json",
    Cookie: "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000",
  });

  let raw =
    typeInfo === "CELU"
      ? JSON.stringify({
          pidm: pidmUserUn,
          phoneType: typeInfo,
          sequence: infoId,
          phoneArea: "",
          phoneNumber: tel,
          phoneExt: PHoneExt,
          intlAccess: codeTel,
        })
      : JSON.stringify({
          pidm: pidmUserUn,
          phoneType: typeInfo,
          sequence: infoId,
          phoneArea: codeTel,
          phoneNumber: tel,
          phoneExt: PHoneExt,
          intlAccess: "",
        });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const fetchUrl = `${Endpoint}${typeRequest}`;
  fetch(fetchUrl, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      typeInfo === "CELU"
        ? $("#telParticularAjax").html(tel)
        : $("#telTepeAjax").html(tel);
    });
}

//Update Imput
function updateInput(id) {
  const input = document.getElementById(`telIdUpdate${id}Value`);
  const input2 = document.getElementById(`codePhone${id}`);
  input.classList.add("update");
  input.addEventListener("animationend", () => {
    input.classList.remove("update");
  });

  input2.classList.add("update");
  input2.addEventListener("animationend", () => {
    input2.classList.remove("update");
  });
}
