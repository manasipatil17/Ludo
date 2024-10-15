import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import "./TodoList.css";
export default function TodoList(){
    let [todos, setTodos] = useState([{task:"Sample task",id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () =>{
        setTodos ((prevTodos)=>{
            return[...prevTodos, {task: newTodo, id:uuidv4()}];
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
       setNewTodo(event.target.value); 
    }
    let deleteTodo = (id) =>{
         setTodos((prevTodos) => todos.filter((todo)=> todo.id !=id));
    }
    let markAllDone = () => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => {
            return {
              ...todo,
              isDone: true,
            };
          })
        );
      };
      let markAsDone = (id) => {
        setTodos((todos) =>
          todos.map((todo) => {
            if (todo.id == id) {
              return {
                ...todo,
                isDone: true,
              };
            } else {
              return todo;
            }
          })
        );
      };
    let upperCaseAll = () =>{
        setTodos ((todos) =>
             todos.map((todo) => {
        return{
            ...todo,
            task: todo.task.toUpperCase(),
        }
        }
    )
        );
 }
    return(
      <div className="title"><h1>TODO LIST</h1>
          <div className="Todo">
            <input type="text" placeholder="Add New Task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <br />
            
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <hr />
            <h4>TASKS TODO </h4>
            <ol>
                {todos.map((todo)=>(
                <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp; 
                    <button onClick={()=>deleteTodo(todo.id)} style={{margin: "8px"}}>Delete</button>
                     <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                     </li> 
                ))}
            </ol>
            <button onClick={upperCaseAll} style={{margin: "8px"}}>upperCase All</button>
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
        </div>

    );
}