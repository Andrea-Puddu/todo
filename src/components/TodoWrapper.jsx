import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../constants';

import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import Button from './Button';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  // Add Todo
  const addTodo = (term) => {
    const updatedTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: term.trim(),
        completed: false,
        editMode: false,
      },
    ];

    setTodos(updatedTodos);
  };

  // Toggle Todo completed property
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)));
  };

  // Toggle Todo editMode property
  const toggleEditMode = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, editMode: !todo.editMode} : todo)));
  };

  // Edit Todo term
  const editTodo = (id, term) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, task: term.trim(), editMode: !todo.editMode} : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='bg-primary-shade w-full sm:max-w-[640px] sm:m-auto p-8 sm:rounded-lg sm:shadow-lg'>
      <h3 className=' text-center mb-5'>{currentDate}</h3>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.length > 1 && (
        <Button
          onClick={() => setTodos([])}
          secondary
          full
          className=' sticky top-4 left-0 z-10 opacity-90 mb-4'
        >
          Delete All Tasks
        </Button>
      )}

      {todos.map((todo) =>
        todo.editMode ? (
          <EditTodoForm todo={todo} editTodo={editTodo} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleEditMode={toggleEditMode}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
