import React from "react";
import "./Show.css";
import Card from "./Card";

function Show({ editvalue, onDelete, value }) {
  return (
    <div>
      <div className="card-container">
        {value.map((item, index) => {
          return (
            <Card
              key={index}
              editvalue={editvalue}
              onDelete={onDelete}
              value={item.todoitems}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Show;
