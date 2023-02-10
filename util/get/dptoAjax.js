function buscarDpto() {
  return $.ajax({
    url: "../../assets/dpto.json",
    type: "GET",
    success: function (data_dpto) {
        return data_dpto;
    },
    error: function (error) {
      return error;
    },
  });
}
