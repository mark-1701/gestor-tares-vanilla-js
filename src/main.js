import { Tarea } from './task.js';

const tareaForm = document.getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');
let tareas = [];

function addTask(descripcion) {
  const nuevaTarea = new Tarea(descripcion);
  tareas.push(nuevaTarea);
  renderTareas();
}

function renderTareas() {
  tareaList.innerHTML = '';
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea.descripcion;

    const eliminarbtn = document.createElement('button');
    eliminarbtn.textContent = 'Eliminar';
    eliminarbtn.classList.add('eliminar-btn');
    eliminarbtn.addEventListener('click', () => {
      eliminarTarea(tarea);
    });

    if (tarea.completado) li.classList.add('completada');

    li.addEventListener('click', () => {
      tarea.tareaCompletada();
      renderTareas();
    });

    li.appendChild(eliminarbtn);
    tareaList.appendChild(li);
  });
}

tareaForm.addEventListener('submit', event => {
  event.preventDefault();
  const descripcion = tareaInput.value.trim();
  if (descripcion !== '') {
    addTask(descripcion);
    tareaInput.value = '';
  }
});

function eliminarTarea(tareaEliminar) {
  tareas = tareas.filter(tarea => tarea !== tareaEliminar);
  renderTareas();
}

renderTareas();
