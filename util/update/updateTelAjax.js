$(document).ready(function () {
  window.addEventListener("storage", function (event) {
    if (event.key === "arrayTelPart" || event.key === "arrayTelTepe") {
      let data1 = JSON.parse(localStorage.getItem(event.key));
      data1.forEach((element) => {
        $(document).on("click", `#telIdUpdate${element["id"]}`, function () {
          console.log("telIdUpdate" + element["id"] + " update");
          const telNuevo = document.getElementById(
            `telIdUpdate${element["id"]}Value`
          ).value;
          const codeTel = document.getElementById(
            `codePhone${element["id"]}`
          ).value;

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
    console.log(tel);
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
    console.log(raw);
    const fetchUrl = `${Endpoint}${typeRequest}`;
    console.log(fetchUrl);
    fetch(fetchUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (typeInfo === "CELU") {
          getTel(
            "telefono",
            "CELU",
            "#telParticularAjax",
            userUn,
            "#telPartAjax",
            "arrayTelPart"
          );
        } else if (typeInfo === "TEPE") {
          getTel(
            "telefono",
            "TEPE",
            "#telTepeAjax",
            userUn,
            "#telTepAjax",
            "arrayTelTepe"
          );
        }
      });
  }
});
