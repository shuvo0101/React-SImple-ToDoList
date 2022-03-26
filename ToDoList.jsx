import React from 'react';

const ToDoList=(props)=>{
    
    return(
        <>
        <div>
            <i
        onClick={props.onselect}
        />
    <li>{props.text}</li>
    </div>
    </>
    );
}
export default ToDoList;