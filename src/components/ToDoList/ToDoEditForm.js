import React, { Component } from 'react';
import '../../App.css';
import { get, update } from '../../helpers/toDoItemApi';
import { Formik } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as _ from 'ramda';
import '../../App.css';

class ToDoEditForm extends Component {
  state = {
    toDoItem: null,
    isLoading: false,
    disabled: false
  }

  itemId = () => this.props.match.params.itemId;

  componentDidMount = async () => {
    const toDoItem = await get(this.itemId());
    this.setState({toDoItem, isLoading: true});
  }

  render() {
    return (
      <div>
        <h1>Edit: {this.itemId()}</h1>
        {this.state.isLoading
          ? <Formik
              initialValues={{...this.state.toDoItem}}
              onSubmit={async (values) => {
                console.log("Submitting: ", values);
                await update(this.itemId(), {...values});
                this.props.history.push('/');
              }}
              validate={(values) => {
                let errors = {};

                if(!values.title) {
                  errors.title = "Requied title!";
                } else if (values.title.length < 3) {
                  errors.title = 'Title is too short - minimum 4 characters.'
                } else if (values.title.length > 50) {
                  errors.title = 'Title is too long - maximum 50 characters.'
                } else if (values.title.includes('fuck')) {
                  errors.title = 'Do not use thats words!'
                }

                if(_.isEmpty(errors)) {
                  this.setState({disabled: false});
                } else {
                  this.setState({disabled: true});
                }

                return errors;
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
                <div>
                  <form className='editForm' onSubmit={handleSubmit}>
                    <input
                      className='editFormInput'
                      name='title'
                      onChange={handleChange}
                      value={values.title}
                    />
                    <br/>
                    Completed?
                    <input
                      className='editFormCheckbox'
                      type='checkbox'
                      name='completed'
                      onChange={handleChange}
                      value={values.completed}
                      checked={values.completed}
                    />
                    <br/>
                    <button className='editFormInput' type='sumbit' disabled={this.state.disabled}>Update</button>
                    <br/>
                    <div className="errorMsg">{errors.title}</div>
                  </form>
                  <p><Link to='/'>Back to home page</Link></p>
                </div>
              )}
            />
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default withRouter(ToDoEditForm);
