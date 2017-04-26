import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
  return(
    <form>
    <input
      type="text"
      placeholder="Search city"
      onChange={this.props.handleInput}
     />
     <input
       type="submit"
       value="Submit"
       onClick={this.props.handleSubmit}
     />
   </form>
  )
  }
}
