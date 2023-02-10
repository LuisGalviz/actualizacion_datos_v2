function buscarPais() {
  return $.ajax({
    url: "../../assets/paises.json",
    type: "GET",
    success: function (data) {
      return data;
    },
    error: function (error) {
      return error;
    },
  });
}
