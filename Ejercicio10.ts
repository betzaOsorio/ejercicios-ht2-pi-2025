enum Prioridad{
    alta, 
    media, 
    baja
}

enum EstadoTarea{
    pendiente, 
    en_progreso, 
    finalizado
}

interface Tarea{
    id:number,
    titulo: string,
    completada: boolean,
    prioridad: Prioridad,
    estado: EstadoTarea
}

class GestorTareas{
    private tareas: Tarea[] = []

    agregarTarea(titulo: string, prioridad: Prioridad): void {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo,
            completada:false,
            prioridad,
            estado: EstadoTarea.pendiente
        }
        this.tareas.push(nuevaTarea)
    }

    listarTareas(): void{
        this.tareas.forEach(tarea =>{
            const prioridadText = this.convertirPrioridad(tarea.prioridad)
            const estadoText = this.convertirEstado(tarea.estado)


            console.log(prioridadText + tarea.titulo + "-Estado:" +estadoText)
        })
    }
    private convertirPrioridad(prioridad: Prioridad): string {
    switch (prioridad) {
      case Prioridad.alta: return "Alta";
      case Prioridad.media: return "Media";
      case Prioridad.baja: return "Baja";
      default: return "";
    }
  }

  private convertirEstado(estado: EstadoTarea): string {
    switch (estado) {
      case EstadoTarea.pendiente: return "Pendiente";
      case EstadoTarea.en_progreso: return "En progreso";
      case EstadoTarea.finalizado: return "Finalizada";
      default: return "";
    }
  }

} 

const gestor = new GestorTareas();

gestor.agregarTarea("Estudiar para el parcial", Prioridad.alta);
gestor.agregarTarea("Hacer ejercicio", Prioridad.media);
gestor.agregarTarea("Leer un libro", Prioridad.baja);

gestor.listarTareas();

