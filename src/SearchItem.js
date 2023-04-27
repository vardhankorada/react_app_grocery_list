import React from 'react'

const SearchItem = ({setSearchTerm,searchTerm}) => {
    return (
        <form className="searchForm">
            <label htmlFor='searchItem'>Search Items</label>
            <input 
                type="text" 
                id="searchItem"
                placeholder="Search Items"
                role='searchbox'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                autoFocus
            />
        </form>
    )
}

export default SearchItem