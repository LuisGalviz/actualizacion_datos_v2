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
