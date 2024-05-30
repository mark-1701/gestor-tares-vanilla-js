export function Tarea(descripcionTarea) {
  this.descripcion = descripcionTarea;
  this.completado = false;
}

Tarea.prototype.tareaCompletada = function () {
  this.completado = !this.completado;
};
