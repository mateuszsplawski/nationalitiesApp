import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.ul`
  padding: 0;
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Flag = styled.li`
  list-style: none;
  padding: 10px;
  margin: 10px;
  width: 200px;
  position: relative;
  background: whitesmoke;
  text-align: center;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 20px;
  box-shadow: 0 0 30px -20px #121212;

  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px -25px #121212;
  }

  img {
    width: 160px;
    height: 100px;
  }

  a {
    text-decoration: none;
  }

  p {
    color: black;
  }

  @media (max-width: 550px) {
    width: 120px;
    img {
      width: 100px;
      height: 60px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 350px) {
    width: 210px;
    img {
      width: 180px;
      height: 140px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const FlagList = ({ nations }) => {
  return (
    <StyledWrapper>
      {nations
        ? nations.map((nation, id) => (
            <Flag key={id}>
              <Link to={"NationalitiesApp/" + nation.name}>
                <img src={nation.flag} alt="" />
                <p>{nation.name}</p>
              </Link>
            </Flag>
          ))
        : undefined}{" "}
    </StyledWrapper>
  );
};

export default FlagList;
