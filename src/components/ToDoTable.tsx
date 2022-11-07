import React, {useState, FC} from 'react';
import { IToDo } from '../Interfaces'

interface Props {
  toDo: IToDo;
  deleteToDo(removeItem: string): void
}

const ToDoTable = ({toDo, deleteToDo}:Props) => {

    return (
      <div>
        <table className="center">
          <tbody>
            <tr>
              <td>{toDo.date}</td>
              <td>{toDo.desc}</td>
              <td>{toDo.priority}</td>
              <td><button onClick={()=>{deleteToDo(toDo.desc)}}>Remove</button></td>
          </tr> 
        </tbody>
      </table>
      </div>
    );
  }
  
  export default ToDoTable;