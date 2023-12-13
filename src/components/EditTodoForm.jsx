import {useState} from 'react';

import Button from './Button';

const EditTodoForm = ({todo: {task, id}, editTodo}) => {
  const [term, setTerm] = useState(task);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!term) return;

    editTodo(id, term);

    setTerm('');
  };

  return (
    <form onSubmit={handleFormSubmit} className=' w-full flex gap-4 items-center my-8'>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className='  flex-1 bg-inherit text-primary-tint py-2 px-4 rounded-lg border-solid border-2 border-primary-tint focus:outline-0  placeholder:text-content-gray'
        type='text'
      />
      <Button type='submit' primary>
        Edit Task
      </Button>
    </form>
  );
};

export default EditTodoForm;
