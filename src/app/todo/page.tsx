"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../service/firebase";

async function addDataToFireStore(todo: any) {
  try {
    const docRef = await addDoc(collection(db, "todo"), {
      todo: todo,
      
    });
    console.log("testing of docRef", docRef);
    console.log("doc write in Id", docRef.id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
const TodoPage = () => {
  const [input, setInput] = useState<any>();
  const [todo, setTodo] = useState<any>([]);

  const addTodo = async (e: any) => {
    e.preventDefault();
    const added = await addDataToFireStore(todo);
    console.log("added", added);
    setTodo([...todo, input]);
    if (added) {
      setInput("");
      alert("Data is update ");
    } else {
      alert("Data is not  update ");
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            TodoList{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="todo"
                  name="todo"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={addTodo}
              >
                Add to todo List
              </button>
            </div>
          </form>

          {todo?.map((list: any, index: number) => {
            return <li key={index}>{list}</li>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoPage;
