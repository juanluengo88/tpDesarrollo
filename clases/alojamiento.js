const RangoFechas = require("./rangoFechas.js");

class Alojamiento {
  constructor({ anfitrion, nombre, descripcion, precioPorNoche, moneda, horarioCheckIn, horarioCheckOut, direccion, cantHuespedesMax, caracteristicas = [], reservas = [], fotos = [] }) {
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
    for (const reserva of this.reservas) {
      const fechaInicio = reserva.rangoFechas.fechaInicio;
      const fechaFin = reserva.rangoFechas.fechaFin;

      if (fechaInicio <= rangoDeFechas.fechaFin && fechaFin >= rangoDeFechas.fechaInicio) {
        return false;
      }
    }

    return true;
  }
  tuPrecioEstaDentroDe(valorMinimo, valorMaximo) {
    return this.precioPorNoche <= valorMaximo && this.precioPorNoche >= valorMinimo;
  }

  tenesCaracteristica(caracteristica) {
    return this.caracteristicas.includes(caracteristica);
  }

  puedenAlojarse(cantHuespedes) {
    return this.cantHuespedesMax >= cantHuespedes;
  }
}

export default Alojamiento;
