// import { useState, useEffect } from 'react';
// import { db } from '../../service/firebase';
// import {
//   collection,
//   doc,
//   updateDoc,
//   getDocs,
// } from 'firebase/firestore';

// const TodoPage = () => {
//   const [todos, setTodos] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const fetchTodos = async () => {
//     const querySnapshot = await getDocs(collection(db, 'todos'));
//     const data = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       text: doc.data().text,
//     }));
//     setTodos(data);
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const handleEdit = (id, text) => {
//     setEditMode(true);
//     setEditId(id);
//     setEditText(text);
//   };

//   const handleUpdate = async () => {
//     try {
//       const todoRef = doc(db, 'todos', editId);
//       await updateDoc(todoRef, { text: editText });

//       setEditMode(false);
//       setEditId(null);
//       setEditText('');

//       // Fetch and update the todo list after updating a todo
//       fetchTodos();
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {editMode && editId === todo.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={handleUpdate}>Update</button>
//               </>
//             ) : (
//               <>
//                 {todo.text}
//                 <button onClick={() => handleEdit(todo.id, todo.text)}>
//                   Edit
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoPage;
