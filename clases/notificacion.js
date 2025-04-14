class Notificacion {
  constructor({ mensaje, usuario, fechaAlta, leida = false, fechaLeida = null }) {
    this.mensaje = mensaje;
    this.usuario = usuario;
    this.fechaAlta = fechaAlta;
    this.leida = leida;
    this.fechaLeida = fechaLeida;
  }

  marcarComoLeida() {
    this.leida = true;
    this.fechaLeida = new Date();
  }
}

export default Notificacion;
