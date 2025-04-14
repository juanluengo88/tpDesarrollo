const RangoFechas= require("./rangoFechas.js")


class Alojamiento {
    constructor({
      anfitrion,
      nombre,
      descripcion,
      precioPorNoche,
      moneda,
      horarioCheckIn,
      horarioCheckOut,
      direccion,
      cantHuespedesMax,
      caracteristicas = [],
      reservas = [],
      fotos = []
    }) {
      this.anfitrion = anfitrion;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precioPorNoche = precioPorNoche;
      this.moneda = moneda;
      this.horarioCheckIn = horarioCheckIn;
      this.horarioCheckOut = horarioCheckOut;
      this.direccion = direccion;
      this.cantHuespedesMax = cantHuespedesMax;
      this.caracteristicas = caracteristicas;
      this.reservas = reservas;
      this.fotos = fotos;
    }
  
    estasDisponibleEn(rangoDeFechas) {
      
    }
    tuPrecioEstaDentroDe(valorMinimo, valorMaximo) {}
    tenesCaracteristica(caracteristica) {}
    puedenAlojarse(cantHuespedes) {}
  }
  
  export default Alojamiento;
  