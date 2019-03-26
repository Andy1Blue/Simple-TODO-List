
import React from 'react';
import '../../App.css';

  const ToDoForm = ({onChange, draft, onSubmit}) => (
        <div>
          <input type="text" onChange={onChange} value={draft}/>
          <button onClick={onSubmit}>Add</button>
        </div>
  );

export default ToDoForm;
