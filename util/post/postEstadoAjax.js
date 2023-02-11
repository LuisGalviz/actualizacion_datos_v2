$(document).ready(function () {
  $("#buttonEstado").click(function () {
    letselectedRadio = $("input[name='choice']:checked");
    letradioValue = selectedRadio.val();
    //    console.log(radioValue);

    letmyHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append(
      "Cookie",
      "BIGipServerPool_Int_Personas_QA=1477316780.18467.0000"
    );

    if ($("#estadoAjax").html().length > 0) {
      letraw = JSON.stringify({
        pidm: "218436",
        employmentStatus: radioValue,
      });

      letrequestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/estadolaboral",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      letraw = JSON.stringify({
        pidm: "218436",
        employmentStatus: radioValue,
        dataOrigin: "APPMOVIL",
      });
      letrequestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/218436/estadolaboral",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  });
});
