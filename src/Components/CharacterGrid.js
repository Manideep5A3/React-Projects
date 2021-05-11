import React from 'react'
import CharacterItems from './CharacterItems';
import '../Css/CharacterGrid.css';

function CharacterGrid({isLoading,items}) {
    //console.log(items);
    // if (isLoading) {
    //     return (<h1>Is Loading</h1>);
    //   }
    // else{
    //   return (items.map((item) =>(
    //     <CharacterItems item = {item}/>
    //   )));
    // }
   
    return isLoading ? <h1>Is loading</h1> : <section className="cards">
        {items.map(item => (
            <CharacterItems key={item.char_id} item={item} />
        ))}
    </section>
    
    
}

export default CharacterGrid
