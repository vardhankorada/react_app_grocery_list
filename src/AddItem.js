import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({handleSubmit,newItem,setNewItem}) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={(e) =>{handleSubmit(e)}}>
            <label htmlFor='addItem'>Add Item</label>
            <input 
                type="text"
                ref={inputRef} 
                id="addItem"
                placeholder="Add Item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)} 
                autoFocus
                required
            />
            <button type="submit" onClick={() => inputRef.current.focus()}>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem