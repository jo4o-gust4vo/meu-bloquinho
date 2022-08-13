import { useState } from "react";

function App() {
 
  const [task, setTask] = useState("")   

  const [tempo, setTempo] = useState(0)

  const [listaTarefas, setListaTarefas] = useState([])
 
  
  function adiocionarNota(){

    const novaTarefa = {
      task,
      tempo

    }

    setListaTarefas([...listaTarefas, novaTarefa])


  }
  
  
  
  
  function handleInputs(evento){
    if(evento.target.name == "task"){
      console.log(evento.target.value)

      setTask(evento.target.value)

    }else{
      //console.log
      console.log(evento.target.value)
      setTempo(evento.target.value)
    }
  
  }
  
  return (
        
     
        <>

            <h1>Bloco de notas </h1>

            <label>nota</label> 
          <input name="task" onChange={handleInputs} type="text" />

          <label>tempo</label> 
          <input name="tempo" onChange={handleInputs} type="number"/>

          <button onClick={adiocionarNota}>Adcionar notas</button>




          { listaTarefas.map((value, index)=>{
            return(
              <div key={index}>
                <h3>{value.task}</h3>
                <h3>{value.tempo}</h3>

              </div>
            )

          })}

        </>
  );
}

export default App;
