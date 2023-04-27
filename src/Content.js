import React from 'react'
import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete}) => {
    return (
        <main>
            {items.length === 0 && <p className="no-items">No items in the list</p>}
            <ItemList
                items={items} 
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        </main>
    )
}

export default Content 