import './global.css'
import './styles.css'
import { IoMdAdd, IoIosClose } from 'react-icons/io'

function App() {
  return (
    <div className='app'>
      <div className='todo'>
        <header>
          
          <input type="text"/>
          
          <button><IoMdAdd/></button>
        
        </header>
        
        <div className='task-container'>
          <div className='check-and-title'>

            <label className='checkbox-container'>
              <input type="checkbox" />

              <span className='checkmark'></span>
            </label>

            <p>Criar abitos</p>

          </div>

          <div>
            <IoIosClose />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
