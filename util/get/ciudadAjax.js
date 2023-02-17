function buscarCiudad(dpto) {
  return $.ajax({
    url: `https://tananeoqa.uninorte.edu.co/PoblacionWS/api/rupe/paises/COL/departamentos/${dpto}/ciudades`,
    type: "GET",
    headers: {
    },
    success: function (data_dpto) {
      return data_dpto;
    },
    error: function (error) {
      return error;
    },
  });
}
