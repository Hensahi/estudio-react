



export const Lista = ({ tareas }) => {

const listItems = tareas.map(tarea => <li key={tarea.id}>
  Tarea #: {tarea.id} | {tarea.texto} {tarea.done ? "✅" : "⛔"}
</li>)
return <ul>{listItems}</ul>
};

