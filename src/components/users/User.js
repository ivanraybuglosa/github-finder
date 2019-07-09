import React, { Fragment, Component } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.login);
    this.props.fetchRepos(this.props.match.params.login);
  }

  render() {
    const { name, 
            avatar_url, 
            location, 
            bio, 
            blog, 
            login, 
            html_url, 
            company,
            followers, 
            following,
            public_repos,
            public_gists,
            hireable } = this.props.user;

    const { loading, repos} = this.props;
    
    if (loading) return <Spinner />
    
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">Back to Search</Link>
        Hireable: { hireable ? 
                    <i className="fas fa-check text-success"></i> : 
                    <i className="fas fa-times-circle text-danger"></i>
                  }
        <div className="card grid-2">
          <div className="all-center">
            <img  src={avatar_url} 
                  className="round-img" 
                  style={{width: '150px' }}
                  alt={login} />
            <h1>{name}</h1>

            { location && (
              <p>Location: {location}</p>
            )}
            <div>
              <span className="badge badge-light">Public Repositories: {public_repos}</span>
              <span className="badge badge-dark">Public Gists: {public_gists}</span>
            </div>
            <div>
              <span className="badge badge-primary">Followers: {followers}</span>
              <span className="badge badge-info">Following: {following}</span>
            </div>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>}
              </li>
              <li>
                {company && <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>Website:</strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
                </Fragment>}
              </li>
            </ul>
          </div>
        </div>

        <Repos repos={repos}/>
      </Fragment>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
}

export default User
