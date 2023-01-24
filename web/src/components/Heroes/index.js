import { Button } from "../Button";
import "./style.css";
import { useState } from "react";

export const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [count, setCount] = useState(0);

  const callApi = () => {
    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((res) => {
        setHeroes(res[0].user);
      })
      .catch((err) => {
        console.log(err);
      });

    setCount(count + 1);
  };

  return (
    <main>
      {count < heroes.length || count === 0 ? (
        <Button callApi={callApi} />
      ) : (
        <button disabled>Mostrar</button>
      )}
      <section>
        {heroes?.map((elem, i) => (
          <div key={elem.id}>
            {i < count && (
              <>
                <img src={elem.image} alt="Foto do heroi" />
                <h3>{elem.name}</h3>
              </>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};
