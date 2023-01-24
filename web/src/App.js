import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

function App() {
  const [counter, setCounter] = useState(0);
  const [heroes, setHeroes] = useState([]);
  const [usedHeroes, setUsedHeroes] = useState([]);

  const getHeroes = async () => {
    await api.get('/users').then((res) => {
      console.log('making request');
      setHeroes(res.data);
    });
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const addHero = () => {
    const nextHero = heroes[counter];
    setUsedHeroes([...usedHeroes, nextHero]);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h2>Heroes</h2>
      <button
        onClick={() => {
          addHero();
        }}
        disabled={counter >= heroes.length}
      >
        Fetch
      </button>
      <div className="heroes-container">
        {usedHeroes.map((hero) => {
          return (
            <div key={`hero ${hero.id}`}>
              <img src={hero.image} alt={hero.name} className="hero-image" />
              <p>{hero.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
