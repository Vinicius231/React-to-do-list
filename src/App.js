import "./App.css";
import { useState, useEffect } from "react";
import Tarefa from "./components/Tarefa";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [arrayTarefa, setArrayTarefa] = useState([]);

  const addTarefa = () => {
    if (!tarefa) return;

    setArrayTarefa([...arrayTarefa, tarefa]);
    setTarefa("");
  };

  useEffect(()=>{
    document.addEventListener('keydown',(e)=> {
      if(e.key == 'Enter') {
        addTarefa()
      }
    })
  },[tarefa])
  

  return (
    <div className="App">
      <h1>To do List</h1>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={addTarefa}>+</button>

      <div className="container-tarefas">
        {arrayTarefa.map((el, i) => {
          return (
            <Tarefa
              key={i}
              id={i}
              tarefa={el}
              array={arrayTarefa}
              task={setTarefa}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
