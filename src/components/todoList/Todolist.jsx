import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todolist = () => {
  const [list, setList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
//   const [editIndex, setEditIndex] = useState(-1); 
//   const [editedText, setEditedText] = useState("");

  const handleAdd = () => {
  
      setList([...list, todoInput.trim()]);
      setTodoInput("");
    
  };

  const handleDelete = (index) => {
    const newArr = list.filter((item, i) => {
        return i !== index
    })
    // setList(list.filter((item, i) => i !== index));
    setList(newArr)
  };

  

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditedText(list[index]);
//   };

//   const handleEditChange = (e) => {
//     setEditedText(e.target.value);
//   };

//   const handleSaveEdit = () => {
//     const newList = [...list];
//     newList[editIndex] = editedText.trim();
//     setList(newList);
//     setEditIndex(-1);
//     setEditedText("");
//   };

  console.log(list)
//   const mapMethod = [34, 53, 23, 53, 65]
//   const rr = mapMethod.map((item, index)=>{
//     return item === 53 ? item + 5 : item + 2
//   })
//   console.log(rr)
const [editId, setEditId] = useState("")
const [editedValue, setEditedValue] = useState("")

const handleEdit = (id) =>{
   setEditId(id)

}

const handleSaveChanges = () =>{
   const newArr = list.map((element, index)=>{
     return index === editId ? editedValue : element 
   })

   setList(newArr)
   setEditId("")
   setEditedValue("")
}
  return (
    <>
      <div className="TodolistMain">
        <div className="inputWrite">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="ADD Something"
          />
          {typeof editId == "number" ?<div>
          <input value={editedValue} onChange={(e)=> setEditedValue(e.target.value)} placeholder="Type here" />
          <button onClick={handleSaveChanges}>Save</button>
          </div>: null}
          <button onClick={handleAdd}>ADD List</button>
        </div>
        <div className="inputWrite">
          <ul>

            {list.map((todo, index) => {
             return <li key={index}>{todo} <FaEdit onClick={()=> handleEdit(index)}/>  <MdDeleteForever onClick={()=>handleDelete(index)} style={{color:"red"}}/> </li>;
            
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todolist;
