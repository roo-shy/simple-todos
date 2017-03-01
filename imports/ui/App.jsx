import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import Task from './Task.jsx';

//App component -represents the whole App
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'Task 1' },
      { _id: 2, text: 'Task 2' },
      { _id: 3, text: 'Task 3' },
    ];
  }
  
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  
  render() {
    return (
      <div className="container">
       <header>
         <h1>Todo List</h1>
       </header>
       
       <ul>
        {this.renderTasks}
       </ul>
    );
  }
}