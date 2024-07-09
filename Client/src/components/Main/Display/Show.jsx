import React from "react";
import "./Show.css";
import Card from "./Card";

function Show({ editvalue, onDelete, value }) {
  return (
    <div>
      <div className="card-container">
        {value.map((item, index) => {
          return (
            <Card key={index} onDelete={onDelete} value={item.todoitems} />
          );
        })}
      </div>
    </div>
  );
}

export default Show;
