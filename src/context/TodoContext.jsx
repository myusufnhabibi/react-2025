import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useStatetate([
    {
      id: 1,
      title: "Kerja",
      body: "Kerja di Kantor",
      isComplete: false,
    },
    {
      id: 2,
      title: "Ngoding",
      body: "Ngoding Javascript",
      isComplete: true,
    },
    {
      id: 3,
      title: "Main",
      body: "Main bersama Istri",
      isComplete: false,
    },
  ]);

  const addTodo = (title, body) => {
    const todoLength = todoList.length;
    setTodoList([
      ...todoList,
      {
        id: todoLength + 1,
        title: title,
        body: body,
        isComplete: false,
      },
    ]);

    setTitle("");
    setBody("");
  };

  const changeStatusTodo = (id) => {
    setTodoList((itemTodo) =>
      itemTodo.map((data) =>
        data.id === id ? { ...data, isComplete: true } : data
      )
    );
    console.log(todoList);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, changeStatusTodo }}
    >
        {children}
    </TodoContext.Provider>
  );
};
