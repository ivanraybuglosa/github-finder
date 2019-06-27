import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }
  
  inputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input  type="text" 
                  name="text" 
                  placeholder="Search..." 
                  value={this.state.value}
                  onChange={this.inputChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
