import React from "react";
import { useEffect, useState } from "react";

export default function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=cfe9b37e897f48eea3603d73556d9ed6&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(popular);
  };
  return (
    <>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
          </div>
        );
      })}
    </>
  );
}
//? =${process.env.REACT_APP_API_KEY}
//! cfe9b37e897f48eea3603d73556d9ed6
