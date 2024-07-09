import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import Show from "./Display/Show";
import axios from "axios";
import "./main.css";

function Maincontent(props) {
  const [value, setValue] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [newValue, SetnewValue] = useState("");
  const [remove, setRemove] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4545/lists")
      .then((response) => {
        const data = response.data;
        const allTodos = data.flatMap((data) => ({
          id: data.id,
          todoitems: data.todoitems,
        }));
        console.log(allTodos);
        setValue(allTodos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (newValue) {
      const payload = {
        newtodo: newValue,
      };
      axios
        .post("http://localhost:4545/addtodo", payload)
        .then((res) => {
          const data = res.data;
          const allTodos = data.flatMap((data) => ({
            id: data.id,
            todoitems: data.todoitems,
          }));
          setValue(allTodos);
          SetnewValue("");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [newValue]);

  useEffect(() => {
    if (remove) {
      const payload = {
        name: remove,
      };
      axios.post("http://localhost:4545/delete", payload).then((res) => {
        const data = res.data;
        const allTodos = data.flatMap((data) => ({
          id: data.id,
          todoitems: data.todoitems,
        }));
        setValue(allTodos);
        setRemove("");
      });
    }
  }, [remove]);

  function editvalue(val) {
    setEditValue(val);
    console.log(editValue + " from main");
  }

  function addValue(input) {
    if (input !== "" && !value.includes(input)) {
      SetnewValue(input);
    } else {
      alert("Invalid Submit!!");
    }
  }

  function deletelist(removedvalue) {
    let newvalue = value.filter((val) => val !== removedvalue);
    setValue(newvalue);
    setRemove(removedvalue);
  }

  return (
    <div className="mainbody">
      <Input addValue={addValue} editValue={editValue} />
      <Show value={value} onDelete={deletelist} />
    </div>
  );
}

export default Maincontent;
