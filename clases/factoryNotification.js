class FactoryNotificacion {
  crearSegunReserva(reserva) {
    const estado = reserva.estado;
    const anfitrion = reserva.alojamiento.anfitrion;
    const huesped = reserva.huespedReservador;
    const alojamiento = reserva.alojamiento;
    const diasReserva = Math.ceil(reserva.rangoFechas.fechaFin - reserva.rangoFechas.fechaInicio / (1000 * 60 * 60 * 24));

    var mensaje = "";
    var usuario = null;

    switch (estado) {
      case EstadoReserva.PENDIENTE:
        mensaje = `${huesped.nombre} reservó ${alojamiento.nombre} para el ${reserva.rangoFechas.fechaInicio}, por ${diasReserva} dias.`;
        usuario = anfitrion;
        break;
      case EstadoReserva.CONFIRMADA:
        mensaje = `reserva de ${alojamiento.nombre} confirmada.`;
        usuario = huesped;
        break;
      case EstadoReserva.CANCELADA:
        mensaje = `reserva de ${alojamiento.nombre} cancelada.`;
        usuario = anfitrion;
        break;
    }

    return new Notificacion(mensaje, usuario, new Date());
  }
}

export default FactoryNotificacion;
