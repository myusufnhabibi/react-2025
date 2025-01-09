import React, { useState } from "react";
import TitleHeader from "../components/TitleHeader";

function Todo() {
  const [todoList, setTodoList] = useState([
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

  return (
    <>
      <TitleHeader title="Todo" />
      <div className="grid gap-6 my-6 grid-cols-2">
        <div className="border rounded-lg p-3">
          <h1 className="text-3xl text-center my-2 font-semibold">
            TAMBAH TODO
          </h1>
          <form action="">
            <div className="mb-4">
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                className="bg-gray-50 border block w-full p-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium">Body</label>
              <input
                type="text"
                className="bg-gray-50 border block w-full p-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="submit"
                className="bg-blue-600 text-white cursor-pointer border block w-full p-2 border-gray-300 rounded-lg hover:bg-blue-300 hover:text-black"
                value="SUMBIT"
              />
            </div>
          </form>
        </div>
        <div className="border rounded-lg p-3">
          <h1 className="text-3xl text-center my-2 font-semibold">DATA TODO</h1>
          <table className="w-full mt-5">
            <thead className="text-center uppercase bg-blue-600">
              <tr>
                <th className="px-6 py-3 text-center">No</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Body</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-blue-300">
              {todoList.map((item) => (
                <tr>
                  <td className="px-6 py-3 text-center">{item.id}</td>
                  <td className="px-6 py-3">{item.title}</td>
                  <td className="px-6 py-3">{item.body}</td>
                  <td className="px-6 py-3">{item.isComplete ? "☑️" : "✖️"}</td>
                  <td className="text-center">
                    {item.isComplete ? (
                      <span className=" border rounded-lg p-1 text-white bg-green-400">
                        Done
                      </span>
                    ) : (
                      <button>☑️</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Todo;
