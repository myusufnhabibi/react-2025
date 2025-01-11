import React, { useContext } from "react";
import TitleHeader from "../components/TitleHeader";
import { TodoContext } from "../context/TodoContext";

function Home() {
  const { todoList } = useContext(TodoContext);

  return (
    <>
      <TitleHeader title="Home" />
      <ul className="py-5">
        {todoList.map((itemTodo) => (
          <li key={itemTodo.id}>
            {itemTodo.title} -{" "}
            {itemTodo.isComplete ? "Selesai" : "Belum Selesai"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
