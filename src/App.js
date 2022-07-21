import  { useState } from 'react';
import './global.css'
import './styles.css'
import { IoMdAdd, IoIosClose } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [task, setTask] = useState("")

  const [tasks, setTasks] = useState([])

  function handleCreateTask() {
    if(task === "") {

      toast.error("Digite uma tarefa")

    }else {

      const idRandom = (num) => Math.floor(Math.random() * num)

      const newTask = { id: idRandom(1204334) , title: task , isComplete: false }

      setTasks([ ...tasks, newTask ])
      setTask("")

    }
  }

  return (
    <div className='app'>

      <ToastContainer />

      <div className='todo'>
        <header>
          
          <input type="text" value={task} onChange= {(ev) => setTask(ev.target.value)} />
          
          <button onClick={handleCreateTask} ><IoMdAdd /></button>
        
        </header>

        {tasks.map(task =>(
          <div key={task.id} className='task-container'>
            <div className='check-and-title'>

              <label className='checkbox-container'>
                <input type="checkbox" />

                <span className='checkmark'></span>
              </label>

              <p>{task.title}</p>

            </div>

            <div>
              <IoIosClose />
            </div>
        </div>
        ))}
        
      </div>

    </div>
  );
}

export default App;
