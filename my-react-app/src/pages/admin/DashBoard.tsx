import React from "react";

const DashBoard = () => {
  const description = ["Hello", "Hola", "ohayo"];

  const getDescriptionRandom = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  };
  const descriptionRandom = description[getDescriptionRandom(2)];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: 30,
          backgroundColor: "black",
          color: "white",
          padding: 30,
        }}
      >
        Hello, Admin
      </h1>
      <p>{descriptionRandom}</p>
    </>
  );
};

export default DashBoard;
