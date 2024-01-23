"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../service/firebase";
// here is data send to db
async function addDataToFireStore(input: any) {
  try {
    const docRef = await addDoc(collection(db, "todo"), {
      todo: input,
    });
    console.log("testing of docRef", docRef);
    console.log("doc write in Id", docRef.id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
// here is data fetch form the data base
const fetchqueryData = async () => {
  const querySelector = await getDocs(collection(db, "todo"));
  const data: any = [];
  querySelector.forEach((document) => {
    data.push({ ...document.data(), id: document.id });
  });
  console.log("data value", data);
  return data;
};
// here is main function
const TodoPage = () => {
  const [input, setInput] = useState<any>("");
  const [todos, setTodo] = useState<any>([]);
  const [editText, setEditText] = useState<any>("");
  // hereis data list show
  const addTodo = async (e: any) => {
    e.preventDefault();
    const added = await addDataToFireStore(input);
    console.log("added", added);
    if (todos && todos.docs && added) {
      let todoList = todos.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodo(todoList);
    }
    setInput("");
  };
  // here is delete function
  const deleteTodo = async (id: any) => {
    console.log("delete todo");
    try {
      const deleteRef = doc(db, "todo", id);
      console.log("deleteRef", deleteRef);
      await deleteDoc(deleteRef);
      setTodo((prevTodos: any) =>
        prevTodos.filter((todos: any) => todos.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchqueryData();
      console.log("useEffect data:", data);
      const dataArray = Object.values(data);
      setTodo(dataArray);
    };
    fetchData();
  }, []);
  // here is edit option
  const EditTodo = (id: any) => {};
  return (
    <React.Fragment>
      '
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            TodoList{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto w-1/2">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="todo"
                  name="todo"
                  type="text"
                  autoSave="none"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={addTodo}
                >
                  Add to todo List
                </button>
              </div>
            </div>
          </form>

          {Array.isArray(todos) &&
            todos?.map((list: any, index: number) => {
              return (
                <div className="flex gap-24 pt-4 justify-between items-center">
                  <li key={list?.id}>{list?.todo} </li>

                  {editText === list.id ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button>Update</button>
                    </>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        onClick={() => deleteTodo(list?.id)}
                        className="flex w-28 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => EditTodo(list?.id)}
                        className="flex w-28 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoPage;
