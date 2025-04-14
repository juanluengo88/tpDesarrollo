class Notificacion {
    constructor({ mensaje, usuario, fechaAlta, leida = false, fechaLeida = null }) {
      this.mensaje = mensaje;
      this.usuario = usuario;
      this.fechaAlta = fechaAlta;
      this.leida = leida;
      this.fechaLeida = fechaLeida;
    }
  
    marcarComoLeida() {}
  }
  
  export default Notificacion;
  