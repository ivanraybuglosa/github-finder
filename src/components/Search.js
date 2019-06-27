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
    const { showClear, clearUsers} = this.props
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
        { showClear && (
          <button className="btn btn-light btn-block"
          onClick={clearUsers}>Clear</button>
        )}
      </div>
    )
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
}

export default Search
