import {useState} from 'react';
import Button from './Button';

const TodoForm = ({addTodo}) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!term) return;

    addTodo(term);

    setTerm('');
  };

  return (
    <form onSubmit={handleFormSubmit} className=' w-full flex gap-4 items-center my-8'>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className='  flex-1 bg-inherit text-primary-tint py-2 px-4 rounded-lg border-solid border-2 border-primary-tint outline-none focus:border-secondary  placeholder:text-content-gray'
        type='text'
        placeholder='What is the task today?'
      />
      <Button primary type='submit'>
        Add Task
      </Button>
    </form>
  );
};

export default TodoForm;
