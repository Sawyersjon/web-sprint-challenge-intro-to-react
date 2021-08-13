import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios'



const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchCharacter = () =>{
      axios.get(`http://swapi.dev/api/people`)
          .then(res => {
              console.log(res.data.results)
              setCharacterList(res.data.results)
          })
          .catch((err) => {
            console.log(err)
          })
        }
    fetchCharacter()     
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterList = {characterList}/>
    </div>
  );
}

export default App;
