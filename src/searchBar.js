import React from 'react';

const SearchBar = ({searchChange}) =>{
    return (
        <div className="tc pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" name="" id="" onInput={searchChange}/>
        </div>
    )
}

export default SearchBar;