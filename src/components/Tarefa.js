import styleTarefa from "./styles/styleTarefa.css";
import verificar from "./imgs/verificar.png";
import deletar from "./imgs/deletar.png";
import { useState } from "react";

export default function Tarefa(props) {
  const [concluido, setConcluido] = useState(true);

  const remover = () => {
    if(concluido == false) {
      setConcluido(true)
    }
    
    props.array.splice(props.id, 1);
    props.task(props.task);
  };

  return (
    <div className="tarefa" id={concluido ? "tarefa" : "concluido"}>
      <span>{props.tarefa}</span>
      <section id={props.id} className="container-BTN">
        <button
          onClick={() => {
            setConcluido(!concluido);
            props.task(props.task);
          }}
        >
          <img className="verificar" src={verificar} />
        </button>
        <button onClick={remover}>
          <img className="deletar" src={deletar} />
        </button>
      </section>
    </div>
  );
}
