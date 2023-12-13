import {TrashIcon, PencilSquareIcon, CheckCircleIcon} from '@heroicons/react/24/solid';

const Todo = ({todo: {id, task, completed}, toggleComplete, toggleEditMode, deleteTodo}) => {
  return (
    <div className='flex justify-between items-center gap-2 w-full bg-primary text-primary-tint uppercase py-2 px-4 rounded-lg shadow-md mb-5 last:m-0  '>
      <p
        onClick={() => toggleComplete(id)}
        className={` min-w-[100px] break-words ${completed && 'text-yellow-400 line-through'}`}
      >
        {task}
      </p>
      <div className=' flex justify-center items-center gap-2'>
        <CheckCircleIcon
          onClick={() => toggleComplete(id)}
          className={` w-8 h-8 ${completed && 'text-yellow-400'}`}
        />
        <PencilSquareIcon onClick={() => toggleEditMode(id)} className=' w-8 h-8 ' />
        <TrashIcon onClick={() => deleteTodo(id)} className=' w-8 h-8 ' />
      </div>
    </div>
  );
};

export default Todo;
