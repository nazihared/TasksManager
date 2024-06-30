import React, { useState, useEffect } from 'react';

// Composant TaskForm pour ajouter de nouvelles tâches
const TaskForm = ({ addTask, existingTasks = [] }) => {
  // États locaux pour stocker les valeurs des champs de saisie
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [nextId, setNextId] = useState(1);

  // Utilisation de useEffect pour définir l'ID suivant à utiliser pour une nouvelle tâche
  useEffect(() => {
    const maxId = existingTasks.reduce((max, task) => Math.max(max, task.id), 0);
    setNextId(maxId + 1);
  }, [existingTasks]);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: nextId, title, description, date, time };
    addTask(newTask);
    // Réinitialisation des champs du formulaire après soumission
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setNextId(nextId + 1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-sm mx-auto bg-white shadow-md rounded px-4 py-3">
      {/* Champ de saisie pour le titre */}
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="title">
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entrez le titre"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Champ de saisie pour la description */}
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Entrez la description"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
        />
      </div>

      {/* Champ de saisie pour la date */}
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Champ de saisie pour l'heure */}
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="time">
          Heure
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Bouton pour soumettre le formulaire */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
