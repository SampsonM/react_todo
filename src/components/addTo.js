import React from 'react';
import './css/addTo.css';

class AddToDo extends React.Component {
  state = {
    input: ''
  }

  render () {
    return (
      <div>
        <p onClick={() => this.props.openMenu(this.props.menuWidth)} className="menu-symbol">&#8285;</p>
        <input id="to-do-input" onKeyUp={this.handleKeyUp}/>
      </div>
    );
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.charAt(0) === '#') {
        this.props.changeColor(event.target.value);
      } else {
        this.props.addTaskToList(event.target.value);
        event.target.value = '';
      }
    }
  }
  
  handleChange = (event) => {
    const inputText = event.target.value;
    this.setState({
      input: inputText
    })
  }

  handleClick = event => {
    const inputText = this.state.input;
    if (inputText.charAt(0) === '#') {
      this.props.changeColor(inputText);
    } else if (inputText) {
      this.props.addTaskToList(inputText);
      this.setState({
        input: ''
      })
    }
  }

}

export default AddToDo;
