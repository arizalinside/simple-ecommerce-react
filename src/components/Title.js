import React from "react";

export const Title = ({ name, title }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mx-auto my-3 text-center text-title">
          <h1 className="text-capitalize font-weigth-bold">
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};
