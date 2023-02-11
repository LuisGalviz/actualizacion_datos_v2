let data1 = JSON.parse(localStorage.getItem("arrayEmailPart"));
let data2 = JSON.parse(localStorage.getItem("arrayEmailFunc"));
console.log(data1);
console.log(data2);

data1.forEach((element) => {
  $(document).ready(function () {
    let invalidId = element["id"];
    let escapedId = jQuery.escapeSelector(invalidId);
    $(document).on("click", "#" + escapedId, function () {
      delTel(element["email"], element["type"]);
    });
  });
});

function delTel(email, type) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
  );

  let raw = JSON.stringify({
    pidm: "218436",
    emailType: type,
    emailAddress: email,
    dataOrigin: "",
  });

  let requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/correo",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
    location.reload();
}
