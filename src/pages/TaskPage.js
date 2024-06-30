import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm'; // Importation du composant TaskForm
import TaskList from '../components/TaskList'; // Importation du composant TaskList
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Importation de l'icône Heroicons
import TaskContext from '../context/TaskContext'; // Importation du contexte TaskContext

// Composant TaskPage pour la gestion des tâches
const TaskPage = () => {
  const { tasks, setTasks, fetchTasks } = useContext(TaskContext); // Utilisation du contexte TaskContext
  const [showForm, setShowForm] = useState(false); // État pour afficher ou masquer le formulaire

  // Utilisation de useEffect pour récupérer les tâches lors du montage du composant
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Fonction pour ajouter une tâche
  const addTask = (task) => {
    axios.post('http://localhost:5000/tasks', task)
      .then(response => {
        setTasks([...tasks, response.data]);
      })
      .catch(error => console.error('Error adding task:', error));
  };

  // Fonction pour mettre à jour une tâche
  const updateTask = (updatedTask) => {
    axios.put(`http://localhost:5000/tasks/${updatedTask.id}`, updatedTask)
      .then(response => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? response.data : task));
      })
      .catch(error => console.error('Error updating task:', error));
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        {/* Titre de la page centré */}
        <h1 className="text-2xl font-bold text-center flex-1">Gestion des Tâches</h1>
        <div className="flex items-center">
          {/* Bouton pour afficher/masquer le formulaire d'ajout de tâche */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Annuler' : 'Ajouter'}
          </button>
          {/* Lien vers la page Timeline avec une icône */}
          <Link to="/timeline" className="flex items-center">
            <ArrowRightIcon className="w-8 h-8 text-blue-500 hover:text-green-700" />
          </Link>
        </div>
      </div>
      {/* Affichage conditionnel du formulaire d'ajout de tâche */}
      {showForm && <TaskForm addTask={addTask} existingTasks={tasks} />}
      {/* Affichage de la liste des tâches */}
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskPage;
