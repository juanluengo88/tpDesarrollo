class Reserva {
    constructor({
      fechaAlta,
      huespedReservador,
      cantHuespedes,
      alojamiento,
      rangoFechas,
      estado,
      precioPorNoche
    }) {
      this.fechaAlta = fechaAlta;
      this.huespedReservador = huespedReservador;
      this.cantHuespedes = cantHuespedes;
      this.alojamiento = alojamiento;
      this.rangoFechas = rangoFechas;
      this.estado = estado;
      this.precioPorNoche = precioPorNoche;
    }
  
    actualizarEstado(estadoReserva) {}
  }
  
  export default Reserva;
  