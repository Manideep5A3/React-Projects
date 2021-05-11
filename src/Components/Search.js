import React, { useState } from 'react'
import '../Css/Search.css';

function Search({getQuery}) {
    const [text,setText] = useState('');
    const change =(q) =>{
        setText(q);
        getQuery(q);
    }
    return (
        <div className ="search">
            <form>
                <input type ="text"
                    className = "search__input"
                    value = {text} 
                    placeholder = "Search Characters"
                    onChange = {(e)=>{
                        change(e.target.value)
                    }}
                />
            </form>
        </div>
    )
}

export default Search
