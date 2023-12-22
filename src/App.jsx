

// Importaciones y set-up inicial

import TaskList from '../components/TaskList';

import Header from '../components/Header';

// Array con listado de las tareas

const list = [
  {
    description: "Buy a new gaming laptop",
    isCompleted: false
  },
  {
    description: "Complete a previous task",
    isCompleted: false
  },
  {
    description: "Create video for YouTube",
    isCompleted: true
  },
  {
    description: "Create a new portfolio site",
    isCompleted: true
  }
];

function App() {

  return (
      <div>
        <Header />
        <TaskList list={list} />
      </div>
  )
}

// Exportaciones

export default App;
