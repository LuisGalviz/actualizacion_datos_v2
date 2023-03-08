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

function greenInputConfirm(elementId, modal) {
  $(elementId).css("color", "rgb(0, 160, 0)");
  $(modal).css("display", "none");
}