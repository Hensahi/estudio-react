<<<<<<< HEAD
// export const Lista = ({ tareas }) => {
//   return tareas.map((tarea) => {tarea.done ? <li>{tarea.texto "✅"} </li> : <li> {tarea.texto "⛔"} </li>});
// };
=======




export const Lista = ({ tareas }) => {

const listItems = tareas.map(tarea => <li key={tarea.id}>
  Tarea #: {tarea.id} | {tarea.texto} {tarea.done ? "✅" : "⛔"}
</li>)
return <ul>{listItems}</ul>
};

>>>>>>> 495c7f2bde44cf1b52c55288f11218942f81503d
