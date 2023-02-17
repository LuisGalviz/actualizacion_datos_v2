function getPidm(usuario) {
  return $.ajax({
    type: "GET",
    headers:{
      
    },
    url:
      "https://intunqa.uninorte.edu.co/sba-personas/api/v1/persona/pidm/usuario/" +
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
