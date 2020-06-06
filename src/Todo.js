import React from 'react';
import './Todo.css'
const Todo = (props) => {
    
    
    return (


        <div 
            className = "todo" >

            <h2> 
    {props.value+1}. {props.title} 
            </h2> 
        <button 
                className = "DelTodoBtn"
                id = {props.id}
                value = {props.value}
                onClick = {props.delTodo}
            >   
        </button>


        </div>



    );

};

export default Todo;