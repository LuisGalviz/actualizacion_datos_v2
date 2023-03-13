$(document).ready(function () {
  $("#conditions").change(function () {
    if ($(this).is(":checked")) {
      $(".gotham_p5").css("color", "rgb(0, 160, 0)");
      $(".fa-solid.fa-triangle-exclamation").hide();
      $("#errorMessageConfirmar").hide();
    } else {
      $(".gotham_p5").css("color", "rgb(209, 10, 17)");
      $(".fa-solid.fa-triangle-exclamation").show();
    }
  });

  $("#submit-button").click(function () {
    let decider = $("#conditions");
    if (!decider.is(":checked")) {
      $("#errorMessageConfirmar").show();
    } else {
      $("#formulario-actualizacion").hide();
      $("#mensaje-agradecimiento").show();
    }
  });

  $("#back-button-msj").click(function () {
    $("#formulario-actualizacion").show();
    $("#mensaje-agradecimiento").hide();
  });
});

//ABRIR NUEVO MODAL
function modal(modal) {
  let $boton = $(modal);
  if ($boton.css("display") === "none" || $boton.css("display") === "") {
    $(modal).css("display", "flex");
  }
}

//CERRAR MODAL
function clickClose(modal) {
  $(modal).css("display", "none");
}

function greenInputConfirm(elementId, elementId2, modal) {
  $(elementId).css("color", "rgb(0, 160, 0)");
  $(elementId2).css("display", "none");
  $(modal).css("display", "none");
}

//loading
window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.className += " oculto"; // añade la clase "oculto" al div loader después de 1 segundo
  }, 3000);
});

//fecha
function dateCalculate(element) {
  const fechaUltimaModificacion = element.split(" ").shift();
  // Convertir las fechas en objetos Date
  // Dividir la fecha en un arreglo y cambiar el orden de los elementos
  const fechaArreglo = fechaUltimaModificacion.split("-");
  const nuevaFechaArreglo = [fechaArreglo[1], fechaArreglo[0], fechaArreglo[2]];

  // Unir los elementos del arreglo en la nueva fecha
  const nuevaFecha = nuevaFechaArreglo.join("-");

  // Convertir las fechas en objetos Date
  const fechaObj2 = new Date(nuevaFecha.replace(/-/g, "/"));

  const fechaObj3 = new Date(ultimaFecha.replace(/-/g, "/"));

  if ((fechaObj2 - fechaObj3) / (1000 * 60 * 60 * 24 * 30) > 0) {
    ultimaFecha = nuevaFecha;
    $("#fecha-ultima-actualizacion").html(
      `Última actualización: ${ultimaFecha}. <br> Aquellos marcados con <i class="fa fa-warning fa_custom red_p"></i> podrían estar desactualizados.`
    );
  }

  // Calcular la diferencia en meses
  const mesesDiferencia = (fechaObj1 - fechaObj2) / (1000 * 60 * 60 * 24 * 30);
  // Verificar si la diferencia es menor de 6 meses y mostrar mensaje
  return mesesDiferencia;
}

//validar confirmar telefonos
$("#confirmarTelefonoParticular").click(function () {
  let data = JSON.parse(localStorage.getItem("arrayTelPart"));
  let valid = data.map((element) => {
    const telNuevo = document.getElementById(
      `telIdUpdate${element["id"]}Value`
    ).value;
    const codeTel = document.getElementById(`codePhone${element["id"]}`).value;
    return element.tel == telNuevo && element.intlAccess == codeTel;
  });

  const allTrue = valid.every((element) => element === true);

  if (allTrue) {
    $("#errorMessageConfirmarTelPart").hide();
    greenInputConfirm(
      "#button3 .gotham_p5",
      "#button3 .fa-solid",
      ".bg-modal-3"
    );
  } else {
    $("#errorMessageConfirmarTelPart").show();
  }
});
