function buscarCiudad(dpto) {
  return $.ajax({
    url: `${dptoEndpoint}${dpto}/ciudades`,
    type: "GET",
    success: function (data_dpto) {
      return data_dpto;
    },
    error: function (error) {
      return error;
    },
  });
}