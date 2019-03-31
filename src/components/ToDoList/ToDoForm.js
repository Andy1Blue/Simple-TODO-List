
import React from 'react';
import '../../App.css';

  const ToDoForm = ({onChange, draft, onSubmit}) => (
        <div>
          <input className='addTaskInput' type='text' placeholder='Your ToDo item...' onChange={onChange} value={draft}/>
          <button className='addTaskButton' onClick={onSubmit}>Add</button>
        </div>
  );

export default ToDoForm;
