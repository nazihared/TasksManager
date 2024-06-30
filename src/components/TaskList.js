import React from 'react';
import TaskItem from './TaskItem'; // Importation du composant TaskItem
import TaskForm from './TaskForm'; // Importation du composant TaskForm

// Composant TaskList pour afficher une liste de tâches
const TaskList = ({ tasks, updateTask, deleteTask, addTask }) => {
  console.log('TaskList addTask:', addTask); // Affichage de la fonction addTask dans la console (peut être supprimé en production)

  return (
    <div>
      <ul className="divide-y divide-gray-300 max-w-screen-lg mx-auto px-4">
        {tasks.map((task) => (
          <li key={task.id} className="py-4">
            {/* Affichage de chaque tâche avec le composant TaskItem */}
            <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
