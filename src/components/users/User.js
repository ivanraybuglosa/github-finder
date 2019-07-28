import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

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
          hireable } = githubContext.user;
  if (githubContext.loading) return <Spinner />
    
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

      <Repos />
    </Fragment>
  )
}

export default User
