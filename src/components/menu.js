import React from 'react';
import './css/menu.css';

class Menu extends React.Component {
  render () {
    return (
    <nav className={`nav ${this.props.navStatus}`} style={{backgroundColor: this.props.color}}>
        <button className={`navButton ${this.props.navStatus}`} onClick={this.props.completeAll}>Complete all</button>
        <button className={`navButton ${this.props.navStatus}`} onClick={this.props.deleteComplete}>Delete complete</button>
        <button className={`navButton ${this.props.navStatus}`} onClick={this.props.deleteAll}>Delete all</button>
        <button className={`navButton ${this.props.navStatus}`} onClick={this.HanldeInfoOpen}>Info</button>
        <a className={`closeButton ${this.props.navStatus}`} onClick={this.props.openMenu}>&times;</a>
    </nav>
    )
  }
  
  HanldeInfoOpen = () => {
    this.props.openInfo();
    this.props.openMenu();
  }
}

export default Menu;
