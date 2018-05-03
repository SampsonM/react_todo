import React from 'react';
import Checklist from './components/checklist';
import Menu from './components/menu';
import Info from './components/info';
import './components/css/app.css';

class App extends React.Component {
  state = {
    todos : [
      {
        text : 'sleep',
        completed : false
      }, {
        text : 'eat',
        completed : false
      }, {
        text : 'work',
        completed : false
      }],
      color : "aqua",
      navStatus: "navClosed",
      openInfo : "infoClosed"
  };

  componentDidMount = () => {
    const data = localStorage.getItem('ToDodata');
    if (data) {
    const { todos, color } = JSON.parse(data);
      this.setState({
        todos,
        color
      })
    }
  }

  render () {
    const { todos } =this.state;
    return (
      <div className="body" >
        <h1>ToDo<span style={{color : this.state.color}}>_</span>List</h1>
        <Menu
        openMenu={this.OpenMenu}
        openInfo={this.OpenInfo}
        navStatus={this.state.navStatus}
        completeAll={this.CompleteAll}
        deleteComplete={this.DeleteComplete}
        deleteAll={this.DeleteAll}
        color={this.state.color}
        />
        <Checklist 
        todos={todos}
        openMenu={this.OpenMenu}
        addTaskToList={this.AddTaskToList}
        removeTodo={this.RemoveTodo}
        changeCompleteStatus={this.ChangeCompleteStatus}
        color={this.state.color}
        changeColor={this.ChangeColor}
         />
         <Info 
         openInfoClass={this.state.openInfo}
         openInfo={this.OpenInfo}
         color={this.state.color}
         />
      </div>
    );
  }

  RemoveTodo = (taskToRemove) => {
    console.log('removing todo');
    const newTodos = this.state.todos.filter(task => task !== taskToRemove);
    this.setState({
      todos: newTodos,
    }, this.SaveToStorage);
  }

  AddTaskToList = (taskToAdd) => {
    console.log('adding to list');
    const newTodo = {
      text: taskToAdd,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    }, this.SaveToStorage)
  }

  ChangeCompleteStatus = (taskToComplete) => {
    console.log('marking Complete');
    this.setState({
      todos: this.state.todos.map(task => {
        if (task === taskToComplete) {
          return {...task, completed : !task.completed};
        }
        return task;
      })
    }, this.SaveToStorage)
  }

  ChangeColor = (color) => {
    console.log(color)
    this.setState({
      color : color
     }, this.SaveToStorage)
  }

  OpenMenu = () => {
    this.setState({
      navStatus: (this.state.navStatus === 'navOpen') ? 'navClosed' : 'navOpen'
    })
  }

  CompleteAll = () => {
    this.setState({
      todos : this.state.todos.map((task, i) => {
        return {
        text : task.text,
        completed : true
        }
      })
    }, this.SaveToStorage)
  }
  

  DeleteComplete = () => {
    this.setState({
      todos : this.state.todos.filter(task => !task.completed)
    }, this.SaveToStorage)
  }

  DeleteAll = () => {
    this.setState({
      todos : []
    }, this.SaveToStorage)
  }

  OpenInfo = () => {
    console.log('opening info')
    this.setState({
      openInfo : (this.state.openInfo === 'infoClosed') ? 'infoOpen' : 'infoClosed'
    })
  }

  SaveToStorage = () => {
    localStorage.setItem('ToDodata', JSON.stringify(this.state))
  }
}

export default App;
