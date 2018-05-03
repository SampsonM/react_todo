import React from 'react';
import AddToDo from './addTo';
import './css/checklist.css';

class Checklist extends React.Component {
  
  render () {
    return (
      <div className="checklist">
        <AddToDo 
        addTaskToList={this.props.addTaskToList}
        changeColor={this.props.changeColor}
        openMenu={this.props.openMenu}
        />
        <ul>
          {this.props.todos.map((task, i) => {
              return (
              <li key={`${task}${i}`} style={{backgroundColor: this.props.color}}>
                <input type="checkbox" className="" checked={task.completed} onChange={() => this.props.changeCompleteStatus(task)}  ></input>
                <span className="li-text" onClick={() => this.props.removeTodo(task)} >{task.text}</span> 
              </li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default Checklist;
