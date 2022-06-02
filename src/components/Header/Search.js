import React from 'react'
import { FormControl } from 'react-bootstrap'
import './Search.css'


function Search() {
    return (
        <div className='searchInput'>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id='search-item'
            />
        </div>
    )
}

export default Search