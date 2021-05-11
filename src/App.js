import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './Components/CharacterGrid';
import Header from './Components/Header.js';
import Search from './Components/Search';

function App() {
  const [items,setItems] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const [query,setQuery] = useState('');
  // `https://www.breakingbadapi.com/api/characters?name=${query}`
  useEffect(() =>{
    const fetchItems = async() =>{
      setLoading(true);
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(result.data);
      setItems(result.data);
      setLoading(false);
      return result;
    }
    fetchItems();
  },[query])
  return (
    <div className="container">
      <Header/>
      <Search getQuery = {(q) => setQuery(q)}/>
      <CharacterGrid isLoading ={isLoading} items = {items}/>
    </div>
  );
}

export default App;
