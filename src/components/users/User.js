import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user, loading, repos, getUser, getUserRepos, match}) => {
    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
        //eslint-disable-next-line
    }, []);

    const {name, avatar_url, location, company, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;

    if(loading) return <Spinner />

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">Back to Search</Link>
            Hireable: {' '}
            {hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />) }
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{width:'150px'}}/>
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && (<Fragment><h3>Bio</h3><p>{bio}</p></Fragment>)}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profil</a>
                    <ul>
                        <li>
                            {login && (<Fragment><b>Username: </b>{login}</Fragment>)}
                        </li>
                        <li>
                            {blog && (<Fragment><b>Company: </b>{company}</Fragment>)}
                        </li>
                        <li>
                            {blog && (<Fragment><b>Website: </b>{blog}</Fragment>)}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-ligth">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

export default User
