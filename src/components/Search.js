import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Search extends Component {
  state = {
    text: ''
  }
  
  inputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({text: ''})
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

Search.propTypes = {
  searchUsers = PropTypes.func.isRequired
}

export default Search
