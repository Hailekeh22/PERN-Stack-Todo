import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import Show from "./Display/Show";
import axios from "axios";
import "./main.css";

function Maincontent(props) {
  const [value, setValue] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [newValue, SetnewValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4545/lists")
      .then((response) => {
        const data = response.data;
        const allTodos = data.flatMap((d) => d.todoitems);
        setValue(allTodos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const payload = {
      newtodo: newValue,
    };
    axios.post("http://localhost:4545/addtodo", payload).then((res) => {
      const data = res.data;
      const allTodos = data.flatMap((d) => d.todoitems);
      setValue(allTodos);
      SetnewValue("");
    });
  }, [newValue]);

  function editvalue(val) {
    setEditValue(val);
    console.log(editValue + " from main");
  }

  function addValue(input) {
    if (input !== "" && !value.includes(input)) {
      setValue((prev) => [...prev, input]);
      SetnewValue(input);
    } else {
      alert("Invalid Submit!!");
    }
  }

  function deletelist(removedvalue) {
    let newvalue = value.filter((val) => val !== removedvalue);
    setValue(newvalue);
  }

  function editvalue(val) {
    setEditValue(val);
  }

  return (
    <div className="mainbody">
      <Input addValue={addValue} editValue={editValue} />
      <Show value={value} editvalue={editvalue} onDelete={deletelist} />
    </div>
  );
}

export default Maincontent;
