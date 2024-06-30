import React, { useState } from 'react';

// Composant TaskItem pour afficher et modifier une tâche individuelle
const TaskItem = ({ task, updateTask, deleteTask }) => {
  // États locaux pour gérer l'édition des champs de la tâche
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);
  const [time, setTime] = useState(task.time);

  // Fonction pour gérer la sauvegarde des modifications
  const handleSave = () => {
    updateTask({ ...task, title, description, date, time });
    setIsEditing(false);
  };

  return (
    <li className="p-4 border-b border-gray-300">
      {isEditing ? (
        // Affichage du formulaire de modification
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Annuler
            </button>
          </div>
        </div>
      ) : (
        // Affichage de la tâche avec les boutons Modifier et Supprimer
        <div className="flex justify-between items-start">
          <div className="flex-grow text-left">
            <h2 className="font-bold text-xl mb-1">{task.title}</h2>
            <p className="text-gray-700 mb-1">{task.description}</p>
            <p className="text-gray-500">{task.date} à {task.time}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
            >
              Modifier
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Supprimer
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
