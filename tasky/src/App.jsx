import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {

    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { id: 3, title: "Tidy up", description: "Clean the living room", deadline: "Today", priority: "High" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
        />
  ))} 

    </div>
  );

}

export default App;
