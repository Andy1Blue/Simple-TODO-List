import React, { Component } from 'react';
import '../../App.css';
import { get, update } from '../../helpers/toDoItemApi';
import { Formik } from 'formik';

class ToDoEditForm extends Component {
  state = {
    toDoItem: null,
    isLoading: false
  }

  itemId = () => this.props.match.params.itemId;

  componentDidMount = async () => {
    const toDoItem = await get(this.itemId());
    this.setState({toDoItem, isLoading: true});
  }

  render() {
    return (
      <div>
        Edit form for {this.itemId()}
        {this.state.isLoading
          ? <Formik
              initialValues={{...this.state.toDoItem}}
              onSubmit={(values) => {
                console.log("Submitting: ", values);
                update(this.itemId(), {...values});
              }}
              render={({
                values,
                errors,
                touches,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    name='content'
                    onChange={handleChange}
                    value={values.title}
                  />
                  <br/>
                  <button type='sumbit'>Update</button>
                </form>
              )}
            />
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default ToDoEditForm;
