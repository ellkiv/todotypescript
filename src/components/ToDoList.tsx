import React, {useState, ChangeEvent, SyntheticEvent} from 'react';
import ToDoTable from './ToDoTable'
import { IToDo } from '../Interfaces'

const ToDoList = () => {
  const [date, setDate] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [priority, setPriority] = useState<string>('')

  const [toDo, setToDo] = useState<IToDo[]>([])

  const inputChanged = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'date') {
      setDate(event.target.value)
    } else if (event.target.name === 'desc') {
      setDesc(event.target.value)
    } else {
      setPriority(event.target.value)
    }
  }

  const addToDo = (e: SyntheticEvent) => {
    e.preventDefault();
    const newToDo = {
      date: date,
      desc: desc,
      priority: priority
    }
    setToDo([...toDo, newToDo])
  }

  const deleteToDo = (removeItem:string) => {
    setToDo(toDo.filter((toDo)=> {
      return toDo.desc !== removeItem
    }))
  }

    return (
      <div>
        <form>
          <input
            type='text'
            name='date'
            value={date}
            placeholder='Date'
            onChange={inputChanged}
          />
          <input
            type='text'
            name='desc'
            value={desc}
            placeholder='Description'
            onChange={inputChanged}
          />
            <input
            type='text'
            name='priority'
            value={priority}
            placeholder='Priority'
            onChange={inputChanged}
          />
          <button onClick={addToDo}>Add</button>
        </form>
        {
        toDo.map((toDo:IToDo, key:number)=>{
          return <ToDoTable key={key} toDo={toDo} deleteToDo={deleteToDo} />
        })
        }
      </div>
    );
  }
  
  export default ToDoList;