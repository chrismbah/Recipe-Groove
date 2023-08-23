import React from "react";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular"); //? Check if 'popular' is saved in local storge and save as variable 'check'

    if (check) {
      setPopular(JSON.parse(check)); //? If 'popular' is true/exists convert to JSON and setPopular as 'popular'
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=cfe9b37e897f48eea3603d73556d9ed6&number=12`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes)); //? Fetch data,convert to String and store in local storage
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe, id) => {
            return (
              <SplideSlide>
                <Card key={id}>
                  <p>{recipe.title}</p>

                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 300px;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

//? =${process.env.REACT_APP_API_KEY}
//! cfe9b37e897f48eea3603d73556d9ed6
//* cc743949391a4028a81626d56eee385a
