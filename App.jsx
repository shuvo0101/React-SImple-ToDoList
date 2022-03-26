import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{

const [inputList, setInputList]= useState("");

const[Item, setItem]= useState([]);

const itemEvent=(event)=>{
    setInputList(event.target.value);
};

const listofItem=()=>{
   setItem((oldItem)=>{
  return [...oldItem,inputList];
   });
   setInputList("");
};

const deleteItem=()=>{

};
    return(
<>
<div class="main_class">
    <div class="center_class">
<h1>To Do List</h1>
<br/>
<input type= "text"  placeholder="Add a Item" 
value={inputList}
onChange={itemEvent}/>
<br/>
<button onClick={listofItem}> Add Item</button>

<ol>
   
   {Item.map((allitem,index)=>{
       return<ToDoList
       key={index}
       id={index}
       text ={allitem}
       onselect={deleteItem}
       />;
  
   })}
   
</ol>

    </div>
</div>
</>
    );

};
export default App;