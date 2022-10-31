import React, { useState } from "react";
import ToDoList from "./ToDoList";

import ExposureIcon from '@mui/icons-material/Exposure';

const App =()=>{

    const [choice,setchoice]=useState('');
    const [Items,setItems]=useState([]);


    const inputChange=(event)=>{
        setchoice(event.target.value);
    }

    const submitItems=()=>{
        setItems((oldItemList)=>{
        //console.log(oldItemList)
        return [...oldItemList,choice];
       });

       setchoice('')  /// creating input filed empty again
    }
    
    const deleteItems=(id)=>{
        // alert("Item Deleted")
        console.log("Deleted")

        setItems((oldItemList)=>{
            return oldItemList.filter((arrElement,index)=>{
                return id!==index; // jo match nii hua o return karaya aur jo match hua usko filter out kr diya gya 
            })
        });
    }



    return(
        <>
        {/* <h1>Hello pramesh</h1>
         */}
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List <ExposureIcon/> </h1>
                <br />
                <input type="text" 
                placeholder="Add an Item"
                autoFocus='autofocus'
                name="item"
                value={choice}
                onChange={inputChange}
                />

                
                <button  onClick={submitItems}>+</button>
                <br />
                <ol>
                    {/* <li>{choice}</li> */}

                    {Items.map( (itemval,index)=>{
                        return <ToDoList 
                        text = {itemval}
                        key={index}
                        id={index}
                        onSelect= {deleteItems}
                        />
                    })}

                </ol>
            </div>
        </div> 
        </>
    )
}


export default App;