import React, { Component } from 'react'

class DropDown extends Component {
  render() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let dropDownList = days.map(day => {
        return <option>{day}</option>
    });
    return (
      <>
        <select>
            {dropDownList}
        </select>
      </>
    )
  }
}

export default DropDown
