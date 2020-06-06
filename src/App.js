import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo.js';
import db from "./firebase";
import { v4 as uuidv4 } from 'uuid';

let indSta=0;
let amount=0;
var someVarName = amount;

function App() {
  
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState("");
      

      


        function deleteTodo(e) {

        e.preventDefault();

        console.log(docData);

        let index = e.target.value;

        let delItem = docData[index].id

        amount--;
        console.log("Deleted item DOC-ID:" + delItem);   
        db.collection("todos").doc(delItem).delete();
    

      }
      const [docData, setDocData] = useState([]);
      useEffect(() => {
        db.collection("todos").onSnapshot((snapshot) => {
          setDocData(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
          setTodos(snapshot.docs.map((doc) => doc.data().title));
        
        });
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();      
    
        db.collection("todos")
        .doc(uuidv4()).set({
          title: input,
        })  
        localStorage.setItem(amount, someVarName);     
        amount += 1;
        
        setInput("");
       
      }
     
     
      
  return (
  
<div className="App">
      
  <div className="todoTitle"><h1>TODO APP</h1></div>
    <form>
      <input
        value={input} 
        onChange={e => setInput(e.target.value)}
        
        type="text"
        placeholder = "Write a TODO..." 
      ></input> 
      <button
        className="AddTodoBtn"
        disabled={!input} 
      
        type="submit"
        
        onClick={handleSubmit}>
        
      </button>  
  <h3>You have {amount} TODO(s) left</h3>
<div className="todosContainer">
  {    
        todos.map((todo,index) => (
        
          <Todo
             title = {todo} 
             id = {uuidv4()}
             key = {index}
             value = {index}
             delTodo = {deleteTodo}
        
          />
         
        ))
        
      }   
      </div> 
    </form>
    
      
</div>
    
        );
        
        
  
    }

export default App;
