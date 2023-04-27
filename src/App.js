import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import SearchItem from "./SearchItem";


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }
  const handleCheck = (id) => {
    const newItems = items.map((item) => {
        if (item.id === id) {
            item.checked = !item.checked;
        }
        return item;
    })
    setAndSaveItems(newItems);
  }
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setAndSaveItems(newItems);
  }
  const addItem = (itemName) => {
    const newItems = [...items, {id: items.length ? items[items.length-1].id+1 : 1, name: itemName, checked: false}];
    setAndSaveItems(newItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}/>
      <SearchItem 
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}/>
      <Content 
        items={items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))} 
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );

}

export default App;
