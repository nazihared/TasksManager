import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Création du contexte pour les tâches
const TaskContext = createContext();

// Fournisseur de contexte pour les tâches
export const TaskProvider = ({ children }) => {
  // État pour stocker les tâches
  const [tasks, setTasks] = useState([]);

  // Fonction pour récupérer les tâches à partir du backend
  const fetchTasks = () => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  // Utilisation de useEffect pour récupérer les tâches au chargement du composant
  useEffect(() => {
    fetchTasks();
  }, []);

  // Retourne le contexte avec les valeurs et les méthodes nécessaires
  return (
    <TaskContext.Provider value={{ tasks, setTasks, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
