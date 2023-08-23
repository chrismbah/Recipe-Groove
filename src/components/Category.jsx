import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>{" "} 
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>{" "}
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai Food</h4>
      </SLink>{" "}
      <SLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg,#494949,#313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(.8);
   
    h4{
        color: white;
        font-size: large.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        /* background: yellow; */
        background: linear-gradient(right, #f27121 #e94057);
        
        svg{
            color: #ff0000;
        }
        h4{
            color: #df0b0b;
        }
    }
`;
