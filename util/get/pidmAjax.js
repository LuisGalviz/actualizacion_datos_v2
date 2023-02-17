function getPidm(usuario) {
  return $.ajax({
    type: "GET",
    url:
      `${pdimEndpoint}usuario/` +
      usuario,
    success: function (data) {
      return data;
    },
    error: function (error) {
      return error;
      // Acción a realizar en caso de error en la petición
    },
  });
}
