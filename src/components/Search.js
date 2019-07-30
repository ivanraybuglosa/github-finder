import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;
  
  const inputChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Please enter someting...', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  }
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input  type="text" 
                  name="text" 
                  placeholder="Search..." 
                  value={text}
                  onChange={inputChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        { users.length > 0 && (
          <button className="btn btn-light btn-block"
          onClick={clearUsers}>Clear</button>
        )}
      </div>
    )
}

export default Search
