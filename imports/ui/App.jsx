import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import Task from './Task.jsx';

//App component -represents the whole App
class App extends Component {
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

