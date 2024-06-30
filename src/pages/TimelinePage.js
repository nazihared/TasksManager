import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Importation de l'icône Heroicons
import TaskContext from '../context/TaskContext'; // Importation du contexte TaskContext

// Composant TimelinePage pour afficher les tâches sous forme de timeline
const TimelinePage = () => {
  const { tasks } = useContext(TaskContext); // Utilisation du contexte TaskContext
  const scrollRef = useRef(null); // Référence pour le défilement de la timeline

  // Tri des tâches par date et heure
  const sortedTasks = tasks
    .filter(task => true)
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Gestionnaire de défilement
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current;
      if (scrollTop === 0) {
        scrollToTop();
      }
    }
  };

  // Fonction pour obtenir la classe de couleur en fonction de la date et de l'heure de la tâche
  const getColorClass = task => {
    const taskDateTime = new Date(`${task.date}T${task.time}`);
    return taskDateTime < new Date() ? 'bg-red-200' : 'bg-green-200';
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        {/* Lien vers la page d'accueil avec une icône */}
        <Link to="/" className="flex items-center">
          <ArrowLeftIcon className="w-8 h-8 text-blue-500 hover:text-green-700 mr-2" />
        </Link>
        <h1 className="text-3xl font-bold text-center flex-1">Timeline des Tâches</h1>
        <div className="hidden"></div> {/* Placeholder for any other content */}
      </div>
      {/* Conteneur pour la timeline avec défilement */}
      <div
        ref={scrollRef}
        className="overflow-y-scroll max-w-3xl mx-auto h-[600px] shadow-lg rounded-lg p-4 border border-gray-300 bg-white"
        onScroll={handleScroll}
      >
        <ul className="space-y-4">
          {sortedTasks.map(task => (
            <li
              key={task.id}
              className={`p-4 rounded-lg shadow ${getColorClass(task)} border border-gray-200`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-grow text-left"> {/* Conteneur pour les détails de la tâche */}
                  <strong className="block text-lg">{task.title}</strong>
                  <p className="text-gray-600">{task.date} {task.time}</p>
                  <p className="mt-2">{task.description}</p>
                </div>
                <div className="flex flex-col items-end"> {/* Conteneur pour le statut */}
                  {new Date(`${task.date}T${task.time}`) < new Date() ? (
                    <span className="text-red-500 font-semibold">Passée</span>
                  ) : (
                    <span className="text-green-500 font-semibold">À venir</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelinePage;
