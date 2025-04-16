
class Reserva {
  constructor({ fechaAlta, huespedReservador, cantHuespedes, alojamiento, rangoFechas, estado, precioPorNoche }) {
    this.fechaAlta = fechaAlta;
    this.huespedReservador = huespedReservador;
    this.cantHuespedes = cantHuespedes;
    this.alojamiento = alojamiento;
    this.rangoFechas = rangoFechas;
    this.estado = estado;
    this.precioPorNoche = precioPorNoche;
    this.motivo="";
    crearSegunReserva(this);
  }

  actualizarEstado(estadoReserva) {
    this.estado = estadoReserva.estado;
    this.fechaAlta= estadoReserva.fecha;
    this.huespedReservador=estadoReserva.usuario;
    this.motivo=estadoReserva.motivo;
  }
}

export default Reserva;
