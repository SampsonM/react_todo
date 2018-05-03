import React from 'react';
import './css/info.css';

class Instructions extends React.Component {
  render () {
    return (
    <div className={`infoDiv ${this.props.openInfoClass}`}>

        <h2 style={{backgroundColor: this.props.color}}>Welcome to the ToDo_List!</h2>
        <a className="closeInfoButton" onClick={this.props.openInfo}>&times;</a>
        <div className="infoText">
          <h3>Reminders are back!</h3>
          <p> Create your own list for your food-shopping, daily tasks, cleaning or even those new ideas!!
          </p>
          <h4>Create new notes</h4>
          <p>To create new notes just type in up to 30 characters and hit enter!<br></br>
          Mark them as complete, click the text to delete or long press to copy the text
          </p>
          <h4>Delete notes</h4>
          <p>To delete selected notes open the menu and select delete completed or delete all. <br></br>
          Warning! once deleted you can not retrieve notes!
          </p>
          <h4>Customise</h4>
          <p>To customise your lists colour scheme enter a hexcode color of your choice e.g #00ff00, #ff0000</p>
        </div>
    </div>
    )
  }
}

export default Instructions;