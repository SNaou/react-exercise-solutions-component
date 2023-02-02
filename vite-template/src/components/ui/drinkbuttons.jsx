import React, { Fragment } from "react";

export const DrinkButtons = () => {
  return (
    <Fragment>
      <h2> Would you like tea or coffee?</h2>

      <div className="button-group">
        <button className="button">Coffee</button>
        <button className="button">Tea</button>
      </div>
    </Fragment>
  );
};
