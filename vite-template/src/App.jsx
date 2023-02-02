import React from "react";
import "./App.css";
import { DrinkButtons } from "./components/ui/drinkbuttons";

export const App = () => {
  const greeting = "Welcome to my cafe";
  const description = <p>We serve the best coffee in the city </p>;

  return (
    <div className="App">
      <h1>{greeting}</h1>
      {DrinkButtons}
      <h2>Thanks for visiting!</h2>
    </div>
  );
};
